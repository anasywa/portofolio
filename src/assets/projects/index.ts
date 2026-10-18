import placeholder from '../coming_soon.png';

const images = import.meta.glob<string>('./*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

// Missing images use a placeholder until the original file is added here.
export function getProjectImage(filename: string): string {
  return images[`./${filename}`] ?? placeholder;
}
