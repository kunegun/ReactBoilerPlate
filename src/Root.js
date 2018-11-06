import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from "./containers/home/Home";
import Planets from "./containers/planets/Planets";
import People from "./containers/people/People";
import "./Root.css";

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="sw-app">
        <h1>Surfing Star Wars API</h1>
        <ul className="header-list">
          <li className="header-list-item">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="header-list-item">
            <NavLink to="/planets">Planets</NavLink>
          </li>
          <li className="header-list-item">
            <NavLink to="/people">People</NavLink>
          </li>
        </ul>
        <div className="sw-content">
          <Route exact path="/" component={Home} />
          <Route path="/planets" component={Planets} />
          <Route path="/people" component={People} />
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
