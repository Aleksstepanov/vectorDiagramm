import React, {Component} from "react";
import { VictoryLine, VictoryGroup } from 'victory';

export default class extends Component {

    render() {
        console.log(this.props);
        const {phaseACoordinates, width, height} = this.props.data.phaseCoordinates;

        return(
            <VictoryGroup width={width} height={height}>
                <VictoryLine
                    style={{
                        data: { stroke: "yellow" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    domain={{x: [0, width], y: [0, height]}}
                    data={phaseACoordinates.voltage.data}
                />
                <VictoryLine
                    style={{
                        data: { stroke: "yellow" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    domain={{x: [0, width], y: [0, height]}}
                    data={phaseACoordinates.current.data}
                />

            </VictoryGroup>
            
        )
    }


}