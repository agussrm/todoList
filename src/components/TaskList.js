import React, { Fragment } from "react";
import Task from './Task';

const TaskList = props => {
  return props.tasks.map(({ description }, index) => (
    <Fragment key={index}>
      <hr />
      <Task description={description}/>
    </Fragment>
  ));
};

export default TaskList;
