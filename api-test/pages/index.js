import {useState} from "react";



export default function Home() {
    const [error,setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [packageName,setPackegeName] = useState('')
    const [platformName,setPlatformName] = useState('')
    const [packageVersion,setPackageVersion] = useState("")
    const [apiKey, setApiKey] = useState("")



  const fetchProjectDependencies = async (name, platform) => {
     setLoading(loading)
      setError(null);
      
      
     
      const url = `https://libraries.io/api/${platform}/${name}?api_key=${process.env.API_KEY}`
      
    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Something went wrong or this packeg is not exits!!');
      }

      const data = await response.json();

      console.log("Data: ", data)
  
    } catch (error) {
        setError(error.message);
        setLoading(false)
    }
      
      setLoading(false)
  
  }
    

    const submitUserRequest = (event) => {
        event.preventDefault();
        console.log("PackageName: ",{
            packageName: packageName,
            platformName: platformName
        })
      
        fetchProjectDependencies(packageName, platformName)
    }


    return (
        <div style={{textAlign: 'center'}}>
            <h1>Check Your Package</h1>
           <section>
                <h1>How can I help you?</h1>
                
                <form onSubmit={submitUserRequest} >
        <div>
          <div>
            <label htmlFor="name">Package Name</label>
            <input
              type="text"              
              placeholder="base62"           
              value={packageName}
              required
              onChange={(event) => setPackegeName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Platform</label>
            <input
              type="text"
              placeholder="NPM"
             
              value={platformName}
              required
              onChange={(event) => setPlatformName(event.target.value)}
            />
         </div>
            <div>
            <label htmlFor="name">Version</label>
            <input
              type="text"
              placeholder="0.2.2"
             
              value={packageVersion}
              onChange={(event) => setPackageVersion(event.target.value)}
            />
         </div>
          <div>
            <label htmlFor="name">API_KEY</label>
            <input
              type="text"
              placeholder="834944555kjkj"
             
              value={apiKey}
              onChange={(event) => setApiKey(event.target.value)}
            />
          </div>               
        </div>
        <div>
          <button>Submit</button>
        </div>
                </form>
        {loading ? <p>Loading</p> : null }
                {error ? <p>{error}</p> : null }
    </section>
        </div>
    )
}