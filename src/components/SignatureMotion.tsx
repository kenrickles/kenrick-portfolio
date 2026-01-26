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
        <p className="text-xs uppercase tracking-[0.3em] text-dark-400">Signature motion</p>
        <p className="text-sm text-white">Minimal orbit · CSS‑only</p>
        <p className="text-xs text-dark-300 mt-1">Lightweight, no external assets</p>
      </div>
    </div>
  );
}
