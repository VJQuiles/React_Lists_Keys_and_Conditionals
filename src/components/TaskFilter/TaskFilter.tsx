import React from "react"
import type { TaskFilterProps, TaskStatus } from "../../types"

export const TaskFilter: React.FC<TaskFilterProps> = ({
    onFilterChange,
}) => {
    return (
        <div id="task-filter">
            <select
                className="form-select me-2"
                aria-label="Task Filter"
                onChange={(e) =>
                    onFilterChange({ status: e.target.value as TaskStatus })
                }
            >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    )
}