import './App.css';
import Overview from './components/Overview'
import React, { Component } from 'react'



class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: []
    }
    this.taskHandler = this.taskHandler.bind(this)
  }

  taskHandler() {
    let input = document.getElementById('task-input')
    let task = input.value
    this.setState( (state) => {
      return { tasks: state.tasks.concat(task)}
    })
    // Clear the input after adding to state
    input.value = ''
  }

  render() {
    return (
      <div>
        <input id='task-input' type='text'></input>
        <button onClick={this.taskHandler}>
          Submit Task
        </button>
        <Overview tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default App;
