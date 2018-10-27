import React, {Component} from 'react';
import Card from './Card';
import Pics from "./../pics.json"
import shuffle from "shuffle-array";

class CardContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 1,
            pics: Pics,
            selectedPics: []
        };
    }

    handleClick = (e) => {
        let id = e.target.id;
        let exists = false;
        this.state.selectedPics.forEach(pic => {
            if (pic.id == id) {
                exists = true;
            }
        })
        
        // if exists true
        if (exists) {
            this.endGame();
        }
        else {
            // loop through pics and then adds to the array
            this.state.pics.forEach(pic => {
                if (pic.id == id) {
                    this.setState({selectedPics: [...this.state.selectedPics, pic]});
                    console.log(this.state.selectedPics);
                    this.updateScore();
                }
            })  
        }
        this.setState({ pics: shuffle(this.state.pics)});
        console.log("Shuffling Pics");

    }

    // updates score by 1 and sets it to the parent component
    updateScore = () => {
        this.setState({score: this.state.score + 1});
        this.props.updateCurrentScore(this.state.score);
        console.log("Score: " + this.state.score);
    }

    endGame = () => {
        console.log("End!");
        this.props.updateTopScore(this.state.score);
        this.setState({score: 1, selectedPics: []});
        this.props.updateCurrentScore(0);
    }

    render() {
        return (
            <div className="container" id="card-container">
                <div className="row">
                    {Pics.map(pic => <Card src={pic.image} key={pic.id} id={pic.id} alt={pic.name} endGame={this.endGame} handleClick={this.handleClick} score={this.state.score} />)}
                </div>
            </div>
        );
    }
}

export default CardContainer;