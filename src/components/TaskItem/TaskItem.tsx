import React from "react"
import type { TaskItemProps } from "../../types"

export const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onStatusChange,
    onDelete,
}) => {
    return (
        <div id="task-item" className="container d-flex justify-content-between align-items-start p-3 border rounded mb-2">

        </div>
    )
}