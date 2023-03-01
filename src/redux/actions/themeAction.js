import { THEME_CHANGE } from "./types";

export const switchMode = (mode) => {
    return {
        type: "SWITCH",
        payload: mode,
    };
};