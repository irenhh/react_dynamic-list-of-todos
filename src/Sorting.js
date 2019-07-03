import React from 'react';
import PropTypes from 'prop-types';

function Sorting(props) {
  return (
    <div style={{ display: props.style }}>
      <span>Sort by</span>
      <button
        type="submit"
        onClick={() => props.sortBy('title')}
        className="sorting-button"
      >
        title
      </button>

      <button
        type="submit"
        onClick={() => props.sortBy('userName')}
        className="sorting-button"
      >
        user
      </button>

      <button
        type="submit"
        onClick={() => props.sortBy('completed')}
        className="sorting-button"
      >
        incompleted first
      </button>
    </div>
  );
}

Sorting.propTypes = {
  style: PropTypes.string.isRequired,
  sortBy: PropTypes.func.isRequired,
};

export default Sorting;
