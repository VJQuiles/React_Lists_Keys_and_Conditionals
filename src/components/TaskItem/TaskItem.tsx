import React from "react"
import type { TaskItemProps } from "../../types"

export const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onStatusChange,
    onDelete,
}) => {
    return (
        <div id="task-item" className="container d-flex justify-content-between align-items-start p-3 border rounded mb-2">
            <div id="task-info">
                <h5>{task.title}</h5>
                <p>{task.description}</p>
                <p><strong>Priority: {task.priority}</strong></p>
            </div>

            <div id="task-action" className="text-end">
                <button
                    className="btn btn-danger btn-sm mb-2"
                    onClick={() => onDelete(task.id)}
                >
                    Delete
                </button>
                <div>
                    <span className="badge bg-secondary">{task}</span>
                </div>
            </div>
        </div>
    )
}