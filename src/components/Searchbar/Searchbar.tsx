import { Input, Button } from "antd";
import classes from "./searchbar.module.scss";
import { useState } from "react";
import { Task, TaskAction } from "@/types/task.types";

export interface SearchbarProps {
  taskActions: React.Dispatch<TaskAction>;
}

export const Searchbar = ({ taskActions }: SearchbarProps) => {
  const [currTask, setCurrTask] = useState("");

  const createTask = () => {
    if (currTask.trim().length === 0) return;
    taskActions({ type: "create", payload: currTask });
    setCurrTask("");
  };

  return (
    <form
      className={classes.container}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        createTask();
      }}
    >
      <Input
        placeholder="enter task"
        onChange={(e) => setCurrTask(e.target.value)}
        value={currTask}
        size="large"
      />
      <Button onClick={createTask} type="primary" size="large">
        add
      </Button>
    </form>
  );
};
