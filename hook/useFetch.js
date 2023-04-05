import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { StateContext } from "../context/useContext";

// amount=10&category=9&difficulty=easy
const useFetch = (query) => {
  const { setData } = useContext(StateContext);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://opentdb.com/api.php?amount=2&type=multiple`,
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

  return { error, refetch, fetchData };
};

export default useFetch;
