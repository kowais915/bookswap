import { useAuthContext } from "../hooks/useAuthContext";
import {useRouter } from 'next/router';

const Protected = ({children}) => {
    const router = useRouter();
    const {user } = useAuthContext();
    if(!user){
        
     
    }
    return children
}
 
export default Protected;