import React from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

const Index = (props) => {

    return(
        <div style={{color:'black', width:'100%', padding:'45px'}}>
            <h1>
                Task List App with: 
            </h1>
            <h4>
                Redux + Redux-React + Redux-Persist
            </h4>
            <TaskForm />
            <TaskList />
        </div>
    )
}
export default Index