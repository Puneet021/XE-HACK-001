import React, { Component } from 'react';
import './App.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import Header from './components/Header';
import IssueForm from './components/IssueForm';
import TicketList from './components/TicketList';

class App extends Component {
    //1. Constructor in which initial state is declared:
    constructor(props) {
        super(props);
        this.state = {
            user: "Academia",
            ticketList: []
        };
    }

    handleNewIssue = (ticketList) => {
        this.setState({
            ticketList: ticketList
        });
        console.log(this.state);
    }

    //Used currently with PersonalisationField component

    handleClosingOfTicket=(ticketId)=> {
        console.log("Ticket to close: ", ticketId);
        //Update state to close ticket
    }

    //3. Render the UI:
    //Access state in the render method using this.state
    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="col-sm12">
                        <br/>
                        <Header user={this.state.user} />
                        <IssueForm
                            onNewIssue={this.handleNewIssue} //A callback that will fire on form submit
                        />
                        <TicketList
                            ticketList={this.state.ticketList}
                            handleCloseTicket={this.handleClosingOfTicket}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
