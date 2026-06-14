/**
 * FishingPal Solunar Engine
 * Implements the Solunar Theory (John Alden Knight, 1926) as used by the
 * Farmers Almanac for fishing predictions.
 *
 * Factors:
 *  1. Moon phase (new & full moon = best days)
 *  2. Major solunar periods (moon overhead / underfoot) — 2-hr windows
 *  3. Minor solunar periods (moonrise / moonset)        — 1-hr windows
 *  4. Solar factor (dawn & dusk feed times)
 */

// suncalc is a CommonJS module — must be required at runtime
// eslint-disable-next-line @typescript-eslint/no-require-imports
const SunCalc = require("suncalc");

// ─── Types ────────────────────────────────────────────────────────────────────

export type FishingRating = "Excellent" | "Good" | "Fair" | "Poor";

export interface HourlyQuality {
  hour: number;        // 0-23
  label: string;       // "6 AM"
  quality: number;     // 0-100
  rating: FishingRating;
  isPeak: boolean;
  periodType?: "Major" | "Minor" | "Solar";
  periodLabel?: string;
}

export interface FishingWindow {
  startHour: number;
  endHour: number;
  startLabel: string;
  endLabel: string;
  quality: number;
  rating: FishingRating;
  type: "Major" | "Minor" | "Solar";
  description: string;
}

export interface MoonInfo {
  phase: number;          // 0–1
  phaseName: string;
  phaseEmoji: string;
  illumination: number;   // 0–100 %
  riseTime: string;
  setTime: string;
  transitTime: string;    // when moon is overhead
  fishingScore: number;   // 0–100
}

export interface DaySolunarData {
  date: Date;
  moon: MoonInfo;
  hourly: HourlyQuality[];
  windows: FishingWindow[];
  overallScore: number;
  overallRating: FishingRating;
  farmersAlmanacTip: string;
}

// ─── Moon Phase Helpers ───────────────────────────────────────────────────────

function getMoonPhaseInfo(phase: number): { name: string; emoji: string } {
  if (phase < 0.03 || phase >= 0.97) return { name: "New Moon",         emoji: "🌑" };
  if (phase < 0.22)                  return { name: "Waxing Crescent",   emoji: "🌒" };
  if (phase < 0.28)                  return { name: "First Quarter",     emoji: "🌓" };
  if (phase < 0.47)                  return { name: "Waxing Gibbous",    emoji: "🌔" };
  if (phase < 0.53)                  return { name: "Full Moon",         emoji: "🌕" };
  if (phase < 0.72)                  return { name: "Waning Gibbous",    emoji: "🌖" };
  if (phase < 0.78)                  return { name: "Last Quarter",      emoji: "🌗" };
  return                                    { name: "Waning Crescent",   emoji: "🌘" };
}

/**
 * Moon phase score 0-100.
 * New & full moon → 100; quarter moons → ~40
 */
function moonPhaseScore(phase: number): number {
  const dNew  = Math.min(phase, 1 - phase);          // 0 at new moon, 0.5 max
  const dFull = Math.abs(phase - 0.5);               // 0 at full moon, 0.5 max
  const dist  = Math.min(dNew, dFull);               // 0 at new/full, 0.25 at quarters
  return Math.round(100 - (dist / 0.25) * 60);       // 100 → 40
}

// ─── Moon Transit Finder ──────────────────────────────────────────────────────

/**
 * Find the time when the moon is at maximum altitude (overhead / transit).
 * Scans the day in 5-min steps.
 */
function findMoonTransit(date: Date, lat: number, lon: number): Date {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  let maxAlt   = -Infinity;
  let best     = new Date(start);

  for (let m = 0; m < 1440; m += 5) {
    const t   = new Date(start.getTime() + m * 60_000);
    const pos = SunCalc.getMoonPosition(t, lat, lon);
    if (pos.altitude > maxAlt) { maxAlt = pos.altitude; best = t; }
  }
  return best;
}

// ─── Time Helpers ─────────────────────────────────────────────────────────────

