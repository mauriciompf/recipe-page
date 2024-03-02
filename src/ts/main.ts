import { applyTheme } from "./theme";
import { toggleBlueActiveClasses } from "./toggleBlueActiveClasses";
import { btnThemeLight } from "./theme";
import theme from "./theme";

applyTheme();
toggleBlueActiveClasses([btnThemeLight], "add");
theme();
