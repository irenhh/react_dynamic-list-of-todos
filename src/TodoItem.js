import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { item } = props;

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.completed}
        className="todo-item__input"
        id={`${item.title}-${item.id}`}
      />

      <label
        className="todo-item__title"
        htmlFor={item.id}
        onClick={() => props.onChange(item.id)}
      >
        {item.title}
      </label>

      <hr />
      <p>{item.user.username}</p>
    </div>
  );
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    completed: PropTypes.bool,
    title: PropTypes.string,
    user: PropTypes.object,
    id: PropTypes.number,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
