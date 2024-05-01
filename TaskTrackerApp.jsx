import React from 'react'

const TaskTrackerApp = ({task, toggleTask, onToggle}) => {

    function handleToggleTask(){
      toggleTask(task.id)
    }
  return (
    <div className = 'task-component'>
      <input type="checkbox" checked = {task.complete} onChange = {handleToggleTask} onDoubleClick = {onToggle} />
      
    </div>
  )
}

export default TaskTrackerApp


