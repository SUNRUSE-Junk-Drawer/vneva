import convertToFileName from "./convert-to-file-name";

describe(`names`, () => {
  describe(`convert-to-file-name`, () => {
    function converts(fromName: string, toFileName: string): void {
      it(`converts the name "${fromName}" to the file name "${toFileName}"`, () => {
        expect(convertToFileName(fromName)).toEqual(toFileName);
      });
    }

    converts(
      `Completely noRMaL text, with nothing unusual about it.`,
      `completely-normal-text-with-nothing-unusual-about-it`
    );

    converts(
      `Completely noRMaL text, with nothing unusual about it`,
      `completely-normal-text-with-nothing-unusual-about-it`
    );

    converts(
      `Text which iNCLudes < things & which < & should be escaped.`,
      `text-which-includes-things-which-should-be-escaped`
    );

    converts(
      `Text which iNCLudes a single * symbol which should not be converted to italics.`,
      `text-which-includes-a-single-symbol-which-should-not-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes a single *symbol which should not be converted to italics.`,
      `text-which-includes-a-single-symbol-which-should-not-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes a single* symbol which should not be converted to italics.`,
      `text-which-includes-a-single-symbol-which-should-not-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes a single*symbol which should not be converted to italics.`,
      `text-which-includes-a-single-symbol-which-should-not-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple * symbols which should not * be converted to italics.`,
      `text-which-includes-multiple-symbols-which-should-not-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple *symbols which should not * be converted to italics.`,
      `text-which-includes-multiple-symbols-which-should-not-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple* symbols which should not * be converted to italics.`,
      `text-which-includes-multiple-symbols-which-should-not-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple*symbols which should not * be converted to italics.`,
      `text-which-includes-multiple-symbols-which-should-not-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple * symbols which should not* be converted to italics.`,
      `text-which-includes-multiple-symbols-which-should-not-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple * symbols which should not *be converted to italics.`,
      `text-which-includes-multiple-symbols-which-should-not-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple * symbols which should not*be converted to italics.`,
      `text-which-includes-multiple-symbols-which-should-not-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple* symbols which should not *be converted to italics.`,
      `text-which-includes-multiple-symbols-which-should-not-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple*symbols which should not *be converted to italics.`,
      `text-which-includes-multiple-symbols-which-should-not-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple* symbols which should not*be converted to italics.`,
      `text-which-includes-multiple-symbols-which-should-not-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple *symbols which should be* converted to italics.`,
      `text-which-includes-multiple-symbols-which-should-be-converted-to-italics`
    );

    converts(
      `*Text which iNCLudes multiple symbols which should be converted to italics.*`,
      `text-which-includes-multiple-symbols-which-should-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple*symbols which should be*converted to italics.`,
      `text-which-includes-multiple-symbols-which-should-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple *symbols which should be* converted *to* italics.`,
      `text-which-includes-multiple-symbols-which-should-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple *symbols which should be* converted * to italics.`,
      `text-which-includes-multiple-symbols-which-should-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple *symbols which should be* converted *to italics.`,
      `text-which-includes-multiple-symbols-which-should-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple *symbols which should be* converted to* italics.`,
      `text-which-includes-multiple-symbols-which-should-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes multiple *symbols which * should be* converted to italics.`,
      `text-which-includes-multiple-symbols-which-should-be-converted-to-italics`
    );

    converts(
      `Text which iNCLudes a single ** symbol which should not be made bold.`,
      `text-which-includes-a-single-symbol-which-should-not-be-made-bold`
    );

    converts(
      `Text which iNCLudes a single **symbol which should not be made bold.`,
      `text-which-includes-a-single-symbol-which-should-not-be-made-bold`
    );

    converts(
      `Text which iNCLudes a single** symbol which should not be made bold.`,
      `text-which-includes-a-single-symbol-which-should-not-be-made-bold`
    );

    converts(
      `Text which iNCLudes a single**symbol which should not be made bold.`,
      `text-which-includes-a-single-symbol-which-should-not-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple ** symbols which should not ** be made bold.`,
      `text-which-includes-multiple-symbols-which-should-not-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple **symbols which should not ** be made bold.`,
      `text-which-includes-multiple-symbols-which-should-not-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple** symbols which should not ** be made bold.`,
      `text-which-includes-multiple-symbols-which-should-not-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple**symbols which should not ** be made bold.`,
      `text-which-includes-multiple-symbols-which-should-not-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple ** symbols which should not** be made bold.`,
      `text-which-includes-multiple-symbols-which-should-not-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple ** symbols which should not **be made bold.`,
      `text-which-includes-multiple-symbols-which-should-not-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple ** symbols which should not**be made bold.`,
      `text-which-includes-multiple-symbols-which-should-not-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple** symbols which should not **be made bold.`,
      `text-which-includes-multiple-symbols-which-should-not-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple**symbols which should not **be made bold.`,
      `text-which-includes-multiple-symbols-which-should-not-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple** symbols which should not**be made bold.`,
      `text-which-includes-multiple-symbols-which-should-not-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple **symbols which should be** made bold.`,
      `text-which-includes-multiple-symbols-which-should-be-made-bold`
    );

    converts(
      `**Text which iNCLudes multiple symbols which should be made bold.**`,
      `text-which-includes-multiple-symbols-which-should-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple**symbols which should be**made bold.`,
      `text-which-includes-multiple-symbols-which-should-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple **symbols which should be** **made** bold.`,
      `text-which-includes-multiple-symbols-which-should-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple **symbols which should be** ** made bold.`,
      `text-which-includes-multiple-symbols-which-should-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple **symbols which should be** **made bold.`,
      `text-which-includes-multiple-symbols-which-should-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple **symbols which should be** made** bold.`,
      `text-which-includes-multiple-symbols-which-should-be-made-bold`
    );

    converts(
      `Text which iNCLudes multiple **symbols which ** should be** made bold.`,
      `text-which-includes-multiple-symbols-which-should-be-made-bold`
    );

    converts(
      `Text which emBEDs ***italics within bold*** as seen.`,
      `text-which-embeds-italics-within-bold-as-seen`
    );

    converts(
      `Text which emBEDs***italics within bold***as seen.`,
      `text-which-embeds-italics-within-bold-as-seen`
    );

    converts(
      `Text which emBEDs ***italics* within *bold*** as seen.`,
      `text-which-embeds-italics-within-bold-as-seen`
    );

    converts(
      `Text which emBEDs ***bold** within **italics*** as seen.`,
      `text-which-embeds-bold-within-italics-as-seen`
    );

    converts(
      `Text which emBEDs ***bold** within italics*** as seen.`,
      `text-which-embeds-bold-within-italics-as-seen`
    );

    converts(
      `Text which emBEDs ***bold within **italics*** as seen.`,
      `text-which-embeds-bold-within-italics-as-seen`
    );

    converts(
      `Text which emBEDs ***italics* within bold*** as seen.`,
      `text-which-embeds-italics-within-bold-as-seen`
    );

    converts(
      `Text which emBEDs ***italics within *bold*** as seen.`,
      `text-which-embeds-italics-within-bold-as-seen`
    );

    converts(
      `Text which emBEDs ***itali&cs < &* within *<bo<ld & <*** as seen.`,
      `text-which-embeds-itali-cs-within-bo-ld-as-seen`
    );

    converts(
      `Text which uSEs ****four asterixes**** as seen.`,
      `text-which-uses-four-asterixes-as-seen`
    );

    converts(
      `Text which uSEs *****five asterixes***** as seen.`,
      `text-which-uses-five-asterixes-as-seen`
    );

    converts(
      `Text which uSEs ******six asterixes****** as seen.`,
      `text-which-uses-six-asterixes-as-seen`
    );

    converts(
      `Text which uSEs *******seven asterixes******* as seen.`,
      `text-which-uses-seven-asterixes-as-seen`
    );

    converts(
      `Text which uSEs ********eight asterixes******** as seen.`,
      `text-which-uses-eight-asterixes-as-seen`
    );
  });
});
