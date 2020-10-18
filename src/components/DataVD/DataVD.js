import React from "react";

export default props => {
    return (
        <div className="input-field col s6">
            <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                <label htmlFor="first_name">First Name</label>
        </div>
    )
}