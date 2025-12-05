import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Genre Ipsum - Creative Lorem Ipsum Generators for Every Style",
    template: "%s | Genre Ipsum"
  },
  description: "Generate themed placeholder text. Choose from Cyberpunk, Fantasy, Film Noir, and Corporate Speak lorem ipsum generators.",
  keywords: [
    "lorem ipsum generator",
    "placeholder text",
    "creative lorem ipsum",
    "themed text generator",
    "cyberpunk lorem ipsum",
    "fantasy placeholder",
    "noir text",
    "corporate jargon",
    "mockup text",
    "design placeholder",
    "dummy text generator",
    "filler text"
  ],
  authors: [{ name: "Genre Ipsum" }],
  creator: "Genre Ipsum",
  publisher: "Genre Ipsum",
  metadataBase: new URL('https://genreipsum.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Genre Ipsum',
    title: 'Genre Ipsum - Creative Lorem Ipsum Generators',
    description: 'Generate themed placeholder text: Cyberpunk, Fantasy, Film Noir, and Corporate Speak lorem ipsum for designers and developers.',
    images: [
      {
        url: '/social.svg',
        width: 1200,
        height: 630,
        alt: 'Genre Ipsum - Creative Lorem Ipsum Generators',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genre Ipsum - Creative Lorem Ipsum Generators',
    description: 'Generate themed placeholder text: Cyberpunk, Fantasy, Film Noir, and Corporate Speak lorem ipsum generators.',
    images: ['/social.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="antialiased font-sans"
        style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
