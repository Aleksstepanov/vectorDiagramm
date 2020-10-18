import React, {Component} from 'react';
import ChoiceRemovalVD from "../ChoiceRemovalVD/ChoiceRemovalVD";
import DataVD from '../DataVD/DataVD';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card grey darken-1">
                            <ChoiceRemovalVD/>
                            <DataVD />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}