import React, {Component} from 'react';

import cl from 'classnames';

import ChoiceRemovalVD from "../ChoiceRemovalVD/ChoiceRemovalVD";
import DataVD from '../DataVD/DataVD';
import VDGraf from "../VDGraf/VDGraf";
import CardPower from "../CardPower/CardPower";
import PowerGraph from '../PowerGraph/PowerGraph';
import powerValue from '../../module/powerValue';
import style from './Content.module.scss';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phaseA: {
                voltage: NaN,
                current: NaN,
                corner: NaN,
            },
            phaseB: {
                voltage: NaN,
                current: NaN,
                corner: NaN,
            },
            phaseC: {
                voltage: NaN,
                current: NaN,
                corner: NaN,
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
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card grey lighten-1">
                            <VDGraf data={[this.state.phaseA.corner, this.state.phaseB.corner, this.state.phaseC.corner]}/>
                        </div>
                    </div>
                </div>
                    <div className="row">
                        {(!Object.is(+this.state.phaseA.voltage, NaN) && !Object.is(+this.state.phaseA.current, NaN) && !Object.is(+this.state.phaseA.corner, NaN))
                            ?
                            <div className="col s12 m4">
                                <CardPower value={this.state.phaseA} name="Фаза А"/>
                                <PowerGraph corner={this.state.phaseA.corner}/>
                            </div>
                            : null
                        }
                        {(!Object.is(+this.state.phaseB.voltage, NaN) && !Object.is(+this.state.phaseB.current, NaN) && !Object.is(+this.state.phaseB.corner, NaN))
                            ?
                            <div className="col s12 m4">
                                <CardPower value={this.state.phaseB} name="Фаза В"/>
                                <PowerGraph corner={this.state.phaseB.corner}/>
                            </div>
                            : null
                        }
                        {(!Object.is(+this.state.phaseC.voltage, NaN) && !Object.is(+this.state.phaseC.current, NaN) && !Object.is(+this.state.phaseC.corner, NaN))
                            ?
                            <div className="col s12 m4">
                                <CardPower value={this.state.phaseC} name="Фаза С"/>
                                <PowerGraph corner={this.state.phaseC.corner}/>
                            </div>
                            : null
                        }
                        </div>
                    
                
            </React.Fragment>
        );
    }
}