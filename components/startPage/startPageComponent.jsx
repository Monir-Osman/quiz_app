import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import { styles } from "./startPageComponent.style";
import DropdownComponent from "../common/dropDown/dropdownComponent";
import { useState, useEffect } from "react";
import useFetch from "../../hook/useFetch";
import axios from "axios";

const difficulty = [
  { label: "Any Difficulty", value: "1" },
  { label: "Easy", value: "2" },
  { label: "Medium", value: "3" },
  { label: "Hard", value: "4" },
];

const StartPageComponent = () => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [difficultyLevel, setDifficultyLevel] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  //Get the Gategories
  useEffect(() => {
    async function getGategories() {
      const response = await fetch("https://opentdb.com/api_category.php");
      const data = await response.json();
      setCategories(data.trivia_categories);
    }
    getGategories();
  }, []);

  //Get the Data
  const fetchData = async (query) => {
    const options = {
      method: "GET",
      url: `https://opentdb.com/api.php`,
      params: { ...query },
    };
    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      setError(error);
      alert("There is an error");
    }
  };

  const handlePress = () => {
    if (difficultyLevel.toLowerCase() === "any difficulty") {
      fetchData({
        amount: 2,
        category: categoryId,
        type: "multiple",
      });
    } else {
      fetchData({
        amount: 2,
        category: categoryId,
        difficulty: difficultyLevel.toLowerCase(),
        type: "multiple",
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.categoryContainer}>
        <Text style={styles.text}>Select Category:</Text>
        <DropdownComponent
          categories={categories}
          setCategoryId={setCategoryId}
        />
      </View>

      <View style={styles.categoryContainer}>
        <Text style={styles.text}>Select Difficulty:</Text>
        <DropdownComponent
          difficulty={difficulty}
          setDifficultyLevel={setDifficultyLevel}
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StartPageComponent;
