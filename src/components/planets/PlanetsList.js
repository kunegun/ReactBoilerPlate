import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { planetsIndexRequested, planetSelected } from "../../actions";
import { PlanetsListItem } from "..";

class PlanetsList extends Component {
  componentDidMount() {
    const { requestPlanetsIndex } = this.props;
    requestPlanetsIndex();
  }

  render() {
    const { loading, planets, selectPlanet, planetInfo } = this.props;
    return (
      <section>
        {loading && <p className="loading-message">LOADING...</p>}
        <ul className="sw-list planets-list">
          {planets.map(p => (
            <li
              key={p.name}
              className={`sw-list-item ${
                planetInfo.id === p.name ? "selected" : ""
              }`}
            >
              <PlanetsListItem onClick={() => selectPlanet(p.name)}>
                {p.name}
              </PlanetsListItem>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

PlanetsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  planets: PropTypes.array.isRequired,
  requestPlanetsIndex: PropTypes.func.isRequired,
  selectPlanet: PropTypes.func.isRequired,
  planetInfo: PropTypes.object
};
const mapStateToProps = state => ({
  loading: state.planetsIndexCall.loading,
  planets: state.planetsIndex,
  planetInfo: state.planetInfo
});
const mapDispatchToProps = dispatch => ({
  requestPlanetsIndex: () => dispatch(planetsIndexRequested()),
  selectPlanet: id => dispatch(planetSelected({ id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetsList);
