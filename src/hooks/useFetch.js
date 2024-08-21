import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

  const fetchData = async () => {
    setLoading(true);
    setError(null); 
    try {
      const response = await axios.get(endpoint);
      setData(response.data.results); 
    } catch (err) {
      setError(err); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]); 

  return { data, loading, error }; 
};

export default useFetch;
