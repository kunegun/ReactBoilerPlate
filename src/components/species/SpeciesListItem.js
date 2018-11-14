import React from "react";
import PropTypes from "prop-types";

const speciesListItem = ({ children, onClick }) => (
  <button type="submit" className="list-item-btn" onClick={onClick}>
    {children}
  </button>
);

speciesListItem.defaultProps = {
  onClick: () => {}
};
speciesListItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default speciesListItem;
