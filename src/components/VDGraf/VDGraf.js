import React from "react";
import { VictoryLine, VictoryGroup, VictoryContainer } from 'victory';

export default (props) => {
    const {phaseACoordinates, width, height} = props.data;
    console.log(phaseACoordinates);
    return(
            <VictoryGroup>
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