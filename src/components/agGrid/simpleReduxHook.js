import React, {useReducer} from "react";
import GridComponent from "./GridComponent";

import {Context, initialState, reducer} from "./store";

export function SimpleReduxHookExample() {
    const [store, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{store, dispatch}}>
            <div>
                <h1 onClick={() => dispatch({type: 'CLEAR_ROW_DATA'})}> Simple Example using Hooks (with useContext and useReducer)</h1>
                <button onClick={() => dispatch({type: "SET_ROW_DATA"})} className="btn btn-primary">Populate Row Data</button>
                <GridComponent/>
            </div>
        </Context.Provider>
    )
}

// =====================================================
// import React, {useReducer, useEffect} from "react";
// import GridComponent from "./GridComponent";
// import { useDispatch, useSelector } from 'react-redux'
// import {Context, initialState, reducer} from "./store";

// export function SimpleReduxHookExample() {
//     const sensors = useSelector(state => state.sensorReducer.sensors)
//     const gird = useSelector(state => state.gird)

//     const dispatch = useDispatch()
//     useEffect(() => {
//         dispatch({type: "SET_ROW_DATA", payload: sensors})
//     }, [sensors, ])

//     // const [store, dispatch] = useReducer(reducer, initialState);
//     return (
//         <Context.Provider value={{sensors, gird}}>
//             <div>
//                 <h1 onClick={() => dispatch({type: 'CLEAR_ROW_DATA'})}> Simple Example using Hooks (with useContext and useReducer)</h1>
//                 <button onClick={() => dispatch({type: "SET_ROW_DATA"})} className="btn btn-primary">Populate Row Data</button>
//                 <GridComponent/>
//             </div>
//         </Context.Provider>
//     )
// }
