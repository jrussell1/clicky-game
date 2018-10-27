import React, { Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer"

class App extends Component {
  state = {
    count: 0,
    topScore: 0
  }

//SCORES
  updateCurrentScore = (newCount) => {
    this.setState({count: newCount});
  }

  updateTopScore = (newTop) => {
    if (newTop > this.state.topScore) {
      this.setState({topScore: newTop - 1})
    }
  }
//=====================================//
//Renders
  render() {
    return (
      <div>
        <Navbar score={this.state.count} top={this.state.topScore}/>
        <Header/>
        <CardContainer updateCurrentScore={this.updateCurrentScore} updateTopScore={this.updateTopScore}/>
      </div>
    );
  }
}

export default App;
