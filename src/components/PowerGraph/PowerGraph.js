import React from 'react';
import { VictoryLine, VictoryGroup, VictoryAxis, VictoryTheme } from 'victory';
import coordinates from '../../module/coordinates';
import decY from "../../module/decY";
import decX from "../../module/decX";
import height from "../../module/heightGraph";
import width from '../../module/widthGraph';

export default props => {
    return (
        <React.Fragment>
            <VictoryGroup>
                <VictoryLine 
                    style={{
                        data: { stroke: "black" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    domain={{x: [0, 320], y: [0, 320]}}
                    data={[
                        {x: decX(-width()), y: decY(0)},
                        {x: decX(width()), y: decY(0)}
                    ]}
                />
                <VictoryLine 
                    style={{
                        data: { stroke: "black" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    domain={{x: [0, 320], y: [0, 320]}}
                    data={[
                        {x: decX(0), y: decY(-height())},
                        {x: decX(0), y: decY(height())}
                    ]}
                />
                <VictoryLine 
                    style={{
                        data: { stroke: "red" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    domain={{x: [0, 320], y: [0, 320]}}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}
                    data={coordinates(props.corner)}
                />
            </VictoryGroup>
        </React.Fragment>
    )
}