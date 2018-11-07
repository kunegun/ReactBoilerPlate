import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { planetsIndexRequested, planetSelected } from "../../actions";
import { PlanetsListItem } from "..";

class PlanetsList extends Component {
  componentDidMount() {
    const { requestPlanetsIndex, page } = this.props;
    requestPlanetsIndex(page);
  }

  shouldComponentUpdate(nextProps) {
    const { selectPlanet, planets } = this.props;
    if (planets !== nextProps.planets) {
      selectPlanet(nextProps.planets[0].name);
    }
    return true;
  }

  render() {
    const {
      loading,
      planets,
      selectPlanet,
      planetInfo,
      requestPlanetsIndex,
      page,
      count
    } = this.props;
    const maxPage = Math.round(count / 10);
    return (
      <section className="planets-container">
        <div className="planets-list">
          <ul className="sw-list">
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
          <div className="list-pagination">
            {page > 1 && (
              <button
                className="list-pagination-btn prev"
                type="submit"
                onClick={() => requestPlanetsIndex(page - 1)}
              >
                Prev
              </button>
            )}
            {page <= maxPage && (
              <button
                className="list-pagination-btn next"
                type="submit"
                onClick={() => requestPlanetsIndex(page + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }
}

PlanetsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  planets: PropTypes.array.isRequired,
  requestPlanetsIndex: PropTypes.func.isRequired,
  selectPlanet: PropTypes.func.isRequired,
  planetInfo: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  loading: state.calls.planetsIndexCall.loading,
  page: state.components.planetsIndex.page,
  count: state.components.planetsIndex.count,
  planets: state.entities.planetsIndex,
  planetInfo: state.components.planetInfo
});
const mapDispatchToProps = dispatch => ({
  requestPlanetsIndex: page => dispatch(planetsIndexRequested({ page })),
  selectPlanet: id => dispatch(planetSelected({ id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetsList);
