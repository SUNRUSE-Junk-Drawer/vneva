import Line from "./types/line";

const sceneRegex = /^##([^#][^(]*)\(([^()]+)\)\s*$/;
const dialogRegex = /^([^():]+)(?:\(([^()):]+)\)\s*)?:(.+)$/;
const optionRegex = /^\s*-\s+(.+)\(([^()]*)\)\s*$/;
const continuedRegex = /^\s*\(\s*continued\s+([^)]+)\)\s*$/;

export default function (line: string, lineNumber: number): Line {
  const sceneMatch = sceneRegex.exec(line);

  if (sceneMatch !== null) {
    const name = sceneMatch[1].trim();
    const backgroundName = sceneMatch[2].trim();

    if (name !== `` && backgroundName !== ``) {
      return {
        type: `scene`,
        name,
        backgroundName,
        lineNumber,
      };
    }
  }

  const dialogMatch = dialogRegex.exec(line);

  if (dialogMatch !== null) {
    const characterName = dialogMatch[1].trim();
    const emoteName =
      dialogMatch[2] === undefined ? null : dialogMatch[2].trim();
    const content = dialogMatch[3].trim();

    return {
      type: `dialog`,
      characterName,
      emoteName,
      content,
      lineNumber,
    };
  }

  const optionMatch = optionRegex.exec(line);

  if (optionMatch !== null) {
    const label = optionMatch[1].trim();
    const linksToSceneName = optionMatch[2].trim();

    if (label !== `` && linksToSceneName !== ``) {
      return {
        type: `option`,
        label,
        linksToSceneName,
        lineNumber,
      };
    }
  }

  const continuedMatch = continuedRegex.exec(line);

  if (continuedMatch !== null) {
    const linksToSceneName = continuedMatch[1].trim();

    return {
      type: `continued`,
      linksToSceneName,
      lineNumber,
    };
  }

  return {
    type: `unlexable`,
    original: line,
    lineNumber,
  };
}
