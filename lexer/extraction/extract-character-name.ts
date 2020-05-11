import Line from "../types/line";

export default function (line: Line): null | string {
  switch (line.type) {
    case `dialog`:
      return line.characterName;

    case `continued`:
    case `scene`:
    case `option`:
    case `unlexable`:
      return null;
  }
}
