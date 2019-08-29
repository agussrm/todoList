import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  markAsDone = () => this.setState({done: true})

  getColorFromStatus = () => this.state.done ? "success" : "warning"

  render() {
    const { description } = this.props;
    const { done } = this.state;

    return (

      <div className={`alert alert-${this.getColorFromStatus()}`} role="alert">
        {description}
        { !done
        
        &&

        <button
          type="button"
          className="close"
          aria-label="Close"
          style={{outline: "none"}}
          onClick={this.markAsDone}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        }
      </div>
    );
  }
}

export default Task;
