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
    <div className="glass-card rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-dark-400">Architecture</p>
          <h3 className="text-2xl font-semibold text-white mt-2">{title}</h3>
        </div>
        <div className="text-sm text-dark-300">Tap a node to explore</div>
      </div>

      <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
        <div className="relative min-h-[320px] rounded-2xl bg-[rgba(10,14,26,0.6)] border border-white/10 overflow-hidden">
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
                  stroke={isActive ? 'rgba(94, 234, 212, 0.8)' : 'rgba(148, 163, 184, 0.25)'}
                  strokeWidth="0.4"
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
                className={`constellation-node ${isActive ? 'is-active' : ''}`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                aria-label={node.label}
              >
                <span className="constellation-pulse" />
                <span className="constellation-core" />
                <span className="constellation-label">
                  <span className="text-xs uppercase tracking-[0.3em] text-dark-400">{node.label}</span>
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeNode?.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="holo-card rounded-2xl p-6"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-dark-400">Focused node</p>
          <h4 className="text-2xl font-semibold text-white mt-3">{activeNode?.label}</h4>
          <p className="text-dark-300 mt-4">{activeNode?.detail}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {nodes.map((node) => (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveId(node.id)}
                className={`px-3 py-1 rounded-full text-xs transition ${
                  node.id === activeId
                    ? 'bg-white text-dark-950'
                    : 'glass text-white hover:opacity-80'
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
