'use client';

import { useEffect, useState } from 'react';
import { useRive } from '@rive-app/react-canvas';

export default function SignatureRive() {
  const [failed, setFailed] = useState(false);
  const { RiveComponent, rive } = useRive({
    src: '/rive/stellar-orb.riv',
    autoplay: true,
    onLoadError: () => setFailed(true),
  });

  useEffect(() => {
    if (!rive) return;
    const handle = () => setFailed(false);
    rive.on('load', handle);
    return () => {
      rive.off('load', handle);
    };
  }, [rive]);

  return (
    <div className="holo-card rounded-2xl p-4 flex items-center gap-4">
      <div className="relative h-16 w-16 rounded-2xl overflow-hidden bg-black/40 border border-white/10">
        {!failed ? (
          <RiveComponent className="h-full w-full" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-accent-teal/60 via-accent-ocean/50 to-accent-sand/60" />
        )}
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-dark-400">Signature motion</p>
        <p className="text-sm text-white">Rive micro‑interaction</p>
        <p className="text-xs text-dark-300 mt-1">Drop a .riv at /public/rive/stellar-orb.riv</p>
      </div>
    </div>
  );
}
