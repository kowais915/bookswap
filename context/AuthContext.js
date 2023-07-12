import {createContext, useReducer } from 'react';
import {useEffect } from 'react';

export const AuthContext = createContext();

const authReducer = (state, action)=>{
    switch(action.type){
        case "LOGIN":
            return {user: action.payload}
        case "LOGOUT":
            return {user: null}
        default: 
            return state;
    }
}

useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'));




}, [])



export const AuthProvider = ({children})=>{
    const [state, dispatch ] = useReducer(authReducer, {
        user: null
    });

    
    

    const login = ()=>{
        
    }

    return(
        
        <AuthContext.Provider >

            {children}

        </AuthContext.Provider>
    )
}