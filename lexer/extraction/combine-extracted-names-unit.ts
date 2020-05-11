import NameForm from "./types/name-form";
import combineExtractedNames from "./combine-extracted-names";

describe(`lexer`, () => {
  describe(`validation`, () => {
    describe(`extraction`, () => {
      describe(`combine-extracted-names`, () => {
        let a: { readonly [fileName: string]: ReadonlyArray<NameForm> };
        let b: { readonly [fileName: string]: ReadonlyArray<NameForm> };
        let output: { readonly [fileName: string]: ReadonlyArray<NameForm> };

        beforeAll(() => {
          a = {
            testExclusiveToA: [
              {
                writtenAs: `Test Written As A`,
                lineNumberOfFirstOccurrence: 12,
              },
              {
                writtenAs: `Test Written As B`,
                lineNumberOfFirstOccurrence: 35,
              },
            ],
            testCommon: [
              {
                writtenAs: `Test Written As C`,
                lineNumberOfFirstOccurrence: 5,
              },
              {
                writtenAs: `Test Written As D`,
                lineNumberOfFirstOccurrence: 24,
              },
              {
                writtenAs: `Test Written As E`,
                lineNumberOfFirstOccurrence: 28,
              },
              {
                writtenAs: `Test Written As F`,
                lineNumberOfFirstOccurrence: 37,
              },
            ],
          };

          b = {
            testExclusiveToB: [
              {
                writtenAs: `Test Written As G`,
                lineNumberOfFirstOccurrence: 25,
              },
              {
                writtenAs: `Test Written As H`,
                lineNumberOfFirstOccurrence: 27,
              },
              {
                writtenAs: `Test Written As I`,
                lineNumberOfFirstOccurrence: 50,
              },
            ],
            testCommon: [
              {
                writtenAs: `Test Written As J`,
                lineNumberOfFirstOccurrence: 10,
              },
              {
                writtenAs: `Test Written As K`,
                lineNumberOfFirstOccurrence: 14,
              },
              {
                writtenAs: `Test Written As L`,
                lineNumberOfFirstOccurrence: 31,
              },
            ],
          };

          output = combineExtractedNames(a, b);
        });

        function includes(
          description: string,
          key: string,
          value: ReadonlyArray<NameForm>
        ): void {
          it(`includes ${description}`, () => {
            expect(output[key]).toEqual(value);
          });
        }

        includes(`file names exclusive to a`, `testExclusiveToA`, [
          {
            writtenAs: `Test Written As A`,
            lineNumberOfFirstOccurrence: 12,
          },
          {
            writtenAs: `Test Written As B`,
            lineNumberOfFirstOccurrence: 35,
          },
        ]);

        includes(`file names exclusive to b`, `testExclusiveToB`, [
          {
            writtenAs: `Test Written As G`,
            lineNumberOfFirstOccurrence: 25,
          },
          {
            writtenAs: `Test Written As H`,
            lineNumberOfFirstOccurrence: 27,
          },
          {
            writtenAs: `Test Written As I`,
            lineNumberOfFirstOccurrence: 50,
          },
        ]);

        includes(`file names common to both a and b`, `testCommon`, [
          {
            writtenAs: `Test Written As C`,
            lineNumberOfFirstOccurrence: 5,
          },
          {
            writtenAs: `Test Written As J`,
            lineNumberOfFirstOccurrence: 10,
          },
          {
            writtenAs: `Test Written As K`,
            lineNumberOfFirstOccurrence: 14,
          },
          {
            writtenAs: `Test Written As D`,
            lineNumberOfFirstOccurrence: 24,
          },
          {
            writtenAs: `Test Written As E`,
            lineNumberOfFirstOccurrence: 28,
          },
          {
            writtenAs: `Test Written As L`,
            lineNumberOfFirstOccurrence: 31,
          },
          {
            writtenAs: `Test Written As F`,
            lineNumberOfFirstOccurrence: 37,
          },
        ]);

        it(`includes no further filenames`, () => {
          expect(Object.keys(output).length).toEqual(3);
        });
      });
    });
  });
});
