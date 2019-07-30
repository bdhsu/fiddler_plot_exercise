import React from 'react';
import loanData from './loanData';
import { VictoryChart, VictoryScatter, VictoryLabel } from 'victory';

const ScatterPlot = (props) => {
    return (
        // encpasulates all Victory Chart code
        <VictoryChart>
            <VictoryScatter
                data={loanData}
                x={props.pair.x}
                y={props.pair.y}
            />
            <VictoryLabel
                textAnchor="start" verticalAnchor="middle"
                x={10} y={10}
                style={{fontSize: 15}}
                text={"x: " + props.pair.x + ", y: " + props.pair.y}
            />
        </VictoryChart>
    )
}

export default ScatterPlot;
