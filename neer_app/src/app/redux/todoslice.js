import { createSlice,nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos:[]
}

const slice = createSlice({
    name:"ADDTODOS",
    initialState,
    reducers:{
        addTodos:(state,action) => {
            const data = {
                id:nanoid,
                todo:action.payload
            }
            state.todos.push(data)
        }
    }
})

export const {addTodos} = slice.actions;
export default slice.reducer; 