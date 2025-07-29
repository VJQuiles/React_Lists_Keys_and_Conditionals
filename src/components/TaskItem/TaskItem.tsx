import React from "react"
import type { TaskItemProps, TaskStatus } from "../../types"

export const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onStatusChange,
    onDelete,
}) => {
    return (
        <div
            id="task-item"
            className="container d-flex justify-content-between align-items-start p-3 border rounded mb-2">
            <div className="flex-grow-1 me-3">
                <h5>{task.title}</h5>
                <p className="mb-1">{task.description}</p>
            </div>
            <div className="d-flex flex-column align-items-end">
                <select
                    className="form-select me-2"
                    aria-label="Change task status"
                    onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(task.id)}
                >
                    Inspecto Deleto
                </button>
            </div>
        </div>
    )
}