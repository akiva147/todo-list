import { Task, TaskAction } from "@/types/task.types";

export const taskReducer = (tasks: Task[], action: TaskAction) => {
  const { type, payload } = action;
  switch (type) {
    case "create": {
      return [
        ...tasks,
        {
          content: payload,
          id: crypto.randomUUID(),
        },
      ];
    }
    case "edit": {
      const editedIndex = tasks.findIndex((task) => task.id === payload.id);
      const tempTasks = tasks;
      tempTasks.splice(editedIndex, 1, payload);
      return tempTasks;
    }
    case "delete": {
      const editedIndex = tasks.findIndex((task) => task.id === payload);
      if (editedIndex === -1) return [...tasks];

      const tempTasks = tasks;

      tempTasks.splice(editedIndex, 1);

      return [...tempTasks];
    }

    default:
      throw new Error("Invalid action type");
  }
};
