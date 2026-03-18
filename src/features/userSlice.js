import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state,action) => {
      let prevDetails=JSON.parse(localStorage.getItem("users"));
            if(prevDetails){
                let matched = prevDetails.find(user => user.username==action.payload.username && user.password == action.payload.password)
                if(matched){
                    state.user=matched;
                    alert("Login Successfull")
                } 
                    else alert("Login failed")
            }
            else{
                alert("Signup first")
            }
    },
    signup:(state,action)=>{
         let prevDetails = JSON.parse(localStorage.getItem("users"));
            if(prevDetails){
                localStorage.setItem("users", JSON.stringify([...prevDetails, action.payload]))
                console.log(JSON.parse(localStorage.getItem("users")));
            }
            else{
                localStorage.setItem("users",JSON.stringify([action.payload]))
            }
    },
    logout:(state)=>{
        state.user={};
    }
  },
})

// Action creators are generated for each case reducer function
export const { login,signup,logout } = userSlice.actions;
const userReducer= userSlice.reducer;
export default userReducer;