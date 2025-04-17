import { useMemo } from "react";
import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";

const Column = ({ state }) => {
  const tasks = useStore((store) => store.tasks);

  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.state === state),
    [tasks, state]
  );

  return (
    <div className="column">
      <p>{state}</p>
      {filteredTasks.map((task, index) => (
        <Task key={index} title={task.title} state={task.state} />
      ))}
    </div>
  );
};

export default Column;
