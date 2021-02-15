import { createStore } from '@reduxjs/toolkit'
import reducer from './Reducer'

export default createStore(reducer)

// this is my store design
// [
//     {
//         id:'1',
//         description:'learn redux',
//         isComplete: false
//     },
//     {
//         id:'2',
//         description:'learn redux-persist',
//         isComplete: false
//     }
// ]

// actions design
// {
//     type:'Task_Added',
//     payload: {
//         description: ''
//     }
// }

// {
//     type:'Task_Removed',
//     payload: {
//         id:''
//     }
// }

// {
//     type:'Task_Completed',
//     payload: {
//         id:''
//     }
// }