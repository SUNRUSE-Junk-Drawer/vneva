export default function (fromName: string): string {
  return fromName
    .replace(/&/g, `&amp;`)
    .replace(/</g, `&lt;`)
    .replace(/\*\*(\S|\S.*?\S)\*\*(?=[^*]|$)/g, (match) => {
      return `<strong>${match.slice(2, match.length - 2)}</strong>`;
    })
    .replace(/\*(\S|\S.*?\S)\*/g, (match) => {
      return `<em>${match.slice(1, match.length - 1)}</em>`;
    });
}
