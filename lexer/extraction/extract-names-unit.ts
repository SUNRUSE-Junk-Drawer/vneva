import Line from "../types/line";
import extractNames from "./extract-names";
import NameForm from "./types/name-form";
import ExtractedNames from "./types/extracted-names";

describe(`lexer`, () => {
  describe(`validation`, () => {
    describe(`extraction`, () => {
      describe(`extract-names`, () => {
        let output: ExtractedNames;

        beforeAll(() => {
          const lines: ReadonlyArray<Line> = [
            {
              type: `dialog`,
              characterName: `Test Character Name`,
              emoteName: `Test Emote Name`,
              content: `Test Content`,
              lineNumber: 12,
            },
            {
              type: `scene`,
              name: `Test Declared Scene Name`,
              backgroundName: `Test Background Name`,
              lineNumber: 15,
            },
            {
              type: `continued`,
              linksToSceneName: `Test Referenced Scene Name`,
              lineNumber: 18,
            },
          ];

          output = extractNames(lines);
        });

        function includes(
          description: string,
          key: keyof ExtractedNames,
          value: { readonly [fileName: string]: ReadonlyArray<NameForm> }
        ): void {
          it(`includes ${description}`, () => {
            expect(output[key]).toEqual(value);
          });
        }

        includes(`character names`, `characterNames`, {
          "test-character-name": [
            {
              writtenAs: `Test Character Name`,
              lineNumberOfFirstOccurrence: 12,
            },
          ],
        });

        includes(`declared scene names`, `declaredSceneNames`, {
          "test-declared-scene-name": [
            {
              writtenAs: `Test Declared Scene Name`,
              lineNumberOfFirstOccurrence: 15,
            },
          ],
        });

        includes(`referenced scene names`, `referencedSceneNames`, {
          "test-referenced-scene-name": [
            {
              writtenAs: `Test Referenced Scene Name`,
              lineNumberOfFirstOccurrence: 18,
            },
          ],
        });

        includes(`scene names`, `sceneNames`, {
          "test-declared-scene-name": [
            {
              writtenAs: `Test Declared Scene Name`,
              lineNumberOfFirstOccurrence: 15,
            },
          ],
          "test-referenced-scene-name": [
            {
              writtenAs: `Test Referenced Scene Name`,
              lineNumberOfFirstOccurrence: 18,
            },
          ],
        });

        includes(`emote names`, `emoteNames`, {
          "test-emote-name": [
            {
              writtenAs: `Test Emote Name`,
              lineNumberOfFirstOccurrence: 12,
            },
          ],
        });
      });
    });
  });
});
