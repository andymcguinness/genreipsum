import { MetadataRoute } from 'next';
import { getAllGenres } from './lib/generators';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://genreipsum.com';
  const genres = getAllGenres();

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];

  // Genre pages
  genres.forEach((genre) => {
    routes.push({
      url: `${baseUrl}/${genre}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  return routes;
}
