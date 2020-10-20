import React from "react";

export default props => {
    return (
        <React.Fragment>
        <div className="input-field col s4">
            <input id="voltageA" type="text" className="validate" onChange={props.onVoltageA}/>
                <label htmlFor="voltageA">Ua</label>
        </div>
        <div className="input-field col s4">
            <input id="currentA" type="text" className="validate" onChange={props.onCurrentA}/>
            <label htmlFor="currentA">Ia</label>
        </div>
        <div className="input-field col s4">
            <input id="cornerA" type="text" className="validate" onChange={props.onCornerA}/>
            <label htmlFor="cornerA">La</label>
        </div>
            <div className="input-field col s4">
                <input id="voltageB" type="text" className="validate"/>
                <label htmlFor="voltageB">Ub</label>
            </div>
            <div className="input-field col s4">
                <input id="currentB" type="text" className="validate"/>
                <label htmlFor="currentB">Ib</label>
            </div>
            <div className="input-field col s4">
                <input id="cornerB" type="text" className="validate"/>
                <label htmlFor="cornerB">Lb</label>
            </div>
            <div className="input-field col s4">
                <input id="voltageC" type="text" className="validate"/>
                <label htmlFor="voltageC">Uc</label>
            </div>
            <div className="input-field col s4">
                <input id="currentC" type="text" className="validate"/>
                <label htmlFor="currentC">Ic</label>
            </div>
            <div className="input-field col s4">
                <input id="cornerC" type="text" className="validate"/>
                <label htmlFor="cornerC">Lc</label>
            </div>
        </React.Fragment>
    )
}