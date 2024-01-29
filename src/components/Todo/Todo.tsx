import classes from "./todo.module.scss";
import { Button, Input } from "antd";
import type { InputRef } from "antd";
import { CloseOutlined, EditOutlined, CheckOutlined } from "@ant-design/icons";
import { Task, TaskAction } from "@/types/task.types";
import { useRef, useState } from "react";

export interface TodoProps {
  task: Task;
  taskActions: React.Dispatch<TaskAction>;
}

interface editContentProps extends TodoProps {
  // inputRef: React.RefObject<InputRef>;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  isEditMode: boolean;
  editedContent: string;
}

export const Todo = ({ task, taskActions }: TodoProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState(task.content);
  // const inputRef = useRef<InputRef>(null);

  return (
    <form
      className={classes.container}
      onSubmit={(e) => {
        e.preventDefault();
        editContent({
          // inputRef,
          isEditMode,
          setIsEditMode,
          task,
          taskActions,
          editedContent,
        });
      }}
    >
      <div className={classes.content}>
        {!isEditMode ? (
          <p>{editedContent}</p>
        ) : (
          <Input
            // ref={inputRef}
            style={
              !isEditMode
                ? {
                    position: "absolute",
                    display: "inline",
                    opacity: "0",
                    top: "-1",
                  }
                : { opacity: "1", width: "100%", display: "inline" }
            }
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        )}
      </div>
      <div className={classes.buttons}>
        <Button
          icon={!isEditMode ? <EditOutlined /> : <CheckOutlined />}
          type="text"
          size="small"
          onClick={() =>
            editContent({
              // inputRef,
              isEditMode,
              setIsEditMode,
              task,
              taskActions,
              editedContent,
            })
          }
        />
        <Button
          icon={<CloseOutlined />}
          type="text"
          size="small"
          onClick={(e) => taskActions({ type: "delete", payload: task.id })}
        />
      </div>
    </form>
  );
};

const editContent = ({
  // inputRef,
  isEditMode,
  setIsEditMode,
  task,
  taskActions,
  editedContent,
}: editContentProps) => {
  // inputRef.current?.focus({ cursor: "end", preventScroll: true });
  setIsEditMode((prev) => !prev);
  if (!isEditMode) return;
  taskActions({
    type: "edit",
    payload: {
      content: editedContent,
      id: task.id,
    },
  });
};
