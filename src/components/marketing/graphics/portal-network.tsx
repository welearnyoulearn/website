"use client";

import { motion } from "motion/react";

const nodes = [
  { label: "Admin", x: 260, y: 40, color: "var(--primary)" },
  { label: "Teacher", x: 460, y: 130, color: "var(--wlyl-teacher)" },
  { label: "Student", x: 400, y: 320, color: "var(--wlyl-student)" },
  { label: "Parent", x: 120, y: 320, color: "var(--wlyl-parent)" },
  { label: "Platform", x: 60, y: 130, color: "var(--brand-amber)" },
];

const center = { x: 260, y: 190 };

export function PortalNetwork() {
  return (
    <svg
      viewBox="0 0 520 380"
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="Five portals connected to one shared data core"
    >
      {nodes.map((n, i) => (
        <motion.line
          key={n.label}
          x1={center.x}
          y1={center.y}
          x2={n.x}
          y2={n.y}
          stroke={n.color}
          strokeWidth={1.5}
          strokeOpacity={0.35}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.35 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      {/* Center hub */}
      <motion.circle
        cx={center.x}
        cy={center.y}
        r={30}
        fill="var(--primary)"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: `${center.x}px ${center.y}px` }}
      />
      <motion.circle
        cx={center.x}
        cy={center.y}
        r={30}
        fill="none"
        stroke="var(--primary)"
        strokeWidth={1}
        strokeOpacity={0.4}
        initial={{ scale: 1, opacity: 0.4 }}
        whileInView={{ scale: 1.6, opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        style={{ transformOrigin: `${center.x}px ${center.y}px` }}
      />
      <text
        x={center.x}
        y={center.y + 4}
        textAnchor="middle"
        className="fill-primary-foreground text-[10px] font-semibold"
      >
        Data
      </text>

      {/* Portal nodes */}
      {nodes.map((n, i) => (
        <motion.g
          key={n.label}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        >
          <circle cx={n.x} cy={n.y} r={20} fill={n.color} fillOpacity={0.15} />
          <circle cx={n.x} cy={n.y} r={7} fill={n.color} />
          <text
            x={n.x}
            y={n.y + 34}
            textAnchor="middle"
            className="fill-muted-foreground text-[11px] font-medium"
          >
            {n.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
