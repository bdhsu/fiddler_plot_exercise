import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.scss';
import loanData from './loanData';

import Nav from './Nav';
import Generate from './Generate';
import Dashboard from './Dashboard';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedPlots: [
                {
                    x: "annual_inc",
                    y: "total_pymnt"
                },
                {
                    x: "fico_range_low",
                    y: "fico_range_high"
                },
                {
                    x: "annual_inc",
                    y: "loan_amnt"
                },
                {
                    x: "annual_inc",
                    y: "loan_amnt"
                },
                {
                    x: "annual_inc",
                    y: "total_pymnt"
                },
                {
                    x: "fico_range_low",
                    y: "fico_range_high"
                },
                {
                    x: "avg_cur_bal",
                    y: "tot_cur_bal"
                },
            ],
        };
        this.updateSavedPlots = this.updateSavedPlots.bind(this);
    }

    updateSavedPlots(savedPlots) {
        this.setState( savedPlots );
    }

    render() {
        return (
            <Router>
                <div className='App'>
                    <Nav />
                    <Switch>
                        <Route exact path="/"   render={props => <Generate savedPlots={this.state.savedPlots} setSavedPlots={this.updateSavedPlots} />} />
                        <Route path="/dashboard" render={props => <Dashboard savedPlots={this.state.savedPlots}/>} />
                        <Route render={function() {
                            return <p>404 Page Not Found</p>
                        }} />
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;
