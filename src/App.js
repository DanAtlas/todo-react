import React, { Component } from 'react';
import './App.css';
import fireworks from './img/fireworks.svg';

class App extends Component {
  state = {
    todoList: [],
    tasks: ''
  };
  addtodo = () => {
    let g = this.state.todoList.slice();
    g.push(this.state.tasks)
    this.setState ({
      todoList: g,
      tasks: ''
    });
  }
  deletetodo = (i) => {
    let d = this.state.todoList.slice();
    d.splice(i,1);
    this.setState ({
      todoList: d,
      tasks: ''
    });
  }
  cleartodo = (i) => {
    let d = this.state.todoList.slice();
    d.splice(i,999);
    this.setState ({
      todoList: d,
      tasks: ''
    });
  }
  handleChange = (e) => {
    this.setState ({
      tasks:e.target.value
    });
  }
  getInitialState() {
    return {tasks: ''}
  }
  handleChange(e) {
    this.setState({tasks: e.target.value})
  }

  render() {
    let o = this.state.todoList.map((e,i) => {
      return (
        <li key={i}><p>{e}</p>
          <button className="btn-delete" 
            onClick={() => {this.deletetodo(i)}}>
          </button>
        </li>
      );
    });
    return (
      <div className="app">
        <h1>ToDo List App</h1>
        <div className="todo-wrapper">
          <div className="form">
            <input type="text"
              placeholder="Enter your task..."
              value={this.state.tasks}
              onChange={this.handleChange}
              className="input-todo"/>
            <button className="btn btn-add" 
              onClick={this.addtodo}
              disabled={!this.state.tasks}> +
            </button>
          </div>
          {this.state.todoList.length === 0 ? 
            <div className="status-free">
              <img src={fireworks} alt="fireworks"/>
              <h4>Chill time! You have no todos.</h4>
            </div> :
            <div className="wrap-todo-content">
              <ul>{o}</ul>
              <div className="clear-todo">
                <div className="btn btn-clear"
                  onClick={() => {this.cleartodo()}}>
                  Clear All
                </div>
              </div>
            </div>
          }
        </div>
        <div className="author">
          <a href="https://github.com/danatlas" target="_blank"
            rel="noopener noreferrer" className="btn-auth" 
            aria-label="Follow @nourabusoud on GitHub">
            <svg version="1.1" width="14" height="14" 
              viewBox="0 0 16 16" className="octicon octicon-mark-github" 
              aria-hidden="true">
              <path fill-rule="evenodd" 
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z">
              </path>
            </svg>
            <span googl="true"> Follow @danatlas</span>
          </a>
          <br/>
            <span className="git-auth">
              View on <a target="_blank" rel="noopener noreferrer" 
              href="https://github.com/DanAtlas/todo-react">Github</a>
            </span>
        </div>
        
      </div>
    );
  }
}

export default App;
