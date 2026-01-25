export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-dark-400">
        <p>© {new Date().getFullYear()} Kenrick Tan. All rights reserved.</p>
        <p className="text-dark-500">Built with Next.js, Tailwind, and a DevSecOps mindset.</p>
      </div>
    </footer>
  );
}
