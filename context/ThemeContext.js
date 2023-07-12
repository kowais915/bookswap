import {createContext, useReducer} from 'react';

export const ThemeContext = createContext();

const themeReducer = (state, action)=>{

    switch(action.type){
        case "CHANGE_COLOR":
            return {...state, color: action.payload}
        default: 
        return state

        

    }

}

const ThemeProvider = ({children})=>{
    const [state, dispatch] = useReducer(themeReducer, {
        dark: "black",
        white: "white"
    })


    const changeColor = (color)=>{
        dispatch({type: 'CHANGE_COLOR', payload: color});
    }
 
    return(

        <ThemeContext.Provider value={{...state, changeColor, dispatch}}>

            {children}

        </ThemeContext.Provider>
    )
}
