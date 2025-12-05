'use client';

import { useState } from 'react';
import Link from 'next/link';
import tracery from 'tracery-grammar';
import ThemeToggle from './ThemeToggle';
import type { GeneratorConfig } from '../lib/generators';
import { Zap, BarChart3, Sparkles, Moon } from 'lucide-react';

interface GeneratorProps {
  grammar: Record<string, string[]>;
  config: GeneratorConfig;
  iconName?: string;
}

// Map accent colors to modern SaaS gradients
const getColorClasses = (accentColor: string) => {
  const colorMap: Record<string, {
    gradient: string;
    button: string;
    buttonHover: string;
    ring: string;
  }> = {
    cyan: {
      gradient: 'from-cyan-500 to-blue-500',
      button: 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600',
      buttonHover: 'hover:shadow-cyan-500/50',
      ring: 'ring-cyan-500',
    },
    blue: {
      gradient: 'from-blue-500 to-indigo-600',
      button: 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700',
      buttonHover: 'hover:shadow-blue-500/50',
      ring: 'ring-blue-500',
    },
    purple: {
      gradient: 'from-purple-500 to-pink-500',
      button: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      buttonHover: 'hover:shadow-purple-500/50',
      ring: 'ring-purple-500',
    },
    gray: {
      gradient: 'from-slate-500 to-zinc-600 dark:from-slate-400 dark:to-zinc-400',
      button: 'bg-gradient-to-r from-slate-500 to-zinc-600 hover:from-slate-600 hover:to-zinc-700',
      buttonHover: 'hover:shadow-slate-500/50',
      ring: 'ring-slate-500',
    },
  };

  return colorMap[accentColor] || colorMap.cyan;
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  zap: Zap,
  'bar-chart': BarChart3,
  sparkles: Sparkles,
  moon: Moon,
};

