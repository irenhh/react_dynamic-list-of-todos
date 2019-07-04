import React from 'react';
import TodoItem from './TodoItem';
import User from './User';
import Sorting from './Sorting';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfTodos: [],
      buttonDisabled: false,
      isLoaded: false,
      text: 'LOAD',
    };
    this.handleClick = this.handleClick.bind(this);
    this.sortBy = this.sortBy.bind(this);
    this.checkedTodo = this.checkedTodo.bind(this);
  }

  checkedTodo(id) {
    this.setState((prevState) => {
      const checkedTodos = prevState.listOfTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        listOfTodos: checkedTodos,
      };
    });
  }

  sortBy(target, nested) {
    if (!nested) {
      this.setState({
        listOfTodos: this.state.listOfTodos
          .sort((a, b) => String(a[target]).localeCompare(String(b[target]))),
      });
    } else {
      this.setState({
        listOfTodos: this.state.listOfTodos
          .sort((a, b) => (
            String(a[nested][target]).localeCompare(String(b[nested][target]))
          )),
      });
    }
  }

  handleClick() {
    this.setState({ buttonDisabled: true, text: 'Loading...' });
    const todosApi = fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json());
    const usersApi = fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json());

    Promise.all([todosApi, usersApi])
      .then((finalVals) => {
        const todos = finalVals[0];
        const users = finalVals[1];
        this.setState({
          listOfTodos: todos.map(todo => (
            {
              ...todo,
              user: users.find(user => user.id === todo.userId),
            }
          )),
          isLoaded: true,
        });
      });
  }

  render() {
    return (
      <div className="todo-list">
        { !this.state.isLoaded && (
          <button
            onClick={this.handleClick}
            type="button"
            disabled={this.state.buttonDisabled}
            className="load-button"
          >
            {this.state.text}
          </button>
        )}

        <Sorting
          isLoaded={this.state.isLoaded}
          sortBy={this.sortBy}
          filterStatus={this.filterStatus}
        />

        {this.state.listOfTodos.map(todo => (
          <div className="todo-list__item">
            <TodoItem
              key={todo.id}
              item={todo}
              checked={todo.completed}
              onChange={this.checkedTodo}
            />
            <User user={todo.user} />
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
