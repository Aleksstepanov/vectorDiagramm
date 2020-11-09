import decX from "./decX";
import decY from "./decY";
import height from "./heightGraph";

export default (state, shift = false) => {
    if (!shift) {
        return [
            {x: decX(0), y: decY(0)},
            {
                x: decX(Math.trunc(height() / 2 * Math.sin(state * 3.14 / 180))),
                y: decY(Math.trunc(height() / 2 * Math.cos(state * 3.14 / 180)))
            }
        ]
    }
    if (shift) {
        return [
            {
                x: Math.trunc(height() / 2 * Math.sin(state * 3.14 / 180)),
                y: Math.trunc(height() / 2 * Math.cos(state * 3.14 / 180))
            }
        ]
    }
}