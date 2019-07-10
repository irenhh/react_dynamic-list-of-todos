import React from 'react';
import PropTypes from 'prop-types';

function Sorting(props) {
  const { sortBy, isLoaded } = props;

  return (
    isLoaded && (
      <div>
        <span>Sort by</span>
        <button
          type="button"
          onClick={() => sortBy('title')}
          className="sorting-button"
        >
          title
        </button>

        <button
          type="button"
          onClick={() => sortBy('name', 'user')}
          className="sorting-button"
        >
          user
        </button>

        <button
          type="button"
          onClick={() => sortBy('completed')}
          className="sorting-button"
        >
          incompleted first
        </button>
      </div>
    )
  );
}

Sorting.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  sortBy: PropTypes.func.isRequired,
};

export default Sorting;
