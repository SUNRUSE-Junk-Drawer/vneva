import Line from "../types/line";

export default function (line: Line): null | string {
  switch (line.type) {
    case `option`:
    case `continued`:
      return line.linksToSceneName;

    case `scene`:
    case `dialog`:
    case `unlexable`:
      return null;
  }
}
