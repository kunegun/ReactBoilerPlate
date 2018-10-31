import React from "react";
import PropTypes from "prop-types";

const planetsListItem = ({ children, onClick }) => (
  <button type="submit" className="planets-list-item" onClick={onClick}>
    {children}
  </button>
);

planetsListItem.defaultProps = {
  onClick: () => {}
};
planetsListItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default planetsListItem;
