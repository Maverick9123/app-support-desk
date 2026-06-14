"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CalendarDay } from "@/lib/solunar";
import { cn } from "@/lib/utils";

interface Props {
  days: CalendarDay[];
  year: number;
  month: number;
  onMonthChange: (year: number, month: number) => void;
}

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAYS_OF_WEEK = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function ratingBg(rating: string) {
  switch (rating) {
    case "Excellent": return "bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-500/30";
    case "Good":      return "bg-green-500/20 text-green-300";
    case "Fair":      return "bg-amber-500/20 text-amber-300";
    default:          return "bg-red-500/10 text-red-400";
  }
}

export function FishingCalendar({ days, year, month, onMonthChange }: Props) {
  const firstDow = new Date(year, month, 1).getDay(); // 0=Sun
  const blanks = Array(firstDow).fill(null);

  const prev = () => month === 0 ? onMonthChange(year - 1, 11) : onMonthChange(year, month - 1);
  const next = () => month === 11 ? onMonthChange(year + 1, 0)  : onMonthChange(year, month + 1);

  return (
    <div className="space-y-3">
      {/* Month navigator */}
      <div className="flex items-center justify-between">
        <button onClick={prev} className="p-1.5 rounded-lg hover:bg-white/5 transition-colors">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <h3 className="font-semibold text-sm">{MONTHS[month]} {year}</h3>
        <button onClick={next} className="p-1.5 rounded-lg hover:bg-white/5 transition-colors">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Day-of-week headers */}
      <div className="grid grid-cols-7 gap-0.5">
        {DAYS_OF_WEEK.map(d => (
          <div key={d} className="text-center text-xs text-muted-foreground py-1 font-medium">{d}</div>
        ))}

        {/* Blank cells before month start */}
        {blanks.map((_, i) => <div key={`b${i}`} />)}

        {/* Day cells */}
        {days.map(day => (
          <div
            key={day.day}
            title={`${day.phaseName} — ${day.rating} fishing`}
            className={cn(
              "relative flex flex-col items-center justify-center rounded-md py-1.5 cursor-default",
              "text-xs transition-colors",
              ratingBg(day.rating),
              day.isToday && "ring-2 ring-cyan-400 font-bold"
            )}
          >
            <span className="leading-none">{day.phaseEmoji}</span>
            <span className="mt-0.5 font-semibold">{day.day}</span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-1 pt-1 text-xs">
        {[
          { cls: "bg-cyan-500/20 text-cyan-300",  label: "Excellent" },
          { cls: "bg-green-500/20 text-green-300", label: "Good"      },
          { cls: "bg-amber-500/20 text-amber-300", label: "Fair"      },
          { cls: "bg-red-500/10 text-red-400",     label: "Poor"      },
        ].map(({ cls, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <span className={cn("w-3 h-3 rounded-sm", cls)} />
            <span className="text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
