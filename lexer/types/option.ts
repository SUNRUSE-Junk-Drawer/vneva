type Option = {
  readonly type: `option`;
  readonly label: string;
  readonly linksToSceneName: string;
  readonly lineNumber: number;
};

export default Option;
