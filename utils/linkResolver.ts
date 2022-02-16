export const linkResolver = (slug: string): string => {
  if (slug.includes('---')) {
    return `/${slug.replace('---', '/')}`
  }
  return `/${slug}`
}
