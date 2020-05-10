import Line from "./types/line";
import lexLine from "./lex-line";

const newLineRegex = /\r\n|\r|\n/gm;

export default function (lines: string): ReadonlyArray<Line> {
  return lines
    .split(newLineRegex)
    .map((line, index) => ({ line, lineNumber: index + 1 }))
    .filter((line) => line.line.trim() !== ``)
    .map((line) => lexLine(line.line, line.lineNumber));
}
