import NameForm from "./types/name-form";

export default function (
  a: { readonly [fileName: string]: ReadonlyArray<NameForm> },
  b: { readonly [fileName: string]: ReadonlyArray<NameForm> }
): { readonly [fileName: string]: ReadonlyArray<NameForm> } {
  const output: { [fileName: string]: ReadonlyArray<NameForm> } = { ...a };

  for (const key in b) {
    if (Object.prototype.hasOwnProperty.call(output, key)) {
      output[key] = output[key]
        .concat(b[key])
        .sort(
          (a, b) =>
            a.lineNumberOfFirstOccurrence - b.lineNumberOfFirstOccurrence
        );
    } else {
      output[key] = b[key];
    }
  }

  return output;
}
