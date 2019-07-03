import React from 'react';
import TodoItem from './TodoItem';
import User from './User';
import Sorting from './Sorting';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfTodos: [],
      isLoaded: false,
      buttonDisabled: false,
      text: 'LOAD',
    }
    this.handleClick = this.handleClick.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(target) {
    this.setState({
      listOfTodos: this.state.listOfTodos.sort((a, b) => String(a[target]).localeCompare(String(b[target])))
    })
  }

  handleClick() {
    this.setState({buttonDisabled: true, text: 'Loading...'})
    let todosApi = fetch('https://jsonplaceholder.typicode.com/todos');
    let usersApi = fetch('https://jsonplaceholder.typicode.com/users');

    Promise.all([todosApi, usersApi])
      .then(values => Promise.all(values.map(value => value.json())))
      .then(finalVals => {
          let todos = finalVals[0];
          let users = finalVals[1];
          this.setState({
            listOfTodos: todos.map(todo => (
              {
                ...todo,
                userName: users.find(user => (user.id === todo.userId)).name,
                user: users.find(user => user.id === todo.userId),
              }
            ))
          })
      });
  }

  render() {
    return (
      <div className="todo-list">
        <button
          onClick={this.handleClick}
          type="submit"
          disabled={this.state.buttonDisabled}
          style={this.state.listOfTodos.length > 0 ? {display: 'none'} : {display: 'block'}}
          className="load-button"
        >
          {this.state.text}
        </button>

        <Sorting
          style={this.state.listOfTodos.length > 0 ? 'block' : 'none'}
          sortBy={this.sortBy}
          filterStatus={this.filterStatus}
        />

        {this.state.listOfTodos.map(todo => (
          <div className="todo-list__item">
            <TodoItem
              key={todo.id}
              item={todo}
              user={todo.user}
            />
            <User user={todo.user} />
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
