import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { styles } from "./questionPage.style";
import { StateContext } from "../../context/useContext";
import axios from "axios";
import { COLORS } from "../../constants";

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
const QuestionPageComponent = () => {
  const [answers, setAnswers] = useState([1, 2, 3, 4]);
  const [data, setData] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    categoryId,
    setCategoryId,
    difficultyLevel,
    setDifficultyLevel,
    error,
    setError,
  } = useContext(StateContext);

  const fetchData = async (query) => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: `https://opentdb.com/api.php?amount=2&type=multiple&encode=url3986`,
      params: { ...query },
    };
    try {
      const response = await axios.request(options);
      setData(response.data.results);
      const arr = [
        ...response.data.results[currentQuestion]?.incorrect_answers,
        response.data.results[currentQuestion]?.correct_answer,
      ];
      shuffleArray(arr);
      setAnswers(arr);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!difficultyLevel && !categoryId) {
      fetchData();
    } else if (difficultyLevel === "Any Difficulty" || !difficultyLevel) {
      fetchData({
        category: categoryId,
      });
    } else if (!categoryId && difficultyLevel) {
      fetchData({
        difficulty: difficultyLevel.toLowerCase(),
      });
    } else if (difficultyLevel !== "Any Difficulty" && categoryId) {
      fetchData({
        category: categoryId,
        difficulty: difficultyLevel.toLowerCase(),
      });
    }
  }, [categoryId, difficultyLevel]);

  const handlePress = () => {
    setIsAnswered(true);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSelect = (answer) => {
    if (answer === data[currentQuestion].correct_answer) {
      console.log(true);
    } else {
      console.log(false);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.secondary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <View>
          <Text style={styles.headerText}>Question {currentQuestion + 1}</Text>
          <View>
            <Text style={styles.questionText}>
              {decodeURIComponent(data[currentQuestion]?.question)}
            </Text>
          </View>
          <View>
            {answers.map((answer, index) => (
              <TouchableOpacity
                key={index}
                style={styles.btnAnswer}
                onPress={() => handleSelect(answer)}
              >
                <View style={styles.answersContainer}>
                  <View style={styles.indexContainer}>
                    <Text style={styles.index}>{index + 1}</Text>
                  </View>
                  <Text style={styles.btnAnswerText}>
                    {decodeURIComponent(answer)}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.btnNextContainer}>
            <Pressable style={styles.btnNext(isAnswered)} onPress={handlePress}>
              <Text style={styles.btnNextText}>Next</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default QuestionPageComponent;
