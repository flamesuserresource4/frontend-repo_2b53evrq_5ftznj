import { useState } from 'react';
import { Menu, X, Rocket, User, Code2, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about', label: 'About', icon: User },
    { href: '#projects', label: 'Projects', icon: Code2 },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
            <Rocket className="h-5 w-5 text-indigo-600" />
            <span>My Portfolio</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Hire me
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {links.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Icon className="h-4 w-4 text-indigo-600" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
