import Line from "../types/line";
import ExtractedNames from "./types/extracted-names";
import extractNameSet from "./extract-name-set";
import extractCharacterName from "./extract-character-name";
import extractDeclaredSceneName from "./extract-declared-scene-name";
import extractReferencedSceneName from "./extract-referenced-scene-name";
import combineExtractedNames from "./combine-extracted-names";
import extractEmoteName from "./extract-emote-name";
import extractBackgroundName from "./extract-background-name";

export default function (lines: ReadonlyArray<Line>): ExtractedNames {
  const characterNames = extractNameSet(lines, extractCharacterName);
  const declaredSceneNames = extractNameSet(lines, extractDeclaredSceneName);
  const referencedSceneNames = extractNameSet(
    lines,
    extractReferencedSceneName
  );
  const sceneNames = combineExtractedNames(
    declaredSceneNames,
    referencedSceneNames
  );
  const emoteNames = extractNameSet(lines, extractEmoteName);
  const backgroundNames = extractNameSet(lines, extractBackgroundName);

  return {
    characterNames,
    declaredSceneNames,
    referencedSceneNames,
    sceneNames,
    emoteNames,
    backgroundNames,
  };
}
