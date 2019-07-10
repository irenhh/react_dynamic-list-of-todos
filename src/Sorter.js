import React from 'react';
import PropTypes from 'prop-types';

function Sorter(props) {
  const { sortBy, sortByUserVals } = props;

  return (
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
        onClick={() => sortByUserVals('name')}
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
  );
}

Sorter.propTypes = {
  sortBy: PropTypes.func.isRequired,
  sortByUserVals: PropTypes.func.isRequired,
};

export default Sorter;
