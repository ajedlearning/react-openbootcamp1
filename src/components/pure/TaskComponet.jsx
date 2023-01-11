import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

const TaskComponet = ({ task }) => {
  return (
    <div>
      <h2>Nombre: {task.name}</h2>
      <h3>Descripción: {task.description}</h3>
      <h4>Nivel: {task.level}</h4>
      <h5> Esta Tarea está: {task.completed ? 'Completada' : 'Pendiente'}</h5>
    </div>
  )
}

TaskComponet.propTypes = {
  task: PropTypes.instanceOf(Task),
}

export default TaskComponet
