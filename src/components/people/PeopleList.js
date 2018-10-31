import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { peopleIndexRequested } from "../../actions";

class PlanetsList extends Component {
  componentDidMount() {
    const { requestPeopleIndex } = this.props;
    requestPeopleIndex();
  }

  render() {
    const { loading, people } = this.props;
    return (
      <section>
        <h2>Star Wars People</h2>
        {loading && <p className="loading-message">LOADING...</p>}
        <ul className="planets-list">
          {people.map(p => (
            <li key={p.name}>
                {p.name}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

PlanetsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  people: PropTypes.array.isRequired,
  requestPeopleIndex: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  loading: state.peopleIndexCall.loading,
  people: state.peopleIndex
});
const mapDispatchToProps = dispatch => ({
  requestPeopleIndex: () => dispatch(peopleIndexRequested()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetsList);
