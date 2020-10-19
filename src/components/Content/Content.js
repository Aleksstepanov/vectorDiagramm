import React, {Component} from 'react';

import cl from 'classnames';

import ChoiceRemovalVD from "../ChoiceRemovalVD/ChoiceRemovalVD";
import DataVD from '../DataVD/DataVD';
import VDGraf from "../VDGraf/VDGraf";

import style from './Content.module.scss';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <div className={cl("row", style.content)}>
                    <div className="col s12 m12">
                        <div className="card grey darken-1">
                            <ChoiceRemovalVD/>
                            <DataVD />

                        </div>
                    </div>
                </div>
                <div className={style.graph}>
                    <VDGraf />
                </div>
            </React.Fragment>
        );
    }
}