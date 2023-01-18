import React, { useState, useEffect } from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/taskComponet'

const TaskListComponent = () => {
  const defaultTask = new Task(
    'Ejemplo',
    'Descripción por defecto',
    false,
    LEVELS.NORMAL,
  )

  //Estado del componente
  const [tasks, setTasks] = useState(defaultTask)
  const [loading, setLoading] = useState(true)

  //Control del ciclo de vida
  useEffect(() => {
    console.log("modificacion de tareas")
  
    return () => {
      console.log("El task list component se va a desmontar")
    }
  }, [tasks])
  

  const changeCompleted = (id) => {
    console.log('Todo Cambiar estado de una tarea')
  }

  return (
    <div>
      <div>Tu Tarea:</div>

      {/* TODO aplicar un map para renderizar la lista */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}

export default TaskListComponent
