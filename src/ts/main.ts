import { applyTheme } from "./theme";
import { toggleBlueActiveClasses } from "./toggleBlueActiveClasses";
import { btnThemeLight } from "./theme";
import theme from "./theme";
import fontSize from "./fontSize";

applyTheme();
toggleBlueActiveClasses([btnThemeLight], "add");
theme();
fontSize();
