import { ExternalLink, Github, Sparkles } from 'lucide-react';

const items = [
  {
    title: 'Interactive 3D Landing',
    description:
      'A playful product hero built with React, WebGL, and Spline. Smooth motion, responsive layout, and rich interactions.',
    tags: ['React', 'Spline', 'WebGL', 'Framer Motion'],
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Realtime Dashboard',
    description:
      'Analytics dashboard featuring live charts, dark mode, and role-based access. Built for speed and clarity.',
    tags: ['FastAPI', 'React', 'Tailwind', 'Charts'],
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'AI Content Studio',
    description:
      'Creative suite that helps teams prototype content with AI assisted workflows and asset management.',
    tags: ['AI', 'TypeScript', 'UX'],
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_20rem_at_50%_-10%,rgba(99,102,241,0.15),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-indigo-600" />
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Selected Projects
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-black/5 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:shadow-md dark:border-white/10 dark:bg-neutral-900/80"
            >
              <div className="mb-4 h-40 w-full overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-amber-500/20 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                {p.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-black/10 bg-white px-2 py-0.5 text-xs text-neutral-700 dark:border-white/10 dark:bg-neutral-800 dark:text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline"
                >
                  <ExternalLink className="h-4 w-4" /> Live demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-neutral-700 hover:underline dark:text-neutral-300"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
