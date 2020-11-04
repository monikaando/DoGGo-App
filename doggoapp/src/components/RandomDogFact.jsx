import React from "react";
import axios from "axios";
import "../styles/RandomDogFact.scss";

class RandomDogFact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomDogFact: [],
    };
    this.getRandomDogFact = this.getRandomDogFact.bind(this);
  }

  componentDidMount() {
    this.getRandomDogFact();
  }

  getRandomDogFact() {
    axios({
      method: "GET",
      url: "https://cat-fact.herokuapp.com/facts/random?animal_type=dog",
    })
      .then((res) => {
        this.setState({
          randomDogFact: res.data,
        });
      })

      .catch((err) => {
        console.log("Error");
      });
  }

  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <div className="foggy-background d-flex flex-column justify-content-around align-items-center">
          <h4 className="pt-2 pb-4 pr-5 pl-5">
            {this.state.randomDogFact.text}
          </h4>
        </div>
        <button
          type="button"
          className="btn shuffle mt-4 mb-5"
          onClick={this.getRandomDogFact}
        >
          Shuffle
        </button>
      </div>
    );
  }
}

export default RandomDogFact;
