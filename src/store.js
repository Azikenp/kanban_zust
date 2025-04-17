import { create } from "zustand";

const store = (set) => ({
  tasks: [
    { title: "TestTask", state: "PLANNED" },
    { title: "TestTask", state: "PLANNED" },
    { title: "TestTask", state: "ONGOING" },
    { title: "TestTask", state: "PLANNED" },
    { title: "TestTask", state: "DONE" },
  ],
});

export const useStore = create(store);
