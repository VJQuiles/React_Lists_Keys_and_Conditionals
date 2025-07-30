import React, { useState } from "react"
import type { TaskListProps, TaskStatus } from "../../types"
import { TaskItem } from "../TaskItem/TaskItem"
import { TaskFilter } from "../TaskFilter/TaskFilter"

//This component is made to house both TaskItem and TaskFilter. State was used to enable the ability to set the initial filter status, and then handleChange was made to actually do something with filter change. .map was used to assign tasks in the list from the task array.  in

export const TaskList: React.FC<TaskListProps> = ({
    tasks,
    onStatusChange,
    onDelete,
}) => {

    const [filter, setFilter] = useState<{
        status?: TaskStatus

    }>({})

    const handleFilter = (newFilter: {
        status?: TaskStatus
        priority?: 'low' | 'medium' | 'high'
    }) => {
        setFilter(newFilter)
    }

    const filteredTasks = tasks.filter((task) => {
        const filterMatch = filter.status ? task.status === filter.status : true
        return filterMatch
    })

    return (

        < div id="task-list" >
            <TaskFilter onFilterChange={handleFilter} />
            <div id="task-items">
                {tasks.length === 0 ? (
                    <p>Woah...the big empty</p>
                ) : (
                    filteredTasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onStatusChange={onStatusChange}
                            onDelete={onDelete}
                        />
                    ))
                )}
            </div>
        </div >
    )
}

