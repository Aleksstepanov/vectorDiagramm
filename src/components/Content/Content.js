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
            phaseA: {
                voltage: '',
                current: '',
                corner: ''
            },
            phaseB: {
                voltage: '',
                current: '',
                corner: ''
            },
            phaseC: {
                voltage: '',
                current: '',
                corner: ''
            }
        }
    }
    onCornerA(newCorner) {
        const {phaseA} = this.state;
        phaseA.corner = newCorner;
        this.setState({phaseA});
    }
    onCurrentA(newCurrent) {
        const {phaseA} = this.state;
        phaseA.current = newCurrent;
        this.setState({phaseA});
    }
    onVoltageA(newVoltage) {
        const {phaseA} = this.state;
        phaseA.voltage = newVoltage;
        this.setState({phaseA});
    }
    onHandlerData(value, id) {
        console.log(value, id);
    }
    render() {
        return (
            <React.Fragment>
                <div className={cl("row", style.content)}>
                    <div className="col s12 m12">
                        <div className="card grey darken-1">
                            <ChoiceRemovalVD/>
                        </div>
                        <DataVD onCornerA={(props) => this.onCornerA(props.target.value)}
                                onCurrentA={(props) => this.onCurrentA(props.target.value)}
                                onVoltageA={(props) => this.onVoltageA(props.target.value)}
                                onInput={(props) => this.onHandlerData(props.target.value, props.target.id)}
                        />
                    </div>
                </div>
                <div className={style.graph}>
                    <VDGraf data={this.state}/>
                </div>
            </React.Fragment>
        );
    }
}