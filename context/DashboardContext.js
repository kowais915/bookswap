import {createContext, useReducer } from 'react';


export const DashboardContext = createContext();

const dashboardReducer = (state, action)=>{
    switch(action.type){
        case "PAGE": 
        return {...state, page: action.payload}
        default: 
        return state
    }

}


export const DashboardProvider = ({children})=>{

    const [state, dispatch] = useReducer(dashboardReducer, {
        page: 'Home'
    })


    const changePage = (page)=>{

        dispatch({type: "PAGE", payload: page})

    }

    return(
        <DashboardContext.Provider value={{...state, changePage, dispatch}}>
                {children}
        </DashboardContext.Provider>
    )


}

