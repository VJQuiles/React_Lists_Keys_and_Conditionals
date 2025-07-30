import React from "react"
import type { TaskFilterProps, TaskStatus } from "../../types"

//  This component is to filter tasks by status. When you select the status, only the respective tasks will show. I built this with the idea to make this a child component of TaskList. When looking at the the example, my mind drew the conclusion that both TaskFilter and TaskItem are what comprise the TaskList.

export const TaskFilter: React.FC<TaskFilterProps> = ({
    onFilterChange,
}) => {
    return (
        <div
            id="task-filter"
            className="mb-2"
        >
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