"use client";

import { MoonInfo } from "@/lib/solunar";
import { cn } from "@/lib/utils";

interface Props {
  moon: MoonInfo;
}

export function LunarDisplay({ moon }: Props) {
  const scoreColor =
    moon.fishingScore >= 75 ? "text-cyan-400" :
    moon.fishingScore >= 55 ? "text-green-400" :
    moon.fishingScore >= 35 ? "text-amber-400" : "text-red-400";

  return (
    <div className="space-y-4">
      {/* Big moon emoji + phase */}
      <div className="flex items-center gap-4">
        <span className="text-6xl leading-none select-none">{moon.phaseEmoji}</span>
        <div>
          <p className="font-semibold text-base">{moon.phaseName}</p>
          <p className="text-sm text-muted-foreground">{moon.illumination}% illuminated</p>
          <p className={cn("text-sm font-semibold mt-1", scoreColor)}>
            Fishing Score: {moon.fishingScore}/100
          </p>
        </div>
      </div>

      {/* Illumination bar */}
      <div>
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Illumination</span>
          <span>{moon.illumination}%</span>
        </div>
        <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-slate-400 to-white transition-all duration-700"
            style={{ width: `${moon.illumination}%` }}
          />
        </div>
      </div>

      {/* Times */}
      <div className="grid grid-cols-3 gap-2 text-center">
        {[
          { label: "🌙 Rise",    value: moon.riseTime    },
          { label: "⬆️ Overhead", value: moon.transitTime },
          { label: "🌙 Set",     value: moon.setTime     },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-lg bg-slate-800/50 px-2 py-2">
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="font-mono text-xs font-semibold mt-0.5">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
