import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListItems = ({ note: { body, id } }) => {
  return (
    <Link to={`/notes/${id}`}>
      <div className="notes-list-item">
        <h3>{body}</h3>
      </div>
    </Link>
  );
};

ListItems.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string,
  }),
};
export default ListItems;
