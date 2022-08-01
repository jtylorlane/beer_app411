import React, { Component } from "react";

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
    alert("You Like That! (Kirk Cousins voice)")
  }

  render() {
    return (
      <div>
        <h2>   Your component works</h2>
        <ol>
          {this.state.arrayOfBeer.map((beer, index) => {
            return (
              <li key={index}>
                <h3>{beer.name}</h3>
                <strong> Attuention Level: </strong>
                <span>{beer.attenuation_level}</span><hr></hr>
                <strong> Boil Volume by Unit: </strong>
                <span>{beer.boil_volume.unit}</span><hr></hr>
                <strong> Boil Volume by Value: </strong>
                <span>{beer.boil_volume.value}</span><hr></hr>
                <strong> Brewer Tips: </strong>
                <span>{beer.brewers_tips}</span><hr></hr>
                <strong> Contributed by: </strong>
                <span>{beer.contributed_by}</span><hr></hr>
                <strong> Description: </strong>
                <span>{beer.description}</span><hr></hr>
                <strong> EBC: </strong>
                <span>{beer.ebc}</span><hr></hr>
                <button onClick={this.handleClick}> I like it lot</button> 
              </li>
              
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;
