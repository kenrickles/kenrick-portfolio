import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import { caseStudies, getCaseStudy } from '@/lib/caseStudies';

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) return notFound();

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link href="/" className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
          ← Back to home
        </Link>

        <div className="mt-8 space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Case study</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase">{study.title}</h1>
          <p className="text-lg text-[color:var(--muted)]">{study.subtitle}</p>
        </div>

        <div className="mt-10 glass-card p-8 space-y-6">
          <p className="text-[color:var(--muted)] text-lg">{study.summary}</p>
          <div className="grid md:grid-cols-3 gap-4">
            {study.impact.map((item) => (
              <div key={item} className="border-2 border-[color:var(--border)] p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">Impact</p>
                <p className="mt-2 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold">Problem</h2>
            <p className="text-[color:var(--muted)] mt-4">{study.problem}</p>
          </div>

          <ArchitectureDiagram
            title={study.diagram.title}
            nodes={study.diagram.nodes}
            edges={study.diagram.edges}
          />

          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold">Approach</h2>
            <ul className="mt-4 space-y-3 text-[color:var(--muted)]">
              {study.approach.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5" style={{ backgroundColor: 'var(--accent)' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold">Outcomes</h2>
            <ul className="mt-4 space-y-3 text-[color:var(--muted)]">
              {study.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5" style={{ backgroundColor: 'var(--accent)' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold">Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.stack.map((tech) => (
                <span key={tech} className="px-3 py-1 border-2 border-[color:var(--border)] text-xs uppercase tracking-[0.3em]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
