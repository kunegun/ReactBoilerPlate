import React, { Component } from "react";
import { PlanetInfo, PlanetsList } from "../../components";

class Planets extends Component {
  render() {
    return (
      <div className="sw-container">
        <PlanetsList />
        <PlanetInfo />
      </div>
    );
  }
}

export default Planets;
