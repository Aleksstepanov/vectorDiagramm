import React from "react";
import { VictoryLine, VictoryGroup } from 'victory';
import coordinates from '../../module/coordinates';
import decY from "../../module/decY";
import decX from "../../module/decX";
import height from "../../module/heightGraph";

export default (props) => {
    const {data} = props;
       
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
                    data={coordinates(120)}
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
                        data={coordinates(data[1] - 240)}
                    />
                    : null
                }
                <VictoryLine
                    style={{
                        data: { stroke: "red" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    domain={{x: [0, 320], y: [0, 320]}}
                    data={coordinates(-120)}
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
                        data={coordinates(data[2] - 120)}
                    />
                    : null
                }
            </VictoryGroup>
        )
}