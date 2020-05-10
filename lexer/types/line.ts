import Scene from "./scene";
import Dialog from "./dialog";
import Option from "./option";
import Continued from "./continued";
import Unlexable from "./unlexable";

type Line = Scene | Dialog | Option | Continued | Unlexable;

export default Line;
