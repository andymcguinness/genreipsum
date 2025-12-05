# Genre Ipsum

A modern web application that generates themed placeholder text for designers and developers. Move beyond traditional lorem ipsum with creative, genre-specific text generators powered by Tracery grammar.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)

## Overview

Genre Ipsum offers creative lorem ipsum generators for multiple genres, perfect for mockups, prototypes, and design work. Each generator uses procedural text generation via Tracery grammar to create unique, contextually appropriate placeholder text.

**Live Demo:** [genreipsum.com](https://genreipsum.com)

## Features

### Multiple Generation Modes
- **Paragraphs Mode**: Generate 1-10 paragraphs with 2-10 sentences each
- **Words Mode**: Generate specific word counts (10-500 words)
- **Characters Mode**: Generate precise character counts (50-2000 characters)

### Genre-Specific Generators

#### Cyberpunk
High-tech, low-life placeholder text featuring netrunners, neon-soaked sprawls, and dystopian technology. Perfect for sci-fi projects, tech startups, or futuristic designs.

#### Corporate Speak
Business jargon and corporate buzzwords that synergize your vertical markets while leveraging cloud-based solutions. Ideal for business sites, SaaS products, and enterprise mockups.

#### Fantasy
Epic tales of wizards, dragons, and ancient magic. Great for gaming sites, RPG content, or fantasy-themed projects.

#### Film Noir
Gritty detective narratives with rain-slicked streets, dangerous dames, and hard-boiled prose. Perfect for mystery themes or vintage-inspired designs.

### Export Options
- **Plain Text**: Copy generated text directly
- **Markdown**: Copy with paragraph formatting for markdown editors
- **HTML**: Copy with `<p>` tags ready for HTML use

### Additional Features
- **Dark Mode**: Full dark mode support with automatic system preference detection
- **Responsive Design**: Mobile-first design that works on all screen sizes
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Card support
- **Analytics**: Vercel Analytics integration for usage tracking
- **Type-Safe**: Full TypeScript support throughout the codebase

## Tech Stack

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Icon library

### Text Generation
- **[Tracery Grammar](https://github.com/galaxykate/tracery)** - Procedural text generation library

### Analytics & Deployment
- **[Vercel Analytics](https://vercel.com/analytics)** - Usage analytics
- **[Vercel Platform](https://vercel.com/)** - Deployment platform

## Getting Started

### Prerequisites
- Node.js 20+ or Bun
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/andymcguinness/genreipsum.git
cd loremipsum
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
genreipsum/
├── app/
│   ├── [genre]/              # Dynamic route for genre pages
│   │   └── page.tsx          # Genre generator page
│   ├── components/           # React components
│   │   ├── Generator.tsx     # Main text generator component
│   │   └── ThemeToggle.tsx   # Dark mode toggle
│   ├── context/              # React context providers
│   │   └── ThemeContext.tsx  # Theme management
│   ├── lib/
│   │   └── generators/       # Text generation logic
│   │       ├── index.ts      # Generator exports and types
│   │       ├── cyberpunk.ts  # Cyberpunk grammar
│   │       ├── corporate.ts  # Corporate grammar
│   │       ├── fantasy.ts    # Fantasy grammar
│   │       └── noir.ts       # Noir grammar
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Homepage
│   ├── icon.tsx              # Dynamic favicon
│   ├── robots.ts             # Robots.txt configuration
│   └── sitemap.ts            # Sitemap configuration
├── public/                   # Static assets
│   ├── favicon.svg           # Site favicon
│   └── social.svg            # Social media preview image
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.mjs       # Tailwind configuration
└── next.config.ts            # Next.js configuration
```

## Adding New Generators

To add a new genre generator:

1. Create a new grammar file in [app/lib/generators/](app/lib/generators/):

```typescript
import type { GeneratorConfig } from './index';

export const yourGenreGrammar = {
  origin: ['#sentence.capitalize#'],
  sentence: [
    '#subject# #verb# #object#',
    // Add more sentence patterns
  ],
  subject: ['the hero', 'the villain', '...'],
  verb: ['runs', 'fights', '...'],
  object: ['toward destiny', 'against evil', '...'],
  // Add more grammar rules
};

export const yourGenreConfig: GeneratorConfig = {
  name: 'Your Genre',
  description: 'Description of your genre generator',
  gradientFrom: 'indigo-500',
  gradientTo: 'purple-500',
  accentColor: 'purple',
  borderColor: 'border-purple-200',
  secondaryBorderColor: 'dark:border-purple-800',
  seo: {
    title: 'Your Genre Lorem Ipsum Generator',
    description: 'SEO description for your generator',
    keywords: ['keyword1', 'keyword2'],
  },
};
```

2. Export the new generator in [app/lib/generators/index.ts](app/lib/generators/index.ts):

```typescript
import { yourGenreGrammar, yourGenreConfig } from './yourgenre';

export const generators: Record<string, Generator> = {
  // ... existing generators
  yourgenre: {
    grammar: yourGenreGrammar,
    config: yourGenreConfig,
  },
};
```

3. Add icon mapping in [app/page.tsx](app/page.tsx) and [app/[genre]/page.tsx](app/[genre]/page.tsx):

```typescript
const genreColors: Record<string, { iconBg: string; titleColor: string; icon: LucideIcon }> = {
  // ... existing colors
  yourgenre: {
    iconBg: 'bg-purple-500',
    titleColor: 'text-purple-600 dark:text-purple-400',
    icon: YourIcon // Import from lucide-react
  },
};
```

## Tracery Grammar Guide

Tracery is a powerful text generation library that uses simple rules to create complex text. Each generator uses a grammar object with rules:

### Basic Structure
```typescript
{
  origin: ['#rule#'],        // Starting point
  rule: ['output text'],     // Simple rule
}
```

### Advanced Patterns
```typescript
{
  origin: ['#sentence.capitalize#'],  // Apply modifier
  sentence: [
    '#noun# #verb# #adjective#',      // Combine multiple rules
    'static text',                     // Or use literal strings
  ],
  noun: ['cat', 'dog', 'bird'],       // Multiple options
  verb: ['runs', 'jumps', 'flies'],
  adjective: ['quickly', 'silently', 'gracefully'],
}
```

### Modifiers
- `.capitalize` - Capitalize first letter
- `.capitalizeAll` - Capitalize all words
- `.a` - Add "a" or "an" article
- `.s` - Pluralize

### Tips
- Use descriptive rule names
- Create depth by nesting rules
- Add variety with multiple options per rule
- Test grammar thoroughly before deployment

## Customization

### Styling
The project uses Tailwind CSS 4 with a custom design system. Modify [app/globals.css](app/globals.css) for global styles or [tailwind.config.mjs](tailwind.config.mjs) for theme customization.

### Theming
Dark mode is managed through [app/context/ThemeContext.tsx](app/context/ThemeContext.tsx). The theme persists in localStorage and respects system preferences.

### SEO & Metadata
Update metadata in:
- [app/layout.tsx](app/layout.tsx) - Site-wide metadata
- [app/[genre]/page.tsx](app/[genre]/page.tsx) - Genre-specific metadata
- [app/robots.ts](app/robots.ts) - Robots.txt rules
- [app/sitemap.ts](app/sitemap.ts) - Sitemap configuration

## Development Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Deployment

### Vercel (Recommended)
The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will detect Next.js and configure automatically
4. Deploy!

### Other Platforms
This is a standard Next.js application and can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway
- Render

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Performance

- **Static Generation**: Genre pages are statically generated at build time
- **Optimized Fonts**: Uses system fonts for instant loading
- **Code Splitting**: Automatic code splitting via Next.js
- **Image Optimization**: SVG icons for crisp display at any size
- **Edge Ready**: Can be deployed to edge networks for global performance

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! Here are some ways to contribute:

1. **Add New Genres**: Create new grammar files with unique themes
2. **Improve Grammars**: Expand existing grammars with more variety
3. **Fix Bugs**: Report and fix any issues you find
4. **Documentation**: Improve or translate documentation
5. **Design**: Enhance UI/UX or create new themes

### Contributing Process
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-genre`)
3. Commit your changes (`git commit -m 'Add amazing new genre'`)
4. Push to the branch (`git push origin feature/amazing-genre`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- **[Tracery](https://github.com/galaxykate/tracery)** by Kate Compton - Text generation engine
- **[Next.js](https://nextjs.org/)** - React framework
- **[Vercel](https://vercel.com/)** - Hosting platform
- **[Lucide](https://lucide.dev/)** - Beautiful icon set

## Contact & Support

- **Website**: [genreipsum.com](https://genreipsum.com)
- **Issues**: [GitHub Issues](https://github.com/yourusername/loremipsum/issues)

---

**Made with ⚡ by Andy McGuinness**

*Bringing creativity to placeholder text, one genre at a time.*
