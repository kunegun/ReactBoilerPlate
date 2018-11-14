import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { planetResidentsGetRequested } from "../../actions";

class PlanetInfo extends Component {
  componentDidUpdate(prevProps) {
    const { id, getResidents, planet } = this.props;
    if (id !== prevProps.id) {
      if (planet && planet.residents) {
        getResidents(planet.residents);
      }
    }
  }

  render() {
    const { planet, residents, loading } = this.props;
    return (
      <section className="planet-info">
        {planet && (
          <article>
            <h3>Planet Info</h3>

            <ul className="planets-specifications">
              <li> {`ID: ${planet.id}`}</li>
              <li> {`Diameter: ${planet.diameter} km`}</li>
              <li> {`Gravity: ${planet.gravity} km`}</li>
              <li> {`Population: ${planet.population} people`}</li>
              <li> {`Climate: ${planet.climate}`}</li>
              <li> {`Terrain: ${planet.terrain}`}</li>
            </ul>
            {loading ? (
              <p className="loading-message">LOADING...</p>
            ) : (
              <h4>People from {planet.name}</h4>
            )}
            <ul>
              {residents.map(resident => (
                <li key={resident.name}>{resident.name}</li>
              ))}
            </ul>
          </article>
        )}
      </section>
    );
  }
}
PlanetInfo.defaultProps = {
  planet: null,
  residents: null
};
PlanetInfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  planet: PropTypes.object,
  residents: PropTypes.array,
  getResidents: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  loading: state.calls.planetResidents.loading,
  id: state.components.planetInfo.id,
  planet: state.components.planetInfo.id
    ? state.entities.planets.find(
        p => p.name === state.components.planetInfo.id
      )
    : null,
  residents: state.calls.planetResidents.residents
});
const mapDispatchToPros = dispatch => ({
  getResidents: residents =>
    dispatch(planetResidentsGetRequested({ residents }))
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(PlanetInfo);
