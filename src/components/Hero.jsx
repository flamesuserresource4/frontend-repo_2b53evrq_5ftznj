import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[90vh] min-h-[640px] w-full">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-neutral-950 dark:via-neutral-950/50" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-neutral-900/70 dark:text-neutral-200">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
          Available for new projects
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
          Hi, I’m <span className="text-indigo-600">Your Name</span> —
          building playful, interactive web experiences.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-700 dark:text-neutral-300">
          I blend modern frontend, creative coding, and 3D to craft delightful
          products. Explore my latest work and let’s build something amazing.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            View projects <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:border-white/10 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
          >
            Get in touch
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 dark:border-white/10 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 dark:border-white/10 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 dark:border-white/10 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
