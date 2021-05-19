import {Fragment, useEffect, useState} from "react";
  

export default function() {
   const [error, setError] = useState(null)

    
// move to util func
    const fetchPlatforms = async () => {
    
    // https://libraries.io/api/:platform/:name?api_key=
  
    setError(null);
    try {
      const response = await fetch(`https://libraries.io/api/platforms?api_key=${process.env.API_KEY}`)

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      setPlatformList(data)
  
    } catch (error) {
      setError(error.message);
    }
 
}
    
    useEffect(() => {
    
        fetchPlatforms()
},[])
    return (
        <Fragment>
           <h1>Dynamic Page</h1>
        </Fragment>
    )
}