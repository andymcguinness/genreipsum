import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from '@/app/components/ThemeToggle';

export const metadata: Metadata = {
  title: 'About - Genre Ipsum',
  description: 'Learn more about Genre Ipsum, the creative text generator for developers, writers, and designers.',
  keywords: ['about', 'lorem ipsum', 'text generator', 'placeholder text'],
  openGraph: {
    title: 'About - Genre Ipsum',
    description: 'Learn more about Genre Ipsum, the creative text generator for developers, writers, and designers.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - Genre Ipsum',
    description: 'Learn more about Genre Ipsum, the creative text generator for developers, writers, and designers.',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background gradient-mesh transition-colors">
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        {/* Header with navigation */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <ThemeToggle />
        </div>

        {/* Page Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Genre Ipsum
            </span>
          </h1>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 sm:space-y-12">
          {/* Section 1 */}
          <section className="bg-white dark:bg-card border border-slate-300 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              What is Genre Ipsum?
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Genre Ipsum is not your average lorem ipsum placeholder text generator. It generates lorem&ndash;ipsum&ndash;style text in the theme of various genres, in the vein of Mad Libs. The result is text that captivates, and fits the theme of certain projects better than generic lorem ipsum text ever could.
              </p>
              <p>
                Built on Next.js 16+, with React 19+ under the hood and Tracery for grammar. Uses TailwindCSS 4+ as its utility&ndash;class&ndash;based styling, and uses Lucide React icons for an extra visual pop.
              </p>
              <p>
                The project is completely open&ndash;source. More can be found at its <Link href="https://github.com/andymcguinness/genreipsum" hrefLang='en' className="fun-link">git repo</Link>.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white dark:bg-card border border-slate-300 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              About the Creator
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Hey, I&apos;m <Link href="https://andymcguinness.com" hrefLang='en' className='fun-link'>Andy</Link>!
              </p>
              <p>
                I make lots of little internet&ndash;powered toys. I also run a one&ndash;man&ndash;band at <Link href="https://codebyandy.com" hrefLang='en' className='fun-link'>Code by Andy, LLC</Link>, where I work with values&ndash;based businesses to thoughtfully enhance their online presence.
              </p>
              <p>
                Outside of that, I&apos;m an avid Dungeons &amp; Dragons player, have a love&ndash;hate relationship with World of Warcraft, and do touch grass sometimes, I promise.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-8 sm:py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Generate Some Text?
            </h2>
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-200 hover:scale-105"
            >
              Explore Generators
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
