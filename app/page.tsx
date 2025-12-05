'use client';

import Link from 'next/link';
import ThemeToggle from './components/ThemeToggle';
import { generators } from './lib/generators';
import { Zap, BarChart3, Sparkles, Moon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export default function Home() {
  const genreList = Object.entries(generators);

  const genreColors: Record<string, { iconBg: string; titleColor: string; icon: LucideIcon }> = {
    cyberpunk: {
      iconBg: 'bg-cyan-500',
      titleColor: 'text-cyan-600 dark:text-cyan-400',
      icon: Zap
    },
    corporate: {
      iconBg: 'bg-blue-500',
      titleColor: 'text-blue-600 dark:text-blue-400',
      icon: BarChart3
    },
    fantasy: {
      iconBg: 'bg-purple-500',
      titleColor: 'text-purple-600 dark:text-purple-400',
      icon: Sparkles
    },
    noir: {
      iconBg: 'bg-slate-500',
      titleColor: 'text-slate-600 dark:text-slate-400',
      icon: Moon
    },
  };

  return (
    <div className="min-h-screen bg-background gradient-mesh">
      <main className="container mx-auto px-4 py-12 sm:py-16 max-w-6xl">
        <div className="mb-12 sm:mb-16 md:mb-20 relative">
          <div className="absolute top-0 right-0">
            <ThemeToggle />
          </div>
          <div className="pr-14 sm:pr-0">
            <div className="flex items-start gap-3 sm:gap-6">
              <div className="bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 md:w-18 md:h-18 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent pb-1 sm:pb-2 mb-1 sm:mb-2 leading-tight">
                  Genre Ipsum
                </h1>
                <p className="text-base sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-medium">
                  Creative Lorem Ipsum Generators
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {genreList.map(([slug, generator]) => {
            const colorData = genreColors[slug] || { iconBg: 'bg-gray-500', titleColor: 'text-gray-600 dark:text-gray-400', icon: Sparkles };
            const Icon = colorData.icon;
            return (
              <Link
                key={slug}
                href={`/${slug}`}
                className="group relative bg-white dark:bg-card border border-slate-300 dark:border-slate-700 rounded-2xl p-8 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`${colorData.iconBg} p-2 rounded-xl`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className={`hidden sm:block text-3xl font-bold ${colorData.titleColor}`}>
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
                <h2 className={`sm:hidden text-2xl font-bold mb-3 ${colorData.titleColor}`}>
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
