import { useReducer } from "react"

type State = {
    count : number;
    error :null | string;
}
type Action = {
    type : "increment" | "decrement"
}

export default function UseReducerExample () {
    const reducer  = (state : State, action  : Action) => {
        const {type} = action;
        switch(type) {
            case "increment" : {
                const newCounter = state.count + 1;
                const hasError = newCounter > 15;
                return {
                    ...state,
                    count : newCounter > 15 ? state.count : newCounter,
                    error : hasError ? "mixumm reached!" : null
                }
            }
            case "decrement" : {
                const newCounter = state.count - 1;
                const hasError = newCounter < 0;
                return {
                    ...state,
                    count : newCounter < 0 ? state.count : newCounter,
                    error : hasError ? "minumm reached!" : null
                }
            }
            default : 
             return state;
        }
    }
    const [state , dispatch]  = useReducer(reducer , {
        count : 0,
        error : null,
    })
   
    return(
        <div>
            {state.error && <p style={{color : "red"}}>{state.error}</p>}
            <p>count is : {state.count}</p>
            <button onClick={() => dispatch({type : 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type : "decrement"})}>Decrement</button>
        </div>
    )
}