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

  return {
    title: `${generator.config.name} Lorem Ipsum`,
    description: generator.config.description,
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
