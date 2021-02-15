import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// const tasks = [
    // {
    //     id:'1',
    //     description: 'fix fence',
    //     isComplete: false
    // },
    // {
    //     id:'2',
    //     description: 'buy couch',
    //     isComplete: true
    // },
// ]

const TaskList = (props) => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks) 
    console.log(tasks)
    const updateTask = (e, id) => {
        console.log('toggling completed', e.target.checked)
        dispatch({
            type: 'Task_Updated',
            payload:{
                id: id,
                isCompleted:  e.target.checked
            }
        })
    }

    const tasksRefreshed = () => console.log('refreshed tasks', tasks)
    useEffect(()=>(
        tasksRefreshed()
        
    ),[tasks])

    return(
        <div>

        {  tasks ? 
            tasks.map(t => 
                <h4 key={t.id} style={{display: 'flex'}}>
                    <input 
                        type='checkbox' 
                        checked={t.isCompleted} 
                        onClick={(e)=>updateTask(e, t.id)}
                        style={{margin:'5px 15px'}}
                    />

                    {t.description}
                    {/* {JSON.stringify(t)}  */}
                </h4>
            )
            :
            JSON.stringify(tasks)
        }

        </div>
    )
}
export default TaskList