import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     value: 0,
// }

export const counterSlice = createSlice({
    name: 'counter', // Nombre de las acciones en chrome
    initialState: {
        counterStateSlice: 10
        // times:0 //Si no se llega a cambiar mantiene el valor
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.counterStateSlice += 1
        },
        decrement: (state) => {
            console.log(state)
            state.counterStateSlice -= 1
        },
        incrementByAmount: (state, action) => {
            console.log(action)
            state.counterStateSlice += action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer