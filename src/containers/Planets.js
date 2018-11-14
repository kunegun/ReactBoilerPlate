import React, { Component } from "react";
import { PlanetInfo, PlanetsList } from "../components";

class Planets extends Component {
  render() {
    return (
      <div>
        <h2>Planets on Star Wars</h2>

        <div className="sw-container">
          <PlanetsList />
          <PlanetInfo />
        </div>
      </div>
    );
  }
}

export default Planets;
