import { useMemo, useState } from "react";
import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";

const Column = ({ state }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const tasks = useStore((store) => store.tasks);

  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.state === state),
    [tasks, state]
  );

  const addTask = useStore((store) => store.addTask);

  return (
    <div className="column">
      <div className="titleWrapper">
        <p>{state}</p>
        <button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          Add
        </button>
      </div>

      {filteredTasks.map((task, index) => (
        <Task key={index} title={task.title} state={task.state} />
      ))}

      {open && (
        <div className="Modal">
          <div className="modalContent">
            <input onChange={(e) => setText(e.target.value)} value={text} />
            <button
              onClick={() => {
                addTask(text, state);
                setText("");
                setOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Column;
