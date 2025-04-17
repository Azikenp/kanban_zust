import classNames from "classnames";
import "./Task.css";

const Task = ({ title, state }) => {
  return (
    <div className="task">
      <div>{title}</div>
      <div className="bottomWrapper">
        <div></div>
        <div className={classNames("status", state)}>{state}</div>
      </div>
    </div>
  );
};

export default Task;
