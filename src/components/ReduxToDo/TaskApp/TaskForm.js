import React from 'react'
import { useDispatch } from 'react-redux'

const TaskForm = (props) => {
    const dispatch = useDispatch()

    const [newTask, setNewTask] = React.useState('')


    const clickHandler = () => {
        console.log('add task click handler',newTask)
        dispatch({
            type:'Task_Added',
            payload:{
                description: newTask
            }
        })
        setNewTask('')
    }

    return(
        <div>
            <input value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
            <button onClick={()=>clickHandler()}>
                Add Task
            </button>
        </div>
    )
}
export default TaskForm