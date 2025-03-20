import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users:[]
}

 const slice = createSlice({
    name:"ADDUSER",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const data = {
                id:nanoid(),
                name:action.payload
            }
            state.users.push(data)
        },
        deleteUser:(state,action) => {
            const deleteditem = state.users.filter((users)=>users.id !== action.payload);
            state.users = deleteditem
        },
        editUser:(state,action) => {
            const edititem = state.users.filter((users)=>users.id == action.payload);
            state.users = edititem
        }

    }
})

export const {addUser,deleteUser,editUser} = slice.actions;
// export const {deleteUser} = slice.action;
export default slice.reducer