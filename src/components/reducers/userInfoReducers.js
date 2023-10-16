import {createSlice} from '@reduxjs/toolkit';


export const userSlice = createSlice(
    {
        name: 'userInfo',
        initialState: {
            id: null,
            name: "",
            password: "",
            dishes: [],
            total:[],
            guests:[],
        },
        reducers: {
            setUserInfo: (state, action) => {
                console.log(action.payload.user.id)
                state.id = action.payload.user.id
                state.name = action.payload.user.name
                state.password = action.payload.user.password
                state.dishes = action.payload.user.dishes
                state.total = action.payload.user.total
                state.guests = action.payload.user.guests


            },
            setDishes: (state, action) => {
                state.dishes = action.payload
            }
        }
    }
)
export const {setUserInfo, setDishes} = userSlice.actions
export default userSlice.reducer