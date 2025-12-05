import { notFound } from 'next/navigation';
import { getGenerator, getAllGenres } from '../lib/generators';
import Generator from '../components/Generator';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ genre: string }>;
}

const genreIcons: Record<string, string> = {
  cyberpunk: 'zap',
  corporate: 'bar-chart',
  fantasy: 'sparkles',
  noir: 'moon',
};

export async function generateStaticParams() {
  const genres = getAllGenres();
  return genres.map((genre) => ({
    genre,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { genre } = await params;
  const generator = getGenerator(genre);

  if (!generator) {
    return {
      title: 'Not Found',
    };
  }

  const seo = generator.config.seo;
  const defaultTitle = `${generator.config.name} Lorem Ipsum Generator`;
  const defaultDescription = generator.config.description;

  return {
    title: seo?.title || defaultTitle,
    description: seo?.description || defaultDescription,
    keywords: seo?.keywords || [],
    alternates: {
      canonical: `/${genre}`,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `/${genre}`,
      siteName: 'Genre Ipsum',
      title: seo?.ogTitle || seo?.title || defaultTitle,
      description: seo?.ogDescription || seo?.description || defaultDescription,
      images: [
        {
          url: '/social.svg',
          width: 1200,
          height: 630,
          alt: `${generator.config.name} Lorem Ipsum Generator`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.ogTitle || seo?.title || defaultTitle,
      description: seo?.ogDescription || seo?.description || defaultDescription,
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
}

export default async function GenrePage({ params }: PageProps) {
  const { genre } = await params;
  const generator = getGenerator(genre);

  if (!generator) {
    notFound();
  }

  const iconName = genreIcons[genre];

  return <Generator grammar={generator.grammar} config={generator.config} iconName={iconName} />;
}
