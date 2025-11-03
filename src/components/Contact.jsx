import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Let’s build something great
          </h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            I’m open to freelance work, collaborations, and full‑time roles. Reach out and I’ll get back within 24 hours.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <Mail className="h-4 w-4" /> Email me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 dark:border-white/10 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 dark:border-white/10 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>

          <p className="mt-8 text-xs text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
