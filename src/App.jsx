import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from "./store/slices/counter";

function App() {
    // const counter = useSelector((state) => state.counterrr.counterStateSlice)
    const { counterStateSlice } = useSelector((state) => state.counterrr)
    // console.log(counter)
    // state.counterrr es el nombre dentro del store. Es un objeto. 
    // El counter es la variable dentro del objeto con el nombre en el slice.
    const dispatch = useDispatch()

    return (
        <div className="App">
            <h1>Vite + React</h1>
            <p>count is {counterStateSlice}</p>
            <div className="card">
                <button onClick={() => dispatch(increment())}>
                    increment
                </button>
                <button onClick={() => dispatch(decrement())}>
                    decrement
                </button>
                <button onClick={() => dispatch(incrementByAmount(2))}>
                    increment by 2
                </button>
            </div>
        </div>
    )
}

export default App
