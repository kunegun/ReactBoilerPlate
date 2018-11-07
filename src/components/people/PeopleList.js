import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { peopleIndexRequested, peopleClick } from "../../actions";
import { PeopleListItem } from "..";

class PlanetsList extends Component {
  componentDidMount() {
    const { requestPeopleIndex } = this.props;
    requestPeopleIndex();
  }

  render() {
    const { loading, people, clickPeople, peopleClicked } = this.props;
    return (
      <section>
        <h2>Star Wars People</h2>
        {loading && <p className="loading-message">LOADING...</p>}
        <ul className="sw-list">
          {people.map(p => (
            <li
              key={p.name}
              className={`sw-list-item ${
                peopleClicked.some(clicked => clicked === p.name)
                  ? "selected"
                  : ""
              }`}
            >
              <PeopleListItem onClick={() => clickPeople(p.name)}>
                {p.name}
              </PeopleListItem>
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
  peopleClicked: PropTypes.array.isRequired,
  requestPeopleIndex: PropTypes.func.isRequired,
  clickPeople: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  loading: state.calls.peopleIndexCall.loading,
  people: state.entities.peopleIndex,
  peopleClicked: state.components.peopleClick
});
const mapDispatchToProps = dispatch => ({
  requestPeopleIndex: () => dispatch(peopleIndexRequested()),
  clickPeople: id => dispatch(peopleClick({ id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetsList);
