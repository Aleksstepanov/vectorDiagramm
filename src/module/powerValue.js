export default (voltage, current, corner) => {
    const PowerActive = (voltage * current * Math.cos(corner * 3.14 / 180)).toFixed(2),
        PowerReactive = (voltage * current * Math.sin(corner * 3.14 / 180)).toFixed(2),
        Power = (Math.sqrt(PowerActive * PowerActive + PowerReactive * PowerReactive)).toFixed(2),
        cosPhi = (PowerActive / Power).toFixed(2); 
    
    return {
        PowerActive,
        PowerReactive,
        Power,
        cosPhi,
    }
}