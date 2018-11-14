import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { speciesIndexRequested, speciesSelected } from "../../actions";
import { SpeciesListItem } from "..";

class SpeciesList extends Component {
  componentDidMount() {
    const { requestSpeciesIndex, page } = this.props;
    requestSpeciesIndex(page);
  }

  shouldComponentUpdate(nextProps) {
    const { selectSpecie, species } = this.props;
    if (species !== nextProps.species) {
      const id = nextProps.species[0].name;
      selectSpecie(id);
    }
    return true;
  }

  render() {
    const {
      page,
      species,
      requestSpeciesIndex,
      count,
      specieInfo,
      selectSpecie
    } = this.props;
    const maxPage = Math.round(count / 10);
    return (
      <section>
        <div>
          <ul className="sw-list">
            {species.map(s => (
              <li
                key={s.name}
                className={`sw-list-item ${
                  specieInfo.id === s.name ? "selected" : ""
                }`}
              >
                <SpeciesListItem onClick={() => selectSpecie(s.name)}>
                  {s.name}
                </SpeciesListItem>
              </li>
            ))}
          </ul>
          <div className="list-pagination">
            {page > 1 && (
              <button
                className="list-pagination-btn prev"
                type="submit"
                onClick={() => requestSpeciesIndex(page - 1)}
              >
                Prev
              </button>
            )}
            {page <= maxPage && (
              <button
                className="list-pagination-btn next"
                type="submit"
                onClick={() => requestSpeciesIndex(page + 1)}
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

SpeciesList.propTypes = {
  requestSpeciesIndex: PropTypes.func.isRequired,
  species: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  selectSpecie: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  specieInfo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  species: state.entities.species,
  page: state.components.speciesList.page,
  count: state.components.speciesList.count,
  specieInfo: state.components.specieInfo
});

const mapDispatchToProps = dispatch => ({
  requestSpeciesIndex: page => dispatch(speciesIndexRequested({ page })),
  selectSpecie: id => dispatch(speciesSelected({ id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeciesList);
