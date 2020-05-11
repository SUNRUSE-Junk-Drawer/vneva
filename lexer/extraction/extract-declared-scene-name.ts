import Line from "../types/line";

export default function (line: Line): null | string {
  switch (line.type) {
    case `scene`:
      return line.name;

    case `option`:
    case `continued`:
    case `dialog`:
    case `unlexable`:
      return null;
  }
}
