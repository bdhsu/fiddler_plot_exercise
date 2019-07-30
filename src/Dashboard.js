import React from 'react';
import loanData from './loanData';

import ScatterPlot from './ScatterPlot';

const Dashboard = (props) => {
    return (
        <div className="Dashboard">
            <h1>Dashboard 🖥</h1>

            {/* Dashboard View */}
            <div className="plot-container">
                {props.savedPlots.length > 0
                    ? props.savedPlots.map((pair, index) => (
                        <div className="plot" key={index}>
                            <div className="scatterplot">
                                <ScatterPlot data={loanData} pair={pair} key={index}/>
                            </div>
                        </div>))
                    : <h4>There are currently no saved plots.</h4>
                }
            </div>
        </div>
    );
}

export default Dashboard;
