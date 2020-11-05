// сдвигает коориднаты x, e на угол corner. Входные значения в декартовой системе, выходные в PC
import decX from "./decX";
import decY from "./decY";

export default (x, y, corner) => {
const cornerRad = corner * 3.14 / 180,
    hyp = Math.sqrt((x * x) + (y * y)),
    newX = Math.sin(cornerRad) * hyp,
    newY = Math.cos(cornerRad) * hyp;
console.log([{x: decX(0), y: decY(0)},
        {x: decX(newX), y: decY(newY)}]);
return [{x: decX(0), y: decY(0)},
        {x: decX(newX), y: decY(newY)}];
}