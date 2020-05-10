import convertToHtml from "./convert-to-html";

describe(`names`, () => {
  describe(`convert-to-html`, () => {
    function converts(fromName: string, toHtml: string): void {
      it(`converts the name "${fromName}" to the html "${toHtml}"`, () => {
        expect(convertToHtml(fromName)).toEqual(toHtml);
      });
    }

    converts(
      `Completely noRMaL text, with nothing unusual about it.`,
      `Completely noRMaL text, with nothing unusual about it.`
    );

    converts(
      `Completely noRMaL text, with nothing unusual about it`,
      `Completely noRMaL text, with nothing unusual about it`
    );

    converts(
      `Text which iNCLudes < things & which < & should be escaped.`,
      `Text which iNCLudes &lt; things &amp; which &lt; &amp; should be escaped.`
    );

    converts(
      `Text which iNCLudes a single * symbol which should not be converted to italics.`,
      `Text which iNCLudes a single * symbol which should not be converted to italics.`
    );

    converts(
      `Text which iNCLudes a single *symbol which should not be converted to italics.`,
      `Text which iNCLudes a single *symbol which should not be converted to italics.`
    );

    converts(
      `Text which iNCLudes a single* symbol which should not be converted to italics.`,
      `Text which iNCLudes a single* symbol which should not be converted to italics.`
    );

    converts(
      `Text which iNCLudes a single*symbol which should not be converted to italics.`,
      `Text which iNCLudes a single*symbol which should not be converted to italics.`
    );

    converts(
      `Text which iNCLudes multiple * symbols which should not * be converted to italics.`,
      `Text which iNCLudes multiple * symbols which should not * be converted to italics.`
    );

    converts(
      `Text which iNCLudes multiple *symbols which should not * be converted to italics.`,
      `Text which iNCLudes multiple *symbols which should not * be converted to italics.`
    );

    converts(
      `Text which iNCLudes multiple* symbols which should not * be converted to italics.`,
      `Text which iNCLudes multiple* symbols which should not * be converted to italics.`
    );

    converts(
      `Text which iNCLudes multiple*symbols which should not * be converted to italics.`,
      `Text which iNCLudes multiple*symbols which should not * be converted to italics.`
    );

    converts(
      `Text which iNCLudes multiple * symbols which should not* be converted to italics.`,
      `Text which iNCLudes multiple * symbols which should not* be converted to italics.`
    );

    converts(
      `Text which iNCLudes multiple * symbols which should not *be converted to italics.`,
      `Text which iNCLudes multiple * symbols which should not *be converted to italics.`
    );

    converts(
      `Text which iNCLudes multiple * symbols which should not*be converted to italics.`,
      `Text which iNCLudes multiple * symbols which should not*be converted to italics.`
    );

    converts(
      `Text which iNCLudes multiple* symbols which should not *be converted to italics.`,
      `Text which iNCLudes multiple* symbols which should not *be converted to italics.`
    );

    converts(
      `Text which iNCLudes multiple*symbols which should not *be converted to italics.`,
      `Text which iNCLudes multiple*symbols which should not *be converted to italics.`
    );

    converts(
      `Text which iNCLudes multiple* symbols which should not*be converted to italics.`,
      `Text which iNCLudes multiple* symbols which should not*be converted to italics.`
    );

    converts(
      `Text which iNCLudes multiple *symbols which should be* converted to italics.`,
      `Text which iNCLudes multiple <em>symbols which should be</em> converted to italics.`
    );

    converts(
      `*Text which iNCLudes multiple symbols which should be converted to italics.*`,
      `<em>Text which iNCLudes multiple symbols which should be converted to italics.</em>`
    );

    converts(
      `Text which iNCLudes multiple*symbols which should be*converted to italics.`,
      `Text which iNCLudes multiple<em>symbols which should be</em>converted to italics.`
    );

    converts(
      `Text which iNCLudes multiple *symbols which should be* converted *to* italics.`,
      `Text which iNCLudes multiple <em>symbols which should be</em> converted <em>to</em> italics.`
    );

    converts(
      `Text which iNCLudes multiple *symbols which should be* converted * to italics.`,
      `Text which iNCLudes multiple <em>symbols which should be</em> converted * to italics.`
    );

    converts(
      `Text which iNCLudes multiple *symbols which should be* converted *to italics.`,
      `Text which iNCLudes multiple <em>symbols which should be</em> converted *to italics.`
    );

    converts(
      `Text which iNCLudes multiple *symbols which should be* converted to* italics.`,
      `Text which iNCLudes multiple <em>symbols which should be</em> converted to* italics.`
    );

    converts(
      `Text which iNCLudes multiple *symbols which * should be* converted to italics.`,
      `Text which iNCLudes multiple <em>symbols which * should be</em> converted to italics.`
    );

    converts(
      `Text which iNCLudes a single ** symbol which should not be made bold.`,
      `Text which iNCLudes a single ** symbol which should not be made bold.`
    );

    converts(
      `Text which iNCLudes a single **symbol which should not be made bold.`,
      `Text which iNCLudes a single **symbol which should not be made bold.`
    );

    converts(
      `Text which iNCLudes a single** symbol which should not be made bold.`,
      `Text which iNCLudes a single** symbol which should not be made bold.`
    );

    converts(
      `Text which iNCLudes a single**symbol which should not be made bold.`,
      `Text which iNCLudes a single**symbol which should not be made bold.`
    );

    converts(
      `Text which iNCLudes multiple ** symbols which should not ** be made bold.`,
      `Text which iNCLudes multiple <em>* symbols which should not *</em> be made bold.`
    );

    converts(
      `Text which iNCLudes multiple **symbols which should not ** be made bold.`,
      `Text which iNCLudes multiple <em>*symbols which should not *</em> be made bold.`
    );

    converts(
      `Text which iNCLudes multiple** symbols which should not ** be made bold.`,
      `Text which iNCLudes multiple<em>* symbols which should not *</em> be made bold.`
    );

    converts(
      `Text which iNCLudes multiple**symbols which should not ** be made bold.`,
      `Text which iNCLudes multiple<em>*symbols which should not *</em> be made bold.`
    );

    converts(
      `Text which iNCLudes multiple ** symbols which should not** be made bold.`,
      `Text which iNCLudes multiple <em>* symbols which should not</em>* be made bold.`
    );

    converts(
      `Text which iNCLudes multiple ** symbols which should not **be made bold.`,
      `Text which iNCLudes multiple <em>* symbols which should not *</em>be made bold.`
    );

    converts(
      `Text which iNCLudes multiple ** symbols which should not**be made bold.`,
      `Text which iNCLudes multiple <em>* symbols which should not</em>*be made bold.`
    );

    converts(
      `Text which iNCLudes multiple** symbols which should not **be made bold.`,
      `Text which iNCLudes multiple<em>* symbols which should not *</em>be made bold.`
    );

    converts(
      `Text which iNCLudes multiple**symbols which should not **be made bold.`,
      `Text which iNCLudes multiple<em>*symbols which should not *</em>be made bold.`
    );

    converts(
      `Text which iNCLudes multiple** symbols which should not**be made bold.`,
      `Text which iNCLudes multiple<em>* symbols which should not</em>*be made bold.`
    );

    converts(
      `Text which iNCLudes multiple **symbols which should be** made bold.`,
      `Text which iNCLudes multiple <strong>symbols which should be</strong> made bold.`
    );

    converts(
      `**Text which iNCLudes multiple symbols which should be made bold.**`,
      `<strong>Text which iNCLudes multiple symbols which should be made bold.</strong>`
    );

    converts(
      `Text which iNCLudes multiple**symbols which should be**made bold.`,
      `Text which iNCLudes multiple<strong>symbols which should be</strong>made bold.`
    );

    converts(
      `Text which iNCLudes multiple **symbols which should be** **made** bold.`,
      `Text which iNCLudes multiple <strong>symbols which should be</strong> <strong>made</strong> bold.`
    );

    converts(
      `Text which iNCLudes multiple **symbols which should be** ** made bold.`,
      `Text which iNCLudes multiple <strong>symbols which should be</strong> ** made bold.`
    );

    converts(
      `Text which iNCLudes multiple **symbols which should be** **made bold.`,
      `Text which iNCLudes multiple <strong>symbols which should be</strong> **made bold.`
    );

    converts(
      `Text which iNCLudes multiple **symbols which should be** made** bold.`,
      `Text which iNCLudes multiple <strong>symbols which should be</strong> made** bold.`
    );

    converts(
      `Text which iNCLudes multiple **symbols which ** should be** made bold.`,
      `Text which iNCLudes multiple <strong>symbols which ** should be</strong> made bold.`
    );

    converts(
      `Text which emBEDs ***italics within bold*** as seen.`,
      `Text which emBEDs <strong><em>italics within bold</em></strong> as seen.`
    );

    converts(
      `Text which emBEDs***italics within bold***as seen.`,
      `Text which emBEDs<strong><em>italics within bold</em></strong>as seen.`
    );

    converts(
      `Text which emBEDs ***italics* within *bold*** as seen.`,
      `Text which emBEDs <strong><em>italics</em> within <em>bold</em></strong> as seen.`
    );

    converts(
      `Text which emBEDs ***bold** within **italics*** as seen.`,
      `Text which emBEDs <strong><em>bold</strong> within <strong>italics</em></strong> as seen.`
    );

    converts(
      `Text which emBEDs ***bold** within italics*** as seen.`,
      `Text which emBEDs <strong><em>bold</strong> within italics</em>** as seen.`
    );

    converts(
      `Text which emBEDs ***bold within **italics*** as seen.`,
      `Text which emBEDs <strong><em>bold within *</em>italics*</strong> as seen.`
    );

    converts(
      `Text which emBEDs ***italics* within bold*** as seen.`,
      `Text which emBEDs <strong><em>italics</em> within bold*</strong> as seen.`
    );

    converts(
      `Text which emBEDs ***italics within *bold*** as seen.`,
      `Text which emBEDs <strong><em>italics within *bold</em></strong> as seen.`
    );

    converts(
      `Text which emBEDs ***itali&cs < &* within *<bo<ld & <*** as seen.`,
      `Text which emBEDs <strong><em>itali&amp;cs &lt; &amp;</em> within <em>&lt;bo&lt;ld &amp; &lt;</em></strong> as seen.`
    );

    converts(
      `Text which uSEs ****four asterixes**** as seen.`,
      `Text which uSEs <strong><em>*four asterixes</em>*</strong> as seen.`
    );

    converts(
      `Text which uSEs *****five asterixes***** as seen.`,
      `Text which uSEs <strong><em></strong>five asterixes<strong></em></strong> as seen.`
    );

    converts(
      `Text which uSEs ******six asterixes****** as seen.`,
      `Text which uSEs <strong><em>*</strong>six asterixes<strong></em>*</strong> as seen.`
    );

    converts(
      `Text which uSEs *******seven asterixes******* as seen.`,
      `Text which uSEs <strong><em>*</em></strong>seven asterixes<strong><em>*</em></strong> as seen.`
    );

    converts(
      `Text which uSEs ********eight asterixes******** as seen.`,
      `Text which uSEs <strong><em>*</em><em></strong>eight asterixes<strong></em><em>*</em></strong> as seen.`
    );
  });
});
