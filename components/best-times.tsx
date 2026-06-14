"use client";

import { FishingWindow } from "@/lib/solunar";
import { cn } from "@/lib/utils";
import { Zap, Star } from "lucide-react";

interface Props { windows: FishingWindow[] }

function windowStyle(type: string, rating: string) {
  if (rating === "Excellent") return "border-cyan-500/40 bg-cyan-500/10";
  if (rating === "Good")      return "border-green-500/40 bg-green-500/10";
  if (type === "Major")       return "border-amber-500/40 bg-amber-500/10";
  return "border-slate-600/50 bg-slate-800/30";
}

function ratingColor(rating: string) {
  if (rating === "Excellent") return "text-cyan-400";
  if (rating === "Good")      return "text-green-400";
  if (rating === "Fair")      return "text-amber-400";
  return "text-red-400";
}

export function BestTimes({ windows }: Props) {
  if (!windows.length) {
    return (
      <div className="text-center py-8 text-muted-foreground text-sm">
        No significant solunar windows today
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {windows.map((w, i) => (
        <div
          key={i}
          className={cn(
            "rounded-xl border p-3 flex items-center gap-3",
            windowStyle(w.type, w.rating)
          )}
        >
          {/* Icon */}
          <div className={cn("flex-shrink-0", ratingColor(w.rating))}>
            {w.type === "Major" ? (
              <Star className="h-5 w-5 fill-current" />
            ) : (
              <Zap className="h-5 w-5" />
            )}
          </div>

          {/* Time range */}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm">
              {w.startLabel} – {w.endLabel}
            </p>
            <p className="text-xs text-muted-foreground truncate">{w.description}</p>
          </div>

          {/* Badges */}
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <span className={cn("text-xs font-semibold", ratingColor(w.rating))}>
              {w.rating}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700/60 text-muted-foreground">
              {w.type}
            </span>
          </div>
        </div>
      ))}

      <p className="text-xs text-muted-foreground pt-1 text-center">
        ⭐ Major = moon overhead/underfoot &nbsp;·&nbsp; ⚡ Minor = moonrise/set
      </p>
    </div>
  );
}
