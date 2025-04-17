import { useMemo } from "react";
import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";

const Column = ({ state }) => {
  const tasks = useStore((store) => store.tasks);
  const addTask = useStore((store) => store.addTask);

  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.state === state),
    [tasks, state]
  );

  return (
    <div className="column">
      <div className="titleWrapper">
        <p>{state}</p>
        <button
          onClick={() => {
            addTask("hello" + state, state);
          }}
        >
          Add
        </button>
      </div>

      {filteredTasks.map((task, index) => (
        <Task key={index} title={task.title} state={task.state} />
      ))}
    </div>
  );
};

export default Column;
