'use client';

import Link from 'next/link';
import ThemeToggle from './components/ThemeToggle';
import { generators } from './lib/generators';
import { Zap, BarChart3, Sparkles, Moon, Pencil } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export default function Home() {
  const genreList = Object.entries(generators);

  const genreColors: Record<string, { gradient: string; icon: LucideIcon }> = {
    cyberpunk: {
      gradient: 'from-cyan-500 to-blue-500',
      icon: Zap
    },
    corporate: {
      gradient: 'from-blue-500 to-indigo-600',
      icon: BarChart3
    },
    fantasy: {
      gradient: 'from-purple-500 to-pink-500',
      icon: Sparkles
    },
    noir: {
      gradient: 'from-slate-500 to-zinc-600 dark:from-slate-400 dark:to-zinc-400',
      icon: Moon
    },
  };

  return (
    <div className="min-h-screen bg-background gradient-mesh">
      <main className="container mx-auto px-4 py-12 sm:py-16 max-w-6xl">
        <div className="mb-16 sm:mb-20 flex flex-col sm:flex-row justify-between items-start gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-xl">
                <Pencil className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Genre Ipsum
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium">
              Generate creative placeholder text for your projects
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {genreList.map(([slug, generator]) => {
            const colorData = genreColors[slug] || { gradient: 'from-gray-500 to-gray-600', icon: Sparkles };
            const Icon = colorData.icon;
            return (
              <Link
                key={slug}
                href={`/${slug}`}
                className="group relative bg-white dark:bg-card border border-slate-300 dark:border-slate-700 rounded-2xl p-8 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`bg-linear-to-br ${colorData.gradient} p-2 rounded-xl`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className={`hidden sm:block text-3xl font-bold bg-linear-to-r ${colorData.gradient} bg-clip-text text-transparent`}>
                      {generator.config.name}
                    </h2>
                  </div>
                  <svg
                    className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h2 className={`sm:hidden text-2xl font-bold mb-3 bg-linear-to-r ${colorData.gradient} bg-clip-text text-transparent`}>
                  {generator.config.name}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  {generator.config.description}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            More generators coming soon...
          </p>
        </div>
      </main>
    </div>
  );
}
