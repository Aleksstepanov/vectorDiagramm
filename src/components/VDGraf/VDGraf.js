import React from "react";
import { VictoryLine, VictoryGroup } from 'victory';

export default () => {
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
                // height={height}
                // width={width}
                data={[
                    { x: decX(0), y: decY(0) },
                    { x: decX(0), y: decY(height) },
                ]}
            />
                <VictoryLine
                    style={{
                        data: { stroke: "red" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    domain={{x: [0, width], y: [0, height]}}
                    // height={height}
                    // width={width}
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