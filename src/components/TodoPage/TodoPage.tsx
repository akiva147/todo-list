import { useEffect, useReducer, useState } from "react";
import classes from "./todo-page.module.scss";
import { Searchbar } from "../Searchbar";
import { TodoList } from "../TodoList";
import { Task } from "@/types/task.types";
import { taskReducer } from "./todoPage.utils";

export interface TodoPageProps {}

export const TodoPage = (props: TodoPageProps) => {
  const [tasks, taskActions] = useReducer(taskReducer, []);

  return (
    <div className={classes.container}>
      <Searchbar taskActions={taskActions} />
      <TodoList tasks={tasks} taskActions={taskActions} />
    </div>
  );
};
