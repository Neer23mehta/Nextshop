import { createSlice, nanoid,current,  createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    UserApiData:[],
    users:JSON.parse(localStorage.getItem("User"))?JSON.parse(localStorage.getItem("User")):[]
}

export const fetchApiUser = createAsyncThunk("Usersapi",async()=>{
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    return data.users;
})
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
            const userdata = JSON.stringify(current(state.users))
            localStorage.setItem("User",userdata)
        },
        deleteUser:(state,action) => {
            const deleteditem = state.users.filter((users)=>users.id !== action.payload);
            state.users = deleteditem
            const userdata = JSON.stringify(deleteditem)
            localStorage.setItem("User",userdata)
        },
        editUser:(state,action) => {
            const edititem = state.users.filter((users)=>users.id == action.payload);
            state.users = edititem
        }

    },
    extraReducers:(builder) => {
        builder.addCase(fetchApiUser.fulfilled,(state,action)=>{
            state.isloading = false,
            state.UserApiData = action.payload
        })
    }
})

export const {addUser,deleteUser,editUser} = slice.actions;
// export const {deleteUser} = slice.action;
export default slice.reducer