function fmt(date: Date | null | undefined): string {
  if (!date) return "N/A";
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}

function hourLabel(h: number): string {
  if (h === 0)  return "12 AM";
  if (h < 12)   return `${h} AM`;
  if (h === 12) return "12 PM";
  return `${h - 12} PM`;
}

function hoursDiff(a: Date, b: Date): number {
  return Math.abs(a.getTime() - b.getTime()) / 3_600_000;
}

// ─── Farmers Almanac Tips ─────────────────────────────────────────────────────

function almanacTip(overallScore: number, phaseName: string): string {
  if (overallScore >= 80)
    return `${phaseName} days are prime fishing days according to the Farmers Almanac. Plan a full day on the water!`;
  if (overallScore >= 65)
    return `A good fishing day. Target the major solunar windows for the best action.`;
  if (overallScore >= 45)
    return `Fair conditions. Focus on the dawn/dusk solar periods and any minor solunar windows.`;
  return `Tough day for fishing. The quarter moon dampens activity — but dawn/dusk still worth a try.`;
}

// ─── Rating Helper ────────────────────────────────────────────────────────────

function toRating(score: number): FishingRating {
  if (score >= 75) return "Excellent";
  if (score >= 55) return "Good";
  if (score >= 35) return "Fair";
  return "Poor";
}

// ─── Main Calculation ─────────────────────────────────────────────────────────

