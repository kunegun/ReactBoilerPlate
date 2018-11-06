import React, { Component } from "react";
import { PeopleList } from "../../components";

class People extends Component {
  render() {
    return (
      <div className="sw-container sw-people">
        <PeopleList />
      </div>
    );
  }
}

export default People;
