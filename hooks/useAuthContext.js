import {AuthContext} from '../context/AuthContext';
import {useContext } from 'react';


export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw Error(" Please wrap your auth context ")


    }


    return context;


    
}


export default useAuthContext;