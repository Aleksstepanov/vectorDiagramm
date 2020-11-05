import React, {useState} from "react";
import { VictoryLine, VictoryGroup, VictoryContainer } from 'victory';
import coordinates from '../../module/coordinates';
import decY from "../../module/decY";
import decX from "../../module/decX";
import width from "../../module/widthGraph";
import height from "../../module/heightGraph";

export default (props) => {
    const {data} = props;
    console.log(useState());
    return(
            <VictoryGroup>
                <VictoryLine
                    style={{
                        data: { stroke: "yellow" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    domain={{x: [0, 320], y: [0, 320]}}
                    data={[
                        {x: decX(0), y: decY(0)},
                        {x: decX(0), y: decY(height() / 2)}
                    ]}
                />
                {!Object.is(+data[0], NaN)
                    ?
                    <VictoryLine
                                style={{
                                    data: { stroke: "yellow" },
                                    parent: { border: "1px solid #ccc"}
                                }}
                                domain={{x: [0, 320], y: [0, 320]}}
                                data={coordinates(data[0])}
                    />
                    : null
                }
                {/*<VictoryLine*/}
                {/*        style={{*/}
                {/*            data: { stroke: "yellow" },*/}
                {/*            parent: { border: "1px solid #ccc"}*/}
                {/*        }}*/}
                {/*        domain={{x: [0, width], y: [0, height]}}*/}
                {/*        data={phaseACoordinates.voltage.data}*/}
                {/*/>*/}
                {/*<VictoryLine*/}
                {/*    style={{*/}
                {/*        data: { stroke: "yellow" },*/}
                {/*        parent: { border: "1px solid #ccc"}*/}
                {/*    }}*/}
                {/*    domain={{x: [0, width], y: [0, height]}}*/}
                {/*    data={phaseACoordinates.voltage.data}*/}
                {/*/>*/}
                {/*    <VictoryLine*/}
                {/*        style={{*/}
                {/*            data: { stroke: "yellow" },*/}
                {/*            parent: { border: "1px solid #ccc"}*/}
                {/*        }}*/}
                {/*        domain={{x: [0, width], y: [0, height]}}*/}
                {/*        data={phaseACoordinates.current.data}*/}
                {/*    />*/}
            </VictoryGroup>
        )
}