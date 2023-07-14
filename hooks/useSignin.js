import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signin = async (email, password) => {
    setIsLoading(true);
    setError(null);

    // * making a post request to our backend to login users

    const resp = await fetch("https://bookswap-api-production.up.railway.app/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const json = await resp.json();


    // * Outputting an error if the response is not ok

    if(!resp.ok){
        setIsLoading(false);
        setError((old) => old = json.error);
        console.log(error);

    }

    // * if the response is ok, save the token in local storage and then login the user right away

    if(resp.ok){
        localStorage.setItem('user', JSON.stringify(json));
        dispatch({type: 'LOGIN', payload: json})
        setIsLoading(false);
    }
  };

  return {signin, isLoading, error};
};
