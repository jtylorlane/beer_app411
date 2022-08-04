import React, { Component } from "react";
import BeerDetails from "./components/BeerDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfBeer: [],
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json();
      })
      .then((arrayOfBeer) => this.setState({ arrayOfBeer }));
  }

  handleClick = () => {
    alert("You Like That! (Kirk Cousins voice)");
  };

  render() {
    return (
      <div>
        <h2> Your component works</h2>
        <BeerDetails
          arrayOfBeer={this.state.arrayOfBeer}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
