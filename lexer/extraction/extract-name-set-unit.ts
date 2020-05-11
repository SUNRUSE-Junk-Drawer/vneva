import Line from "../types/line";
import NameForm from "./types/name-form";
import extractNameSet from "./extract-name-set";

describe(`lexer`, () => {
  describe(`validation`, () => {
    describe(`extraction`, () => {
      describe(`extract-name-set`, () => {
        let lines: ReadonlyArray<Line>;

        let output: { readonly [fileName: string]: ReadonlyArray<NameForm> };
        let extractor: jasmine.Spy;

        beforeAll(() => {
          const lineA: Line = {
            type: `unlexable`,
            original: `Test Original A`,
            lineNumber: 10,
          };

          const lineB: Line = {
            type: `unlexable`,
            original: `Test Original B`,
            lineNumber: 14,
          };

          const lineC: Line = {
            type: `unlexable`,
            original: `Test Original C`,
            lineNumber: 18,
          };

          const lineD: Line = {
            type: `unlexable`,
            original: `Test Original D`,
            lineNumber: 20,
          };

          const lineE: Line = {
            type: `unlexable`,
            original: `Test Original E`,
            lineNumber: 21,
          };

          const lineF: Line = {
            type: `unlexable`,
            original: `Test Original F`,
            lineNumber: 28,
          };

          const lineG: Line = {
            type: `unlexable`,
            original: `Test Original G`,
            lineNumber: 30,
          };

          const lineH: Line = {
            type: `unlexable`,
            original: `Test Original H`,
            lineNumber: 34,
          };

          lines = [lineA, lineB, lineC, lineD, lineE, lineF, lineG, lineH];

          extractor = jasmine.createSpy(`extractor`).and.callFake((line) => {
            switch (line) {
              case lineB:
                return `Test Na!me A`;

              case lineC:
                return `Test Name B`;

              case lineD:
                return `Test Na?me A`;

              case lineE:
                return `Test Na!me A`;

              case lineG:
                return `Test Name B`;

              case lineH:
                return `Test Na!Me A`;

              default:
                return null;
            }
          });

          output = extractNameSet(lines, extractor);
        });

        it(`calls the extractor only with the given lines`, () => {
          extractor.calls
            .allArgs()
            .forEach((args) => expect(lines).toContain(args[0]));
        });

        function includes(
          description: string,
          fileName: string,
          forms: ReadonlyArray<NameForm>
        ): void {
          it(`includes ${description}`, () => {
            expect(output[fileName]).toEqual(forms);
          });
        }

        includes(`filenames with multiple forms`, `test-na-me-a`, [
          {
            writtenAs: `Test Na!me A`,
            lineNumberOfFirstOccurrence: 14,
          },
          {
            writtenAs: `Test Na?me A`,
            lineNumberOfFirstOccurrence: 20,
          },
          {
            writtenAs: `Test Na!Me A`,
            lineNumberOfFirstOccurrence: 34,
          },
        ]);

        includes(`filenames with one form`, `test-name-b`, [
          {
            writtenAs: `Test Name B`,
            lineNumberOfFirstOccurrence: 18,
          },
        ]);

        it(`includes no further filenames`, () => {
          expect(Object.keys(output).length).toEqual(2);
        });
      });
    });
  });
});
