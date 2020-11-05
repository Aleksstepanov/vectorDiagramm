import React, {useState} from "react";
import { VictoryLine, VictoryGroup, VictoryContainer } from 'victory';
import coordinates from '../../module/coordinates';
import decY from "../../module/decY";
import decX from "../../module/decX";
import width from "../../module/widthGraph";
import height from "../../module/heightGraph";
import coordinateShift from "../../module/coordinateShift";

export default (props) => {
    const {data} = props,
        [phaseB] = coordinates(data[1], true),
        [phaseC] = coordinates(data[2], true);
    console.log(coordinateShift(phaseC.x, phaseC.y, -120));
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
                                animate={{
                                    duration: 2000,
                                    onLoad: { duration: 1000 }
                                }}
                                domain={{x: [0, 320], y: [0, 320]}}
                                data={coordinates(data[0])}
                    />
                    : null
                }
                <VictoryLine
                    style={{
                        data: { stroke: "green" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    domain={{x: [0, 320], y: [0, 320]}}
                    data={coordinateShift(decX(0), decY(height() / 2), 120)}
                />
                {!Object.is(+data[1], NaN)
                    ?
                    <VictoryLine
                        style={{
                            data: { stroke: "green" },
                            parent: { border: "1px solid #ccc"}
                        }}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        domain={{x: [0, 320], y: [0, 320]}}
                        data={coordinateShift(phaseB.x, phaseB.y, 120)}
                    />
                    : null
                }
                <VictoryLine
                    style={{
                        data: { stroke: "red" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    domain={{x: [0, 320], y: [0, 320]}}
                    data={coordinateShift(decX(0), decY(height() / 2), -120)}
                />
                {!Object.is(+data[2], NaN)
                    ?
                    <VictoryLine
                        style={{
                            data: { stroke: "red" },
                            parent: { border: "1px solid #ccc"}
                        }}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        domain={{x: [0, 320], y: [0, 320]}}
                        data={coordinateShift(phaseC.x, phaseC.y, -120)}
                    />
                    : null
                }
            </VictoryGroup>
        )
}