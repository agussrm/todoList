import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from "./components/TaskList";

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      tasks: [
        {description: "Oslo"},
        {description: "Tokyo"},
        {description: "Denver"},
        {description: "Cincinatti"}
      ]
    }
  }

  addTask = (description) => {

      let {tasks} = this.state;

      let newTasks = [...tasks];
      newTasks.push({description})
    
      this.setState( {tasks: newTasks} )

  }


  render(){

    const { tasks } = this.state;

    return (
      <div className="container mt-5">
        <TaskForm addTask={this.addTask}/>
        <TaskList tasks={tasks}/>
      </div>
    );
  }
}

export default App;
