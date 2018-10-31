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
      <section>
        <h2>Planet Info</h2>
        {planet && (
          <article>
            <h3>{planet.name}</h3>
            <ul className="planets-specifications">
              <li> {`Diameter: ${planet.diameter} km`}</li>
              <li> {`Population: ${planet.population} people`}</li>
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
  loading: state.planetResidentsCall.loading,
  id: state.planetInfo.id,
  planet: state.planetInfo.id
    ? state.planetsIndex.find(p => p.name === state.planetInfo.id)
    : null,
  residents: state.planetResidentsCall.residents
});
const mapDispatchToPros = dispatch => ({
  getResidents: residents => dispatch(planetResidentsGetRequested({ residents }))
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(PlanetInfo);
