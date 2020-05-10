import lexLine from "./lex-line";

describe(`lexer`, () => {
  describe(`lex-line`, () => {
    function canLexSceneDirection(line: string): void {
      it(`can lex the scene direction "${line}"`, () => {
        expect(lexLine(line, 32)).toEqual({
          type: `scene`,
          name: `Test \t Scene Name`,
          backgroundName: `Test Background \t Name`,
          lineNumber: 32,
        });
      });
    }

    function canLexDialogWithoutEmote(line: string, content: string): void {
      it(`can lex the dialog (without emote) "${line}"`, () => {
        expect(lexLine(line, 32)).toEqual({
          type: `dialog`,
          characterName: `Test \t Character Name`,
          emoteName: null,
          content,
          lineNumber: 32,
        });
      });
    }

    function canLexDialogWithEmote(line: string, content: string): void {
      it(`can lex the dialog (with emote) "${line}"`, () => {
        expect(lexLine(line, 32)).toEqual({
          type: `dialog`,
          characterName: `Test \t Character Name`,
          emoteName: `Test \t \t Emote Name`,
          content,
          lineNumber: 32,
        });
      });
    }

    function canLexOption(line: string, label: string): void {
      it(`can lex the option "${line}"`, () => {
        expect(lexLine(line, 32)).toEqual({
          type: `option`,
          label,
          linksToSceneName: `Test \t Scene \t Name`,
          lineNumber: 32,
        });
      });
    }

    function canLexContinued(line: string): void {
      it(`can lex the continuation "${line}"`, () => {
        expect(lexLine(line, 32)).toEqual({
          type: `continued`,
          linksToSceneName: `Test \t \t Scene Name`,
          lineNumber: 32,
        });
      });
    }

    function cannotLex(line: string): void {
      it(`cannot lex "${line}"`, () => {
        expect(lexLine(line, 32)).toEqual({
          type: `unlexable`,
          original: line,
          lineNumber: 32,
        });
      });
    }

    canLexSceneDirection(`##Test \t Scene Name(Test Background \t Name)`);
    canLexSceneDirection(
      `##   \t \t   Test \t Scene Name   \t   (   \t Test Background \t Name    \t )   \t  \t `
    );

    cannotLex(`#Test \t Scene Name(Test Background \t Name)`);
    cannotLex(`###Test \t Scene Name(Test Background \t Name)`);
    cannotLex(`##Test \t Scene NameTest Background \t Name)`);
    cannotLex(`##Test \t Scene Name((Test Background \t Name)`);
    cannotLex(`##Test \t Scene Name(Test Background \t Name`);
    cannotLex(`##Test \t Scene Name(Test Background \t Name))`);
    cannotLex(`##(Test Background \t Name)`);
    cannotLex(`##    \t    (Test Background \t Name)`);
    cannotLex(`##Test \t Scene Name()`);
    cannotLex(`##Test \t Scene Name(   \t   )`);
    cannotLex(`##Test \t Scene Name(Test Background \t Name)Test Words`);
    cannotLex(`##(Test Background \t Name)Test \t Scene Name`);
    cannotLex(
      `##Test \t Scene Name(Test Background \t Name A)(Test Background \t Name B)`
    );

    canLexDialogWithoutEmote(
      `Test \t Character Name:Test Content \t Text`,
      `Test Content \t Text`
    );
    canLexDialogWithoutEmote(
      ` \t \t    \t Test \t Character Name    \t  :   \t    Test Content \t Text \t \t  `,
      `Test Content \t Text`
    );
    canLexDialogWithoutEmote(
      `Test \t Character Name:Test Con:tent \t Text`,
      `Test Con:tent \t Text`
    );
    canLexDialogWithoutEmote(
      `Test \t Character Name:Test Con(tent \t Text`,
      `Test Con(tent \t Text`
    );
    canLexDialogWithoutEmote(
      `Test \t Character Name:Test Con)tent \t Text`,
      `Test Con)tent \t Text`
    );
    canLexDialogWithoutEmote(
      `Test \t Character Name:Test Con(ten)t \t Text`,
      `Test Con(ten)t \t Text`
    );

    cannotLex(`Test \t Character Name:`);
    cannotLex(`:Test Content \t Text`);

    canLexDialogWithEmote(
      `Test \t Character Name(Test \t \t Emote Name):Test Content \t Text`,
      `Test Content \t Text`
    );
    canLexDialogWithEmote(
      `  \t \t   Test \t Character Name       \t \t \t    (  \t \t Test \t \t Emote Name \t \t   ) \t    \t  :     \t    Test Content \t Text \t \t `,
      `Test Content \t Text`
    );
    canLexDialogWithEmote(
      `Test \t Character Name(Test \t \t Emote Name):Test Con:tent Text`,
      `Test Con:tent Text`
    );
    canLexDialogWithEmote(
      `Test \t Character Name(Test \t \t Emote Name):Test Con(tent Text`,
      `Test Con(tent Text`
    );
    canLexDialogWithEmote(
      `Test \t Character Name(Test \t \t Emote Name):Test Con)tent Text`,
      `Test Con)tent Text`
    );
    canLexDialogWithEmote(
      `Test \t Character Name(Test \t \t Emote Name):Test C(on)tent Text`,
      `Test C(on)tent Text`
    );

    cannotLex(`(Test \t \t Emote Name):Test Content \t Text`);
    cannotLex(`Test \t Character Name():Test Content \t Text`);
    cannotLex(`Test \t Character Name(Test \t \t Emote Name):`);
    cannotLex(
      `Test \t Character Name((Test \t \t Emote Name):Test Content \t Text`
    );
    cannotLex(
      `Test \t Character Name(Test \t \t Emote Name)):Test Content \t Text`
    );
    cannotLex(
      `Test \t Character Name(Test \t \t Emote Name:Test Content \t Text`
    );
    cannotLex(
      `Test \t Character NameTest \t \t Emote Name):Test Content \t Text`
    );
    cannotLex(
      `Test \t Character Name(Test \t \t Emote Name)Test Content \t Text`
    );
    cannotLex(
      `Test \t Character Name(Test \t \t Emote NameTest Content \t Text`
    );
    cannotLex(
      `Test \t Character NameTest \t \t Emote Name):Test Content \t Text`
    );

    canLexOption(
      `- Test \t \t Label(Test \t Scene \t Name)`,
      `Test \t \t Label`
    );
    canLexOption(
      `  \t   \t   -  \t   \t \t Test \t \t Label(Test \t Scene \t Name)`,
      `Test \t \t Label`
    );
    canLexOption(
      `- Test \t \t La(bel(Test \t Scene \t Name)`,
      `Test \t \t La(bel`
    );
    canLexOption(
      `- Test \t \t La)bel(Test \t Scene \t Name)`,
      `Test \t \t La)bel`
    );
    canLexOption(
      `- Test \t \t La-bel(Test \t Scene \t Name)`,
      `Test \t \t La-bel`
    );

    cannotLex(`-Test \t \t Label(Test \t Scene \t Name)`);
    cannotLex(`Test Preceding Words - Test \t \t Label(Test \t Scene \t Name)`);
    cannotLex(`- Test \t \t LabelTest \t Scene \t Name)`);
    cannotLex(`Test \t \t Label(Test \t Scene \t Name)`);
    cannotLex(`- Test \t \t Label(Test \t Scene \t Name`);
    cannotLex(`- Test \t \t Label(Test \t Scene \t Name))`);
    cannotLex(`- Test \t \t LabelTest \t Scene \t Name`);
    cannotLex(`- (Test \t Scene \t Name)`);
    cannotLex(`- \t    \t (Test \t Scene \t Name)`);
    cannotLex(`- Test \t \t Label(  \t    \t   )`);
    cannotLex(`- Test \t \t Label()`);

    canLexContinued(`(continued Test \t \t Scene Name)`);
    canLexContinued(
      `   \t   ( \t   \t   continued    \t  \t Test \t \t Scene Name     \t \t  )   \t \t `
    );
    cannotLex(`continued Test \t \t Scene Name)`);
    cannotLex(`(continued Test \t \t Scene Name`);
    cannotLex(`(continued )`);
    cannotLex(`(continued)`);
    cannotLex(`Test \t \t Scene Name)`);
  });
});
