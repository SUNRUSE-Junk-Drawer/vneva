type Dialog = {
  readonly type: `dialog`;
  readonly characterName: string;
  readonly emoteName: null | string;
  readonly content: string;
  readonly lineNumber: number;
};

export default Dialog;
