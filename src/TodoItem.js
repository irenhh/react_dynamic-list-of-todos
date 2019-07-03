import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        className="todo-item__input"
      />

      <span className="todo-item__title">{props.item.title}</span>
      <hr />
      <p>{props.user.username}</p>
    </div>
  );
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    completed: PropTypes.bool,
    title: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
};

export default TodoItem;
