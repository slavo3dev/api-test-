import { useCallback, useEffect, useState } from "react";
import { ProjectList } from "../components/ProjectList";

export default function PlatformList() {
  const [platformList, setPlatformList] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlatforms = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://libraries.io/api/platforms?api_key=${process.env.API_KEY}`,
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setPlatformList(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPlatforms();
  }, [fetchPlatforms]);

  // List of all platforms
  const platfromNameList =
    platformList.length > 0 ? (
      platformList.map((platformList) => (
        <ProjectList
          key={platformList.project_count}
          homepage={platformList.homepage}
          name={platformList.name}
          default_language={platformList.default_language}
        />
      ))
    ) : (
      <p>"List is empty"</p>
    );

  console.log("Data: ", platformList);

  return (
    <div>
      <h1>Platform List</h1>
      {loading ? "List is loading...." : <ul>{platfromNameList}</ul>}
    </div>
  );
}
