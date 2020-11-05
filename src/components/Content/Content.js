import React, {Component} from 'react';

import cl from 'classnames';

import ChoiceRemovalVD from "../ChoiceRemovalVD/ChoiceRemovalVD";
import DataVD from '../DataVD/DataVD';
import VDGraf from "../VDGraf/VDGraf";
import coordinates from "../../module/coordinates";
import style from './Content.module.scss';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phaseA: {
                voltage: '',
                current: '',
                corner: NaN,
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
            },

        }
    }
    onHandlerData(value, id) {
        const {phaseA, phaseB, phaseC} = this.state;
        switch (id) {
            case 'voltageA':
                phaseA.voltage = value;
                this.setState({phaseA});
                break;
            case 'currentA':
                phaseA.current = value;
                this.setState({phaseA});
                break;
            case 'cornerA':
                phaseA.corner = value;
                this.setState({phaseA});
                break;
            case 'voltageB':
                phaseB.voltage = value;
                this.setState({phaseB});
                break;
            case 'currentB':
                phaseB.current = value;
                this.setState({phaseB});
                break;
            case 'cornerB':
                phaseB.corner = value;
                this.setState({phaseB});
                break;
            case 'voltageC':
                phaseC.voltage = value;
                this.setState({phaseC});
                break;
            case 'currentC':
                phaseC.current = value;
                this.setState({phaseC});
                break;
            case 'cornerC':
                phaseC.corner = value;
                this.setState({phaseC});
                break;
            default: 
                console.log(1);
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className={cl("row", style.content)}>
                    <div className="col s12 m12">
                        <div className="card grey darken-1">
                            <ChoiceRemovalVD/>
                        </div>
                        <DataVD onInput={(props) => this.onHandlerData(props.target.value, props.target.id)}
                        />
                    </div>
                </div>
                <div className={style.graph}>
                    <VDGraf data={[this.state.phaseA.corner, this.state.phaseB.corner, this.state.phaseC.corner]}/>
                </div>
            </React.Fragment>
        );
    }
}