import React from 'react';
import loanData from './loanData';

import ScatterPlot from './ScatterPlot';

class Generate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedX: "",
            selectedY: "",
            curPlots: [],
        };

        this.handleSelectedX = this.handleSelectedX.bind(this);
        this.handleSelectedY = this.handleSelectedY.bind(this);
        this.generatePlot = this.generatePlot.bind(this);
    }

    // handler functions for the selection form
    handleSelectedX(e) {
        this.setState({ selectedX: e.target.value });
    }

    handleSelectedY(e) {
        this.setState({ selectedY: e.target.value });
    }

    // handler function for generating a new plot
    generatePlot(e) {
        e.preventDefault();
        const newPlot = { // object stores x and y
            x: this.state.selectedX,
            y: this.state.selectedY
        }
        this.setState(state => ({ // adds newPlot object to curPlots array
            curPlots: state.curPlots.concat(newPlot),
            selectedX: "",
            selectedY: ""
        }));
    }

    // handler function for saving a generated plot to dashboard
    savePlot(index, e) {
        e.preventDefault();
        // updates state in parent component
        this.props.setSavedPlots({ savedPlots: this.props.savedPlots.concat(this.state.curPlots[index]) });
    }

    render() {
        return (
            <div>
                <h1> Generate Scatter Plot 📈</h1>
                {/* <h4><u>{loanData.length}</u> rows of loan data ready for plotting...</h4> */}
                <p>Select any pair of columns for x and y to be plotted.</p>

                {/* form for generating plot */}
                <form onSubmit={this.generatePlot}>
                    x:<select
                        name="x"
                        value={this.state.selectedX}
                        onChange={this.handleSelectedX}
                        required>
                        {/* .filter -> filters all possible keys in dataset to only numbers, excluding strings*/}
                        {Object.keys(loanData[0]).filter(word => typeof(loanData[0][word]) === "number").map(key => <option key={key} value={key}>{key}</option>)}
                    </select>
                    <br/>
                    y:<select
                        name="y"
                        value={this.state.selectedY}
                        onChange={this.handleSelectedY}
                        required>
                        {/* .filter -> filters all possible keys in dataset to only numbers, excluding strings*/}
                        {Object.keys(loanData[0]).filter(word => typeof(loanData[0][word]) === "number").map(key => <option key={key} value={key}>{key}</option>)}
                    </select>
                    <br/>
                    <button type="submit">Generate Plot</button>
                </form>

                {/* Currently Generated Plots View */}
                <div className="plot-container">
                    {this.state.curPlots.length > 0
                        ? this.state.curPlots.map((pair, index) => (
                        <div className="plot" key={index}>
                            <div className="scatterplot">
                                <button onClick={this.savePlot.bind(this, index)}>save</button>
                                <ScatterPlot data={loanData} pair={pair}/>
                            </div>
                        </div>))
                        : <h4>No plots have been generated thus far.</h4>
                    }
                </div>
            </div>
        )
    }
}

export default Generate;
