export function unslugify(slug: string): string {
  return slug
    .replace(/:/g, "/") // restore slashes
    .replace(/-/g, " "); // restore spaces
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\//g, ":") // replace slashes with colons
    .replace(/\s+/g, "-"); // replace spaces with hyphens
}
