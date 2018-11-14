import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { planetGetRequested } from "../../actions";

class PlanetInfo extends Component {
  componentDidUpdate(prevProps) {
    const { id, getHomeworld, species } = this.props;
    if (id !== prevProps.id) {
      if (species && species.homeworld) {
        const planetId = species.homeworld.split("/")[5];
        // const homeworld = planets.find(p => p.id === planetId);
        // if (!homeworld) getHomeworld(planetId);
        getHomeworld(planetId);
      }
    }
  }

  render() {
    const { species, homeworld } = this.props;
    return (
      <section className="planet-info">
        {species && (
          <article>
            <h3>Specie Info</h3>

            <ul className="specie-specifications">
              <li> {`Classification: ${species.classification}`}</li>
              <li> {`Language: ${species.language}`}</li>
              <li> {`Homeworld: ${homeworld.name}`}</li>
            </ul>
          </article>
        )}
      </section>
    );
  }
}
PlanetInfo.defaultProps = {
  species: null
};
PlanetInfo.propTypes = {
  species: PropTypes.object,
  getHomeworld: PropTypes.func.isRequired,
  planets: PropTypes.array.isRequired,
  homeworld: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  id: state.components.specieInfo.id,
  species: state.components.specieInfo.id
    ? state.entities.species.find(
        p => p.name === state.components.specieInfo.id
      )
    : null,
  planets: state.entities.planets,
  homeworld:
    state.entities.planets.find(
      p => p.name === state.components.specieInfo.id
    ) || state.calls.planet
});
const mapDispatchToPros = dispatch => ({
  getHomeworld: planetId => dispatch(planetGetRequested({ planetId }))
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(PlanetInfo);
