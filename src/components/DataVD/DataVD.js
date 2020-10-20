import React from "react";
import CardInput from "../CardInput/CardInput";

export default props => {
    const data = {
        phaseA: {
            name: 'Фаза А',
            id: ['voltageA', 'currentA', 'cornerA'],
            value: ['Ua', 'Ia', 'La']
        },
        phaseB: {
            name: 'Фаза B',
            id: ['voltageB', 'currentB', 'cornerB'],
            value: ['Ub', 'Ib', 'Lb']
        },
        phaseC: {
            name: 'Фаза C',
            id: ['voltageC', 'currentC', 'cornerC'],
            value: ['Uc', 'Ic', 'Lc']
        },
    }
    return (
        <React.Fragment>
            <CardInput data={data.phaseA} onInput = {(event) => props.onInput(event)}/>
            <CardInput data={data.phaseB} onInput = {(event) => props.onInput(event)}/>
            <CardInput data={data.phaseC} onInput = {(event) => props.onInput(event)}/>
        </React.Fragment>
    )
}