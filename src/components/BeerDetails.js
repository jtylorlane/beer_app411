import React from "react";
// rendered by App.js
export default function BeerDetails(props) {
  return (
    <ol>
      {props.arrayOfBeer.map((beer, index) => {
        return (
          <li key={index}>
            <h3>{beer.name}</h3>
            <strong> Attuention Level: </strong>
            {beer.attenuation_level}
            <hr></hr>
            <strong> Boil Volume by Unit: </strong>
            {beer.boil_volume.unit}
            <hr></hr>
            <strong> Boil Volume by Value: </strong>
            {beer.boil_volume.value}
            <hr></hr>
            <strong> Brewer Tips: </strong>
            {beer.brewers_tips}
            <hr></hr>
            <strong> Contributed by: </strong>
            {beer.contributed_by}
            <hr></hr>
            <strong> Description: </strong>
            {beer.description}
            <hr></hr>
            <strong> EBC: </strong>
            {beer.ebc}
            <hr></hr>
            <button onClick={() => props.handleClick()}> I like it alot</button>
          </li>
        );
      })}
    </ol>
  );
}
