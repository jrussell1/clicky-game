import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, CardPanel, Col } from 'react-materialize';
import './Placeholder'

class App extends Component {
 state = {
  //need to add icons 
  icons: [],
  clicked: [],
  score: 0,
  highScore: 0,
  correct: undefined,
  gameWon: false
}

  randomize = (a, b) => Math.random() > .5 ? -1 : 1;

  clickHandler = iconName => {
    if (this.state.clicked.indexOf(iconName) === -1) {
      let score = this.state.clicked.length +1,
      clicked = score ===this.state.icons.length ? [] : [...this.state.clicked, iconName]

      this.setState({
        icons: this.state.icons.sort(this.randomize),
        clicked: clicked,
        score: score,
        highScore: Math.max(this.state.highScore, score),
        correct: true,
        gameWon: score === this.state.icons.length
      })
    } else {
      this.setState({
        icons: this.state.icons.sort(this.randomize),
        clicked: [],
        score: 0,
        correct: false,
        gameWon: false
      })
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <Nav correct={this.state.correct} gameWon={this.state.gameWon} score={this.state.score} highScore={this.state.highScore} />
            <Row>
              <Col s={12}>
                <CardPanel>
                  <p>Click any image to increase your points - but don't click it more that once.</p>
                </CardPanel>
              </Col>
            </Row>
          </div>
        <div className="container">
          <Row>
            {this.state.icons.map(icon => <Placeholder correct={this.state.correct} key={icon.iconName} icon={icon} clickHandler={this.clickHandler} />)}
          </Row>
        </div>
      </div>
    )
  }
}

export default App;
