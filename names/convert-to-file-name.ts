export default function (fromName: string): string {
  return fromName
    .toLowerCase()
    .replace(/[^a-z]+/g, `-`)
    .replace(/^-/, ``)
    .replace(/-$/, ``);
}