export function getSolunarData(
  date: Date,
  lat: number,
  lon: number
): DaySolunarData {
  // ── Moon data ─────────────────────────────────────────────────────────────
  const illum      = SunCalc.getMoonIllumination(date);
  const moonTimes  = SunCalc.getMoonTimes(date, lat, lon);
  const sunTimes   = SunCalc.getTimes(date, lat, lon);
  const { name: phaseName, emoji: phaseEmoji } = getMoonPhaseInfo(illum.phase);
  const phaseScore = moonPhaseScore(illum.phase);
  const transitTime = findMoonTransit(date, lat, lon);
  const antiTransit = new Date(transitTime.getTime() + 12 * 3_600_000);

  const moonRise = moonTimes.rise  instanceof Date ? moonTimes.rise  : null;
  const moonSet  = moonTimes.set   instanceof Date ? moonTimes.set   : null;
  const sunrise  = sunTimes.sunrise instanceof Date ? sunTimes.sunrise : null;
  const sunset   = sunTimes.sunset  instanceof Date ? sunTimes.sunset  : null;

  // ── Hourly quality ────────────────────────────────────────────────────────
  const hourly: HourlyQuality[] = [];

  for (let h = 0; h < 24; h++) {
    const t = new Date(date);
    t.setHours(h, 30, 0, 0);

    let score = 8; // baseline
    let periodType: HourlyQuality["periodType"] | undefined;
    let periodLabel: string | undefined;

    // Moon phase contribution (0–25)
    score += Math.round(phaseScore * 0.25);

    // Major solunar periods (moon overhead or underfoot)
    const dTransit     = hoursDiff(t, transitTime);
    const dAntiTransit = hoursDiff(t, antiTransit);
    const dMajor       = Math.min(dTransit, dAntiTransit);

    // Minor solunar periods (moonrise / moonset)
    const dRise = moonRise ? hoursDiff(t, moonRise) : 99;
    const dSet  = moonSet  ? hoursDiff(t, moonSet)  : 99;
    const dMinor = Math.min(dRise, dSet);

    if (dMajor <= 1.0) {
      score += 42;
      periodType  = "Major";
      periodLabel = dTransit < dAntiTransit ? "Moon Overhead" : "Moon Underfoot";
    } else if (dMajor <= 2.0) {
      score += 26;
      periodType  = "Major";
      periodLabel = "Near Major Period";
    } else if (dMinor <= 0.75) {
      score += 26;
      periodType  = "Minor";
      periodLabel = dRise < dSet ? "Moonrise" : "Moonset";
    } else if (dMinor <= 1.5) {
      score += 16;
      periodType  = "Minor";
      periodLabel = "Near Minor Period";
    }

    // Solar factor (dawn / dusk)
    const dSunrise = sunrise ? hoursDiff(t, sunrise) : 99;
    const dSunset  = sunset  ? hoursDiff(t, sunset)  : 99;
    const dSun     = Math.min(dSunrise, dSunset);

    if (dSun <= 0.5) {
      score += 20;
      if (!periodType) { periodType = "Solar"; periodLabel = dSunrise < dSunset ? "Sunrise" : "Sunset"; }
    } else if (dSun <= 1.5) {
      score += 14;
    } else if (sunrise && sunset && t >= sunrise && t <= sunset) {
      score += 5; // daytime
    } else {
      score += 2; // nighttime
    }

    score = Math.min(100, Math.round(score));

    hourly.push({
      hour: h,
      label: hourLabel(h),
      quality: score,
      rating: toRating(score),
      isPeak: score >= 68,
      periodType,
      periodLabel,
    });
  }

  // ── Best fishing windows ──────────────────────────────────────────────────
  const windows: FishingWindow[] = [];
  let i = 0;

  while (i < 24) {
    if (hourly[i].quality >= 50 && hourly[i].periodType) {
      let j = i;
      while (j < 24 && hourly[j].quality >= 45) j++;
      const slice  = hourly.slice(i, j);
      const best   = slice.reduce((a, b) => (a.quality > b.quality ? a : b));
      windows.push({
        startHour:  i,
        endHour:    j - 1,
        startLabel: hourLabel(i),
        endLabel:   hourLabel(j - 1),
        quality:    best.quality,
        rating:     toRating(best.quality),
        type:       best.periodType === "Major" ? "Major" : best.periodType === "Minor" ? "Minor" : "Solar",
        description: best.periodLabel ?? "Peak Window",
      });
      i = j;
    } else {
      i++;
    }
  }

  // Sort best windows by quality descending, keep top 4
  windows.sort((a, b) => b.quality - a.quality);
  const topWindows = windows.slice(0, 4);

  // ── Overall score ─────────────────────────────────────────────────────────
  const peakScores = hourly
    .map(h => h.quality)
    .sort((a, b) => b - a)
    .slice(0, 6);
  const overallScore = Math.round(
    peakScores.reduce((s, v) => s + v, 0) / peakScores.length
  );

  return {
    date,
    moon: {
      phase:        illum.phase,
      phaseName,
      phaseEmoji,
      illumination: Math.round(illum.fraction * 100),
      riseTime:     fmt(moonRise),
      setTime:      fmt(moonSet),
      transitTime:  fmt(transitTime),
      fishingScore: phaseScore,
    },
    hourly,
    windows: topWindows,
    overallScore,
    overallRating: toRating(overallScore),
    farmersAlmanacTip: almanacTip(overallScore, phaseName),
  };
}

// ─── Monthly Calendar Scores ─────────────────────────────────────────────────

export interface CalendarDay {
  day: number;
  date: Date;
  score: number;
  rating: FishingRating;
  phaseEmoji: string;
  phaseName: string;
  isToday: boolean;
}

export function getMonthlyCalendar(
  year: number,
  month: number,           // 0-based (Jan=0)
  lat: number,
  lon: number
): CalendarDay[] {
  const today       = new Date();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: CalendarDay[] = [];

  for (let d = 1; d <= daysInMonth; d++) {
    const date  = new Date(year, month, d, 12, 0, 0);
    const illum = SunCalc.getMoonIllumination(date);
    const score = moonPhaseScore(illum.phase);
    const { name, emoji } = getMoonPhaseInfo(illum.phase);
    const isToday = (
      today.getFullYear() === year &&
      today.getMonth()    === month &&
      today.getDate()     === d
    );
    days.push({ day: d, date, score, rating: toRating(score), phaseEmoji: emoji, phaseName: name, isToday });
  }

  return days;
}
