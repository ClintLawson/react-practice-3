import React, { useEffect } from 'react'
// import ToDoListApp from '../ToDoList/ToDoList'
import { Provider } from 'react-redux';
import TaskApp from './TaskApp/Index'

import store from './Store'

const Index = (props) => {

    useEffect(()=>{
        console.log(store.getState())
        store.dispatch({
            type:'Task_Added',
            payload:{
                description:'learn Redux'
            }
        })
        console.log(store.getState())
    },[])

    return(
      <Provider store={store}>
          <TaskApp />
      </Provider>

)}
export default Index