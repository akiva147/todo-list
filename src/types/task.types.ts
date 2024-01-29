export type Task = {
  id: string;
  content: string;
};

export type TaskAction =
  | {
      type: "create" | "delete";
      payload: string;
    }
  | {
      type: "edit";
      payload: Task;
    };
