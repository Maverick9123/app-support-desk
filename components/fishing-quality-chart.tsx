"use client";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, ReferenceLine,
} from "recharts";
import { HourlyQuality } from "@/lib/solunar";

interface Props {
  data: HourlyQuality[];
}

function barColor(q: number): string {
  if (q >= 75) return "#06b6d4"; // cyan  – Excellent
  if (q >= 55) return "#22c55e"; // green – Good
  if (q >= 35) return "#f59e0b"; // amber – Fair
  return "#ef4444";              // red   – Poor
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d: HourlyQuality = payload[0].payload;
  const colorMap: Record<string, string> = {
    Excellent: "text-cyan-400",
    Good:      "text-green-400",
    Fair:      "text-amber-400",
    Poor:      "text-red-400",
  };
  return (
    <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg text-xs">
      <p className="font-semibold mb-1">{d.label}</p>
      <p className={`font-bold text-sm ${colorMap[d.rating]}`}>{d.rating}</p>
      <p className="text-muted-foreground">Score: {d.quality}/100</p>
      {d.periodLabel && (
        <p className="text-cyan-400 mt-1">⚡ {d.periodLabel}</p>
      )}
    </div>
  );
};

export function FishingQualityChart({ data }: Props) {
  // Show every-2-hour labels to avoid crowding
  const tickFormatter = (h: number) => {
    if (h === 0)  return "12A";
    if (h === 6)  return "6A";
    if (h === 12) return "12P";
    if (h === 18) return "6P";
    return "";
  };

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          margin={{ top: 4, right: 8, left: -24, bottom: 0 }}
          barCategoryGap="8%"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis
            dataKey="hour"
            tickFormatter={tickFormatter}
            tick={{ fill: "#64748b", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fill: "#64748b", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
          {/* Good threshold line */}
          <ReferenceLine y={55} stroke="#22c55e" strokeDasharray="4 4" strokeOpacity={0.4} />
          <ReferenceLine y={75} stroke="#06b6d4" strokeDasharray="4 4" strokeOpacity={0.4} />
          <Bar dataKey="quality" radius={[3, 3, 0, 0]} maxBarSize={28}>
            {data.map((entry) => (
              <Cell key={entry.hour} fill={barColor(entry.quality)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-2 text-xs text-muted-foreground">
        {[
          { color: "bg-cyan-400",  label: "Excellent (75+)" },
          { color: "bg-green-400", label: "Good (55–74)"     },
          { color: "bg-amber-400", label: "Fair (35–54)"     },
          { color: "bg-red-400",   label: "Poor (<35)"       },
        ].map(({ color, label }) => (
          <span key={label} className="flex items-center gap-1.5">
            <span className={`inline-block w-3 h-3 rounded-sm ${color}`} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
