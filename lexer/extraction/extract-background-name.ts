import Line from "../types/line";

export default function (line: Line): null | string {
  switch (line.type) {
    case `scene`:
      return line.backgroundName;

    case `continued`:
    case `dialog`:
    case `option`:
    case `unlexable`:
      return null;
  }
}
