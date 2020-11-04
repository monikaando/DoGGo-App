import React from "react";
import axios from "axios";
import "../styles/AllDogsFacts.scss";

class AllDogsFacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allDogsFacts: [],
    };
    this.getAllDogsFactsList = this.getAllDogsFactsList.bind(this);
  }

  componentDidMount() {
    this.getAllDogsFactsList();
  }

  getAllDogsFactsList() {
    axios({
      method: "GET",
      url: "https://cat-fact.herokuapp.com/facts/?animal_type=dog",
    })
      .then((res) => {
        this.setState({
          allDogsFacts: res.data.all,
        });
      })
      .catch((err) => {
        console.log("Error");
      });
  }

  render() {
    return (
      <div className="scrollbar mb-5" id="style-2">
        <div className="mt-2 mb-4 mr-5 ml-5">
          {this.state.allDogsFacts.map((item, i) => (
            <div key={i} className="d-flex flex-column">
              {!item.text.toLowerCase().includes("testing") ? (
                <React.Fragment>
                  <h4 className="mt-4 pt-3">{item.text}</h4>
                  <div className="gray mr-3 d-flex flex-row justify-content-end">
                    <h6>Added by:</h6>
                    <h6 className="ml-1">{item.user.name.first}</h6>
                    <h6 className="ml-1">{item.user.name.last}</h6>
                  </div>
                </React.Fragment>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllDogsFacts;
