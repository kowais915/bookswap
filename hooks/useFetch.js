import {useState, useEffect} from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);



    useEffect(()=>{

        const fetchData = async ()=>{
            const response = await fetch(url);
            const data = response.json();
            return data;
        }


        fetchData()
        .then((data)=>{
            setData(data); 
            setLoading(false);
        })
        .catch((error)=>{
            setError(error);
            setLoading(false);

        })




        

    }, [url])
    

return {data, error, loading}

    
}
 
