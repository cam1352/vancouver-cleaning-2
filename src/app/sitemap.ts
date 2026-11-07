import { MetadataRoute } from 'next';
import locations from '@/data/locations.json';
import services from '@/data/services.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vancouvercleaningservices.ca';

  const pages = [
    '',
    '/book',
    '/quote',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const locationPages = locations.map((loc: any) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const servicePages = services.map((service: any) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...pages, ...locationPages, ...servicePages];
}
