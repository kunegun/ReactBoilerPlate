import React from "react";
import PropTypes from "prop-types";

const peopleListItem = ({ children, onClick }) => (
  <button type="submit" className="list-item-btn" onClick={onClick}>
    {children}
  </button>
);

peopleListItem.defaultProps = {
  onClick: () => {}
};
peopleListItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default peopleListItem;
