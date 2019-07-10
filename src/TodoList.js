import React from 'react';
import TodoItem from './TodoItem';
import User from './User';
import Sorter from './Sorter';
import { getTodos, getUsers } from './getData';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfTodos: [],
      visibleTodos: [],
      isLoaded: false,
      isLoading: false,
    };
  }

  loadData = () => {
    this.setState({ isLoading: true });

    Promise.all([getTodos(), getUsers()])
      .then(([todos, users]) => {
        const preparedTodos = todos.map(todo => ({
          ...todo,
          user: users.find(user => user.id === todo.userId),
        }));

        this.setState({
          listOfTodos: preparedTodos,
          isLoaded: true,
          isLoading: false,
          visibleTodos: preparedTodos,
        });
      });
  }

  sortByUserVals = (target) => {
    this.setState((prevState) => {
      return {
        visibleTodos: [...prevState.listOfTodos]
          .sort((a, b) => (a.user[target]).localeCompare(b.user[target])),
      };
    });
  }

  sortBy = (target) => {
    this.setState((prevState) => {
      return {
        visibleTodos: [...prevState.listOfTodos]
          .sort((a, b) => String(a[target]).localeCompare(String(b[target]))),
      };
    });
  }

  onTodoChecked = (id) => {
    this.setState((prevState) => {
      const checkedTodos = prevState.visibleTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        visibleTodos: checkedTodos,
      };
    });
  }

  render() {
    return (
      <div className="todo-list">
        { !this.state.isLoaded && (
          <button
            onClick={this.loadData}
            type="button"
            disabled={this.state.isLoading}
            className="todo-list__load-button"
          >
            {this.state.isLoading ? 'Loading...' : 'LOAD'}
          </button>
        )}

        { this.state.isLoaded && (
          <Sorter
            sortBy={this.sortBy}
            sortByUserVals={this.sortByUserVals}
          />
        )}

        {this.state.visibleTodos.map(todo => (
          <div
            className="todo-list__item"
            key={todo.id}
          >
            <TodoItem
              item={todo}
              onChange={this.onTodoChecked}
            />
            <User user={todo.user} />
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
