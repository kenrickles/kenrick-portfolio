'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { DiagramEdge, DiagramNode } from '@/lib/caseStudies';

const getNodeById = (nodes: DiagramNode[], id: string) =>
  nodes.find((node) => node.id === id);

export default function ArchitectureDiagram({
  title,
  nodes,
  edges,
}: {
  title: string;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
}) {
  const [activeId, setActiveId] = useState(nodes[0]?.id ?? '');
  const activeNode = nodes.find((node) => node.id === activeId) ?? nodes[0];

  return (
    <div className="glass-card p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Architecture</p>
          <h3 className="text-xl sm:text-2xl font-semibold mt-2">{title}</h3>
        </div>
        <div className="text-xs sm:text-sm text-[color:var(--muted)]">Tap a node to explore</div>
      </div>

      <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4 sm:gap-6 items-stretch">
        <div className="relative min-h-[280px] sm:min-h-[320px] border-2 border-[color:var(--border)] bg-[color:var(--surface-2)] overflow-hidden">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {edges.map((edge) => {
              const from = getNodeById(nodes, edge.from);
              const to = getNodeById(nodes, edge.to);
              if (!from || !to) return null;
              const isActive = activeId === edge.from || activeId === edge.to;
              return (
                <line
                  key={`${edge.from}-${edge.to}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={isActive ? 'var(--accent)' : 'var(--border)'}
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                />
              );
            })}
          </svg>

          {nodes.map((node) => {
            const isActive = node.id === activeId;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveId(node.id)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 text-left border-2 px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] whitespace-nowrap ${
                  isActive
                    ? 'bg-[color:var(--accent)] text-black border-[color:var(--accent)]'
                    : 'bg-[color:var(--surface)] border-[color:var(--border)]'
                }`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                aria-label={node.label}
              >
                {node.label}
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeNode?.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-card p-5 sm:p-6"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Focused node</p>
          <h4 className="text-xl sm:text-2xl font-semibold mt-2 sm:mt-3">{activeNode?.label}</h4>
          <p className="text-sm sm:text-base text-[color:var(--muted)] mt-3 sm:mt-4">{activeNode?.detail}</p>
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
            {nodes.map((node) => (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveId(node.id)}
                className={`px-2 sm:px-3 py-1.5 sm:py-2 border-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] transition whitespace-nowrap ${
                  node.id === activeId
                    ? 'bg-[color:var(--accent)] text-black border-[color:var(--accent)]'
                    : 'border-[color:var(--border)]'
                }`}
              >
                {node.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
