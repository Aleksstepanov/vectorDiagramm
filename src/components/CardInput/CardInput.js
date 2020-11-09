import React from "react";

export default  props => {
    const {name, id, value} = props.data;
    const onChangeInputHandler = (event) => {
        // test ? props.onInput(event) : event.target.value = "";
        props.onInput(event);
    }
    return (
        
            <div className="col s12 m4 xl14">
                <div className="card grey lighten-1">
                    <div className="card-content white-text">
                        <span className="card-title">{name}</span>
                        {
                            id.map((elem, index) => {
                                return (
                                    <div className="white-text input-field" key={elem}>
                                        <input id={elem} type="text" className="validate" onBlur={onChangeInputHandler}/>
                                        <label htmlFor={elem}>{value[index]}</label>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </div>
        
    )
}