export default function Generator({ grammar, config, iconName }: GeneratorProps) {
  const [mode, setMode] = useState<'paragraphs' | 'words' | 'characters'>('paragraphs');
  const [paragraphs, setParagraphs] = useState(3);
  const [sentencesPerParagraph, setSentencesPerParagraph] = useState(5);
  const [wordCount, setWordCount] = useState(50);
  const [charCount, setCharCount] = useState(200);
  const [generatedText, setGeneratedText] = useState('');

  const colors = getColorClasses(config.accentColor);

  const generateText = () => {
    const traceryGrammar = tracery.createGrammar(grammar);
    traceryGrammar.addModifiers(tracery.baseEngModifiers);

    if (mode === 'words') {
      // Generate words by adding complete sentences until we reach the word count
      const sentences: string[] = [];
      let totalWords = 0;

      while (totalWords < wordCount) {
        const sentence = traceryGrammar.flatten('#origin#');
        const sentenceWords = sentence.split(/\s+/).filter(w => w.length > 0);

        // If adding this sentence would exceed the limit significantly, check if we should add it
        if (totalWords + sentenceWords.length > wordCount) {
          // Only add if we're not already reasonably close to the target
          if (totalWords < wordCount * 0.8) {
            sentences.push(sentence);
            totalWords += sentenceWords.length;
          }
          break;
        }

        sentences.push(sentence);
        totalWords += sentenceWords.length;
      }

      setGeneratedText(sentences.join('. ') + '.');
    } else if (mode === 'characters') {
      // Generate characters by adding complete sentences until we reach the character count
      const sentences: string[] = [];
      let totalChars = 0;

      while (totalChars < charCount) {
        const sentence = traceryGrammar.flatten('#origin#');
        const sentenceLength = sentence.length + 2; // +2 for '. '

        // If adding this sentence would exceed the limit significantly, check if we should add it
        if (totalChars + sentenceLength > charCount) {
          // Only add if we're not already reasonably close to the target
          if (totalChars < charCount * 0.8) {
            sentences.push(sentence);
            totalChars += sentenceLength;
          }
          break;
        }

        sentences.push(sentence);
        totalChars += sentenceLength;
      }

      setGeneratedText(sentences.join('. ') + '.');
    } else {
      // Generate paragraphs/sentences
      const result: string[] = [];
      for (let i = 0; i < paragraphs; i++) {
        const sentences: string[] = [];
        for (let j = 0; j < sentencesPerParagraph; j++) {
          sentences.push(traceryGrammar.flatten('#origin#') + '.');
        }
        result.push(sentences.join(' '));
      }
      setGeneratedText(result.join('\n\n'));
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedText);
  };

  const copyAsMarkdown = () => {
    let markdown = '';
    if (mode === 'paragraphs') {
      // Split by double newlines (paragraphs) and format each as markdown paragraph
      const paragraphArray = generatedText.split('\n\n');
      markdown = paragraphArray.join('\n\n');
    } else {
      markdown = generatedText;
    }
    navigator.clipboard.writeText(markdown);
  };

  const copyAsHTML = () => {
    let html = '';
    if (mode === 'paragraphs') {
      // Split by double newlines (paragraphs) and wrap each in <p> tags
      const paragraphArray = generatedText.split('\n\n');
      html = paragraphArray.map(p => `<p>${p}</p>`).join('\n');
    } else {
      html = `<p>${generatedText}</p>`;
    }
    navigator.clipboard.writeText(html);
  };

  return (
    <div className="min-h-screen bg-background gradient-mesh">
      <main className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to generators</span>
            </Link>
            <ThemeToggle />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-4">
              {iconName && iconMap[iconName] && (
                <div className={`bg-linear-to-br ${colors.gradient} p-3 rounded-xl`}>
                  {(() => {
                    const Icon = iconMap[iconName];
                    return <Icon className="w-8 h-8 text-white" />;
                  })()}
                </div>
              )}
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                {config.name}
              </h1>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
              {config.description}
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-card border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm">
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-100">
              Generation Mode
            </label>
            <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800/50 rounded-xl">
              <button
                onClick={() => setMode('paragraphs')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                  mode === 'paragraphs'
                    ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Paragraphs
              </button>
              <button
                onClick={() => setMode('words')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                  mode === 'words'
                    ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Words
              </button>
              <button
                onClick={() => setMode('characters')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                  mode === 'characters'
                    ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Characters
              </button>
            </div>
          </div>

          {mode === 'paragraphs' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-100">
                  Paragraphs: {paragraphs}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={paragraphs}
                  onChange={(e) => setParagraphs(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer"
                  style={{
                    accentColor: config.accentColor === 'cyan' ? '#22d3ee' :
                                 config.accentColor === 'blue' ? '#60a5fa' :
                                 config.accentColor === 'purple' ? '#c084fc' : '#94a3b8'
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-100">
                  Sentences per paragraph: {sentencesPerParagraph}
                </label>
                <input
                  type="range"
                  min="2"
                  max="10"
                  value={sentencesPerParagraph}
                  onChange={(e) => setSentencesPerParagraph(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer"
                  style={{
                    accentColor: config.accentColor === 'cyan' ? '#22d3ee' :
                                 config.accentColor === 'blue' ? '#60a5fa' :
                                 config.accentColor === 'purple' ? '#c084fc' : '#94a3b8'
                  }}
                />
              </div>
            </div>
          ) : mode === 'words' ? (
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-100">
                Word count: {wordCount}
              </label>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={wordCount}
                onChange={(e) => setWordCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer"
                style={{
                  accentColor: config.accentColor === 'cyan' ? '#22d3ee' :
                               config.accentColor === 'blue' ? '#60a5fa' :
                               config.accentColor === 'purple' ? '#c084fc' : '#94a3b8'
                }}
              />
            </div>
          ) : (
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-100">
                Character count: {charCount}
              </label>
              <input
                type="range"
                min="50"
                max="2000"
                step="50"
                value={charCount}
                onChange={(e) => setCharCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer"
                style={{
                  accentColor: config.accentColor === 'cyan' ? '#22d3ee' :
                               config.accentColor === 'blue' ? '#60a5fa' :
                               config.accentColor === 'purple' ? '#c084fc' : '#94a3b8'
                }}
              />
            </div>
          )}

          <button
            onClick={generateText}
            className={`w-full ${colors.button} text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg ${colors.buttonHover} transition-all duration-200`}
          >
            Generate Text
          </button>
        </div>

        {generatedText && (
          <div className="bg-white dark:bg-card border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
              <h2 className={`text-2xl font-bold bg-linear-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                Generated Text
              </h2>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={copyToClipboard}
                  className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-100 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors"
                >
                  Copy Text
                </button>
                <button
                  onClick={copyAsMarkdown}
                  className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-100 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors"
                >
                  Copy Markdown
                </button>
                <button
                  onClick={copyAsHTML}
                  className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-100 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors"
                >
                  Copy HTML
                </button>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-slate-800 dark:text-slate-100 leading-relaxed whitespace-pre-wrap">
              {generatedText}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
