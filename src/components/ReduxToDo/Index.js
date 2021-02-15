import React, { useEffect } from 'react'
import TaskApp from './TaskApp/Index'
import Loading from './Loading'

import { Provider } from 'react-redux';
// import store from './Store' //used in with redux react alone not with persist
import reducer from './Reducer' //this is from redux but for redux-persist config

import storage from 'redux-persist/lib/storage' // this defaults to localstorage for browser
import { persistStore, persistReducer } from 'redux-persist'
import { createStore } from '@reduxjs/toolkit';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
    key:'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

let store = createStore(
    persistedReducer, 
    // below is for enabling the chrome extension for debugging redux
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)
let persistor = persistStore(store)

const Index = (props) => {

    // useEffect(()=>{
    //     console.log(store.getState())
    //     store.dispatch({
    //         type:'Task_Added',
    //         payload:{
    //             description:'learn Redux'
    //         }
    //     })
    //     console.log(store.getState())
    // },[])

    return(
      <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
                <TaskApp />
            </PersistGate>
      </Provider>

)}
export default Index