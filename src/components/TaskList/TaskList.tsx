import React from "react"
import type { TaskListProps } from "../../types"
import { TaskItem } from "../TaskItem/TaskItem"

export const TaskList: React.FC<TaskListProps> = ({
    tasks,
    onStatusChange,
    onDelete,
}) => {
    return (
        <div id="task-list">
            {tasks.length === 0 ? (
                <p>Woah...the big empty</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onStatusChange={onStatusChange}
                        onDelete={onDelete}
                    />
                ))
            )}
        </div>
    )
}

