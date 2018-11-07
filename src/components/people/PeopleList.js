import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { peopleIndexRequested, personSelected } from "../../actions";
import { PeopleListItem } from "..";

class PlanetsList extends Component {
  componentDidMount() {
    const { requestPeopleIndex } = this.props;
    requestPeopleIndex();
  }

  render() {
    const { loading, people, selectPerson, peopleClicked } = this.props;
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
              <PeopleListItem onClick={() => selectPerson(p.name)}>
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
  selectPerson: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  loading: state.calls.peopleIndex.loading,
  people: state.entities.people,
  peopleClicked: state.components.peopleList
});
const mapDispatchToProps = dispatch => ({
  requestPeopleIndex: () => dispatch(peopleIndexRequested()),
  selectPerson: id => dispatch(personSelected({ id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetsList);
