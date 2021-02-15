import React from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

const Index = (props) => {

    return(
        <div style={{color:'black', width:'100%', padding:'45px'}}>
            <h1>
                Task List With Redux
            </h1>
            <TaskForm />
            <TaskList />
        </div>
    )
}
export default Index