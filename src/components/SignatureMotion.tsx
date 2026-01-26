'use client';

export default function SignatureMotion() {
  return (
    <div className="holo-card rounded-2xl p-4 flex items-center gap-4">
      <div className="signature-orb">
        <div className="signature-ring" />
        <div className="signature-ring signature-ring--slow" />
        <div className="signature-core" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Signature motion</p>
        <p className="text-sm">Minimal orbit · CSS‑only</p>
        <p className="text-xs text-[color:var(--muted)] mt-1">Slow glow, crafted for focus</p>
      </div>
    </div>
  );
}
