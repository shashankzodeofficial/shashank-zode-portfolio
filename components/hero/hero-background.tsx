"use client";

import { motion } from "framer-motion";

/**
 * Subtle network/flow-graph motif — nodes and connecting lines evoke
 * logistics networks + digital/AI systems without being literal or noisy.
 */
const nodes = [
  { x: 82, y: 18, r: 3 },
  { x: 92, y: 42, r: 2 },
  { x: 74, y: 58, r: 4 },
  { x: 88, y: 76, r: 2.5 },
  { x: 62, y: 30, r: 2 },
  { x: 68, y: 82, r: 3 },
  { x: 96, y: 12, r: 2 },
  { x: 55, y: 12, r: 2.5 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [4, 0],
  [4, 2],
  [5, 2],
  [0, 6],
  [4, 7],
];

export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black,black,transparent)]"
    >
      {/* Ambient gradient glow */}
      <div className="bg-brand/12 absolute -top-1/4 right-[-10%] size-[42rem] rounded-full blur-3xl" />
      <div className="bg-gold/8 absolute bottom-[-20%] left-[-10%] size-[34rem] rounded-full blur-3xl" />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMaxYMid slice"
        className="absolute inset-0 size-full opacity-[0.55] dark:opacity-[0.4]"
      >
        {edges.map(([a, b], i) => {
          const from = nodes[a];
          const to = nodes[b];
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="var(--brand)"
              strokeWidth={0.15}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{
                duration: 1.6,
                delay: 0.3 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          );
        })}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={node.r * 0.35}
            fill="var(--brand)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.8, 0.55], scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2 + i * 0.07,
              ease: "easeOut",
            }}
          >
            <animate
              attributeName="opacity"
              values="0.55;0.9;0.55"
              dur={`${3 + (i % 3)}s`}
              repeatCount="indefinite"
              begin={`${i * 0.4}s`}
            />
          </motion.circle>
        ))}
      </svg>
    </div>
  );
}
