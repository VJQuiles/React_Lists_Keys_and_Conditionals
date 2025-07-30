import React from "react"
import type { TaskItemProps, TaskStatus } from "../../types"

//This componenet holds the information for the task item, and shapes it with TaskItemProps. WHen approaching this, i looked at it as the fundamental thing needed for the basis of out lab. It is ultimately what displays the data, and TaskList then displays it. This is made to be a child component of TaskList. 

export const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onStatusChange,
    onDelete,
}) => {
    return (
        <div
            id="task-item"
            className="container d-flex justify-content-between align-items-start p-3 border rounded mb-2">
            <div className="flex-grow-1 me-3 text-start">
                <h5>{task.title}</h5>
                <p className="mb-1">{task.description}</p>
                <span
                    className={
                        task.priority === 'high'
                            ? 'text-danger'
                            : task.priority === 'medium'
                                ? 'text-warning'
                                : 'text-success'
                    }>
                    {task.priority}</span>
                <p className="mt-2">{task.dueDate}</p>
            </div>
            <div className="d-flex flex-column align-items-end">
                <select
                    className="form-select mb-2"
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