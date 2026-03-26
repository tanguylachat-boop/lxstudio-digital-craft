/** Resolve image import to URL string (handles both Vite string and Astro SSR object) */
export const imgSrc = (img: string | { src: string }): string =>
  typeof img === 'string' ? img : img.src;
