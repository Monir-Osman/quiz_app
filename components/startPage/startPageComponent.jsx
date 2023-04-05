import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./startPageComponent.style";
import DropdownComponent from "../common/dropDown/dropdownComponent";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "expo-router";
import { StateContext } from "../../context/useContext";

const difficulty = [
  { label: "Any Difficulty", value: "1" },
  { label: "Easy", value: "2" },
  { label: "Medium", value: "3" },
  { label: "Hard", value: "4" },
];

const StartPageComponent = () => {
  const { categoryId, difficultyLevel, setCategoryId, setDifficultyLevel } =
    useContext(StateContext);
  const router = useRouter();
  const [categories, setCategories] = useState([]);

  //Get the Gategories
  useEffect(() => {
    async function getGategories() {
      const response = await fetch("https://opentdb.com/api_category.php");
      const data = await response.json();
      setCategories(data.trivia_categories);
    }
    getGategories();
  }, []);

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
        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/question")}
        >
          <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StartPageComponent;
