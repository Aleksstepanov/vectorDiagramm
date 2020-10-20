import React, {Component} from "react";
import { VictoryLine, VictoryGroup } from 'victory';

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
    componentWillUpdate(nextProps, nextState) {
        const {phaseA, phaseB, phaseC} = this.props.data;
        const width = 320,
            decX = x => x + width / 2,
            height = 320,
            decY = y => y + height / 2;
        phaseA.voltage = Math.round(phaseA.voltage * (height / 2) / 300);
        phaseA.current = Math.round(phaseA.current * (height / 2) / 300);
    }
    render() {

        const width = 320,
            decX = x => x + width / 2,
            height = 320,
            decY = y => y + height / 2;
        return(
            <VictoryGroup width={width} height={height}>
                <VictoryLine
                    style={{
                        data: { stroke: "yellow" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    domain={{x: [0, width], y: [0, height]}}
                    data={[
                        { x: decX(0), y: decY(320) },
                        { x: decX(0), y: decY(320) },
                    ]}
                />
                <VictoryLine
                    style={{
                        data: { stroke: "red" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    domain={{x: [0, width], y: [0, height]}}
                    data={[
                        { x: decX(0), y: decY(0) },
                        { x: decX(-width), y: decY(-height) },
                    ]}
                />
                <VictoryLine
                    style={{
                        data: { stroke: "green" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    domain={{x: [0, width], y: [0, height]}}
                    // height={height}
                    // width={width}
                    data={[
                        { x: decX(0), y: decY(0) },
                        { x: decX(width), y: decY(-height) },
                    ]}
                />
            </VictoryGroup>
        )
    }


}