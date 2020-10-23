import React, {Component} from "react";
import { VictoryLine, VictoryGroup } from 'victory';

export default class extends Component {
    decX = x => x + 320 / 2;
    decY = y => y + 320 / 2;
    
    render() {
        const width = 320,
            decX = x => x + width / 2,
            height = 320,
            decY = y => y + height / 2;
            const {phaseA, phaseB, phaseC} = this.props.data;
        return(
            <VictoryGroup width={width} height={height}>
                <VictoryLine
                    style={{
                        data: { stroke: "yellow" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    domain={{x: [0, width], y: [0, height]}}
                    data={[
                        { x: decX(0), y: decY(0) },
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
                    data={[
                        { x: decX(0), y: decY(0) },
                        { x: decX(width), y: decY(-height) },
                    ]}
                />
                <VictoryLine
                    style={{
                        data: { stroke: "yellow" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    domain={{x: [0, width], y: [0, height]}}
                    data={[
                        { x: decX(0), y: decY(0) },
                        { x: decX(Math.cos(phaseA.corner * 3.14 / 180) * phaseA.current), y: decY(Math.sin(phaseA.corner * 3.14 / 180) * phaseA.current) },
                    ]}
                />
            </VictoryGroup>
            
        )
    }


}