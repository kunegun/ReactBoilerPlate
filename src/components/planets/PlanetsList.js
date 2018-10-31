import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { planetsIndexRequested, planetSelected } from "../../actions";
import { PlanetsListItem } from "../../components";

class PlanetsList extends Component {
  componentDidMount() {
    const { requestPlanetsIndex } = this.props;
    requestPlanetsIndex();
  }

  render() {
    const { loading, planets, selectPlanet } = this.props;
    return (
      <section>
        <h2>Star Wars Planets</h2>
        {loading && <p className="loading-message">LOADING...</p>}
        <ul className="planets-list">
          {planets.map(p => (
            <li key={p.name}>
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
  selectPlanet: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  loading: state.planetsIndexCall.loading,
  planets: state.planetsIndex
});
const mapDispatchToProps = dispatch => ({
  requestPlanetsIndex: () => dispatch(planetsIndexRequested()),
  selectPlanet: id => dispatch(planetSelected({ id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetsList);
