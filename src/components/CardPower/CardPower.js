import React from "react";
import powerValue from '../../module/powerValue';

export default props => {
    const name = props.name,
        {voltage, current, corner} = props.value,
        title = ['Активная мощность', 'Реактивная мощность', 'Полная мощность', 'Коэфф. мощности'],
        Power = powerValue(voltage, current, corner);
    
    return (
        <div className="card grey lighten-1">
                <div className="card-content white-text">
                    <span className="card-title">{name}</span>
                    <ul className="collection grey lighten-1">
                        {
                            Object.keys(Power).map((elem, index) => <li className="collection-item grey lighten-1" key={index}>{title[index]} {Power[elem]}</li>)
                        }
                    </ul>
                </div>
        </div>
    )
}