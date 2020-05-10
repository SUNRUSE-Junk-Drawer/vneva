import lexLines from "./lex-lines";

describe(`lexer`, () => {
  describe(`lex-lines`, () => {
    function supportsLineEnding(lineEnding: string): void {
      describe(`when using line ending ${JSON.stringify(lineEnding)}`, () => {
        it(`lexes files without preceding or trailing newlines`, () => {
          expect(
            lexLines(
              `Test Character A: Test Line A${lineEnding}${lineEnding}Test Character B: Test Line B${lineEnding}  Test Invalid Line ${lineEnding}- Test Option A (Test Scene Name A)`
            )
          ).toEqual([
            {
              type: `dialog`,
              characterName: `Test Character A`,
              emoteName: null,
              content: `Test Line A`,
              lineNumber: 1,
            },
            {
              type: `dialog`,
              characterName: `Test Character B`,
              emoteName: null,
              content: `Test Line B`,
              lineNumber: 3,
            },
            {
              type: `unlexable`,
              original: `  Test Invalid Line `,
              lineNumber: 4,
            },
            {
              type: `option`,
              label: `Test Option A`,
              linksToSceneName: `Test Scene Name A`,
              lineNumber: 5,
            },
          ]);
        });

        it(`lexes files with preceding newlines`, () => {
          expect(
            lexLines(
              `${lineEnding}${lineEnding}  ${lineEnding}${lineEnding}Test Character A: Test Line A${lineEnding}${lineEnding}Test Character B: Test Line B${lineEnding}  Test Invalid Line ${lineEnding}- Test Option A (Test Scene Name A)`
            )
          ).toEqual([
            {
              type: `dialog`,
              characterName: `Test Character A`,
              emoteName: null,
              content: `Test Line A`,
              lineNumber: 5,
            },
            {
              type: `dialog`,
              characterName: `Test Character B`,
              emoteName: null,
              content: `Test Line B`,
              lineNumber: 7,
            },
            {
              type: `unlexable`,
              original: `  Test Invalid Line `,
              lineNumber: 8,
            },
            {
              type: `option`,
              label: `Test Option A`,
              linksToSceneName: `Test Scene Name A`,
              lineNumber: 9,
            },
          ]);
        });

        it(`lexes files with trailing newlines`, () => {
          expect(
            lexLines(
              `Test Character A: Test Line A${lineEnding}${lineEnding}Test Character B: Test Line B${lineEnding}  Test Invalid Line ${lineEnding}- Test Option A (Test Scene Name A)${lineEnding}  ${lineEnding}${lineEnding}`
            )
          ).toEqual([
            {
              type: `dialog`,
              characterName: `Test Character A`,
              emoteName: null,
              content: `Test Line A`,
              lineNumber: 1,
            },
            {
              type: `dialog`,
              characterName: `Test Character B`,
              emoteName: null,
              content: `Test Line B`,
              lineNumber: 3,
            },
            {
              type: `unlexable`,
              original: `  Test Invalid Line `,
              lineNumber: 4,
            },
            {
              type: `option`,
              label: `Test Option A`,
              linksToSceneName: `Test Scene Name A`,
              lineNumber: 5,
            },
          ]);
        });

        it(`lexes files with preceding and trailing newlines`, () => {
          expect(
            lexLines(
              `${lineEnding}${lineEnding}  ${lineEnding}${lineEnding}Test Character A: Test Line A${lineEnding}${lineEnding}Test Character B: Test Line B${lineEnding}  Test Invalid Line ${lineEnding}- Test Option A (Test Scene Name A)${lineEnding}  ${lineEnding}${lineEnding}`
            )
          ).toEqual([
            {
              type: `dialog`,
              characterName: `Test Character A`,
              emoteName: null,
              content: `Test Line A`,
              lineNumber: 5,
            },
            {
              type: `dialog`,
              characterName: `Test Character B`,
              emoteName: null,
              content: `Test Line B`,
              lineNumber: 7,
            },
            {
              type: `unlexable`,
              original: `  Test Invalid Line `,
              lineNumber: 8,
            },
            {
              type: `option`,
              label: `Test Option A`,
              linksToSceneName: `Test Scene Name A`,
              lineNumber: 9,
            },
          ]);
        });
      });
    }

    supportsLineEnding(`\n`);
    supportsLineEnding(`\r`);
    supportsLineEnding(`\r\n`);
  });
});
