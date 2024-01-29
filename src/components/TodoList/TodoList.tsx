import { Task, TaskAction } from "@/types/task.types";
import { Todo } from "../Todo/Todo";
import classes from "./todo-list.module.scss";

export interface TodoListProps {
  tasks: Task[];
  taskActions: React.Dispatch<TaskAction>;
}

export const TodoList = ({ tasks, taskActions }: TodoListProps) => {
  console.log("🚀 ~ TodoList ~ tasks:", tasks);
  return (
    <div className={classes.container}>
      {tasks.map((task) => (
        <Todo task={task} taskActions={taskActions} key={task.id} />
      ))}
    </div>
  );
};
