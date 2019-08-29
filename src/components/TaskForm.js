import React from "react";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: ""
    };
  }

  submitAddTask = event => {

    event.preventDefault();

    const { addTask } = this.props;
    const {description} = this.state;

    addTask(description);

    this.setState({description: ""})
  };

  changeDescription = event =>
    this.setState({ description: event.target.value });

  render() {
    const { description } = this.state;

    return (
      <>
        <h2> Task Form </h2>
        <form onSubmit={this.submitAddTask}>
          <div className="row">
            <div className="col">
              <input
                className="form-control"
                type="text"
                placeholder="Ingrese una tarea..."
                value={description}
                onChange={this.changeDescription}
              />
            </div>
            <div className="col-sm-3">
              <button className="btn btn-block btn-primary">
                Agregar Tarea
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default TaskForm;
