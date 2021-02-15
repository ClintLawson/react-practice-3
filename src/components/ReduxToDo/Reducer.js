import { act } from 'react-dom/test-utils'
import { v4 as uuidv4 } from 'uuid'
// import store from './Store'


// the job of this reducer is to return the new state based on the action

// this reducer function must always be a PURE function to avoid...
// ...having to set a global state before output can be tested
export default function reducer(state = [], action){
    switch(action.type){
        case 'Task_Added':
            console.log('reducer add task fired...')
            return [
                ...state,  // use immer to get a REAL deep copy of the state
                {
                    id: uuidv4(),
                    description: action.payload.description,
                    isCompleted: false
                }
            ]

        case 'Task_Updated':
            console.log('reducer updating Task', action.payload)
            let newList = state
            let updated = newList.filter(t => t.id === action.payload.id)[0]
            updated.isCompleted = action.payload.isCompleted

            return newList.map(t => t.id === action.payload.id ? updated : t)

        default:
            return state //always return state by default to prevent returning undefined
    
    }
}