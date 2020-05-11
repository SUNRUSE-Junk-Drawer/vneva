import Line from "../types/line";
import NameForm from "./types/name-form";
import convertToFileName from "../../names/convert-to-file-name";

export default function (
  lines: ReadonlyArray<Line>,
  extractor: (line: Line) => null | string
): { readonly [fileName: string]: ReadonlyArray<NameForm> } {
  const output: { [fileName: string]: NameForm[] } = {};

  for (const line of lines) {
    const name = extractor(line);

    if (name !== null) {
      const fileName = convertToFileName(name);

      if (Object.prototype.hasOwnProperty.call(output, fileName)) {
        const existing = output[fileName];

        if (!existing.some((form) => form.writtenAs === name)) {
          existing.push({
            writtenAs: name,
            lineNumberOfFirstOccurrence: line.lineNumber,
          });
        }
      } else {
        output[fileName] = [
          {
            writtenAs: name,
            lineNumberOfFirstOccurrence: line.lineNumber,
          },
        ];
      }
    }
  }

  return output;
}
