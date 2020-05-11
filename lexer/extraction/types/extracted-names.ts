import NameForm from "./name-form";

type ExtractedNames = {
  readonly [P in
    | `characterNames`
    | `declaredSceneNames`
    | `referencedSceneNames`
    | `sceneNames`
    | `emoteNames`]: { readonly [fileName: string]: ReadonlyArray<NameForm> };
};

export default ExtractedNames;
