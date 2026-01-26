export default function Footer() {
  return (
    <footer className="py-10 border-t-2 border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
        <p>© {new Date().getFullYear()} Kenrick Tan</p>
        <p>Built for resilient platforms</p>
      </div>
    </footer>
  );
}
