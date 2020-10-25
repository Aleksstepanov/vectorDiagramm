export default (state) => {
    const {phaseA, phaseB, phaseC} = state,
        width = 320,
        height = 320,
        decX = (x) => width / 2 + x,
        decY = (y) => height / 2 + y,
        scaleX = phaseA.voltage > 180 ? 1 : 2,
        scaleY = phaseA.voltage > 180 ? 1 : 2,
        phaseCoordinates = {
            width: 320,
            height: 320,
        };
    phaseCoordinates.phaseACoordinates = {
        voltage: {
            data: [
                {x: decX(0), y: decY(0)},
                {x: decX(0), y: decY(height / 2)}
            ]
        },
        current: {
            data: [
                {x: decX(0), y: decY(0)},
                {x: decX(Math.trunc(height / 2 * Math.sin(phaseA.corner * 3.14 / 180))), y: decY(Math.trunc(height / 2 * Math.cos(phaseA.corner * 3.14 / 180)))}
            ]
        }
    }
    return phaseCoordinates;
}