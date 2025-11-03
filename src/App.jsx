import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-white">
      <Navbar />

      <main>
        <Hero />

        <section id="about" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">About me</h2>
                <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                  I’m a creative developer focused on building immersive, performant, and accessible experiences. My toolkit spans React, FastAPI, Tailwind, and 3D with Spline. I love turning complex ideas into simple, delightful interfaces.
                </p>
                <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                  When I’m not coding, I explore generative art and contribute to open-source projects.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-amber-500/20 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>
    </div>
  );
}
