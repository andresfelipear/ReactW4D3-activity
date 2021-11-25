import { v4 as uuidv4 } from 'uuid'
import { DONE_TO_DO, NEW_TO_DO, REMOVE_TO_DO } from '../action/actions'

const initState = {
    toDoList: [
        { id: uuidv4(), content: "Buy Bread", isDone: false },
        { id: uuidv4(), content: "Buy Milk", isDone: true },
    ]
}

const todosReducer = (state = initState, action) => {

    switch (action.type) {
        case NEW_TO_DO:
            action.payload.id = uuidv4()
            action.payload.isDone = false

            return {
                ...state,
                toDoList: [...state.toDoList, action.payload]
            }

        case DONE_TO_DO:
            var todo = state.toDoList.filter((todo)=>todo.id === action.payload.id)
            if(todo[0].isDone){
                todo[0].isDone = false;
            }
            else{
                todo[0].isDone = true;
            }
            return {
                ...state,
                toDoList: [...state.toDoList]
            }
    
        default:
            return state;
        
        case REMOVE_TO_DO:
            return{
                ...state,
                toDoList: state.toDoList.filter((todo)=>todo.id !== action.payload.id)
            }
    }

}

export default todosReducer