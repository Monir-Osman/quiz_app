import { useState, useEffect } from "react";
import axios from "axios";

// amount=10&category=9&difficulty=easy
const useFetch = (query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://opentdb.com/api.php/`,
    params: { ...query },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      setError(error);
      alert("There is an error");
    }
  };

  const refetch = () => {
    fetchData();
  };

  return { data, error, refetch, fetchData };
};

export default useFetch;
