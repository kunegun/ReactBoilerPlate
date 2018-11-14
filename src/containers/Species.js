import React, { Component } from "react";
import { SpeciesList, SpeciesInfo } from "../components";

export class Species extends Component {
  render() {
    return (
      <div>
        <h2>Species on Star Wars</h2>

        <div className="sw-container">
          <SpeciesList />
          <SpeciesInfo />
        </div>
      </div>
    );
  }
}

export default Species;
