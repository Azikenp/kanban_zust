import { useMemo, useState } from "react";
import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";

const Column = ({ state }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const tasks = useStore((store) => store.tasks);

  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.state === state),
    [tasks, state]
  );

  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const moveTask = useStore((store) => store.moveTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const addTask = useStore((store) => store.addTask);

  return (
    <div
      className="column"
      onDragOver={(e) => {
        setDrop((prev) => !prev);
        e.preventDefault();
      }}
      onDragLeave={() => setDrop((prev) => !prev)}
      onDrop={() => {
        console.log(draggedTask);
        setDraggedTask(null);
        moveTask(draggedTask, state);
      }}
    >
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
