import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload[0]);
            let allUsers = JSON.parse(localStorage.getItem("users")) || [];
            let index = allUsers.findIndex(user => user.username === action.payload[1]);
            if(index!=-1){
                if(!allUsers[index].todos) allUsers[index].todos=[];
                allUsers[index].todos.push(action.payload[0])
            }
            localStorage.setItem("users",JSON.stringify(allUsers))
        },
        deleteTodo:(state,action)=>{
            let i=action.payload[0];
            let allUsers = JSON.parse(localStorage.getItem("users")) || [];
            let index = allUsers.findIndex(user => user.username === action.payload[1]);
            if(index!=-1){
                allUsers[index].todos=allUsers[index].todos.filter((_,idx) => idx!==i)
                state.todos=allUsers[index].todos;
            }
            localStorage.setItem("users",JSON.stringify(allUsers))

        }
    },
})

// Action creators are generated for each case reducer function
export const { addTodo,deleteTodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;