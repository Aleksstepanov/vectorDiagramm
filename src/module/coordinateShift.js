// сдвигает коориднаты x, e на угол corner в декартовой системе координат
export default (x, y, corner) => {
const cornerRad = corner * 3.14 / 180,
    hyp = Math.sqrt((x * x) + (y * y)),
    newX = Math.sin(cornerRad) * hyp,
    newY = Math.cos(cornerRad) * hyp;
return [newX, newY];
}