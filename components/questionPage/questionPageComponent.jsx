import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  ActivityIndicator,
  Image,
  Modal,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { styles } from "./questionPage.style";
import { StateContext } from "../../context/useContext";
import axios from "axios";
import { COLORS, icons } from "../../constants";
import { useRouter } from "expo-router";

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
  const [isSelected, setIsSelected] = useState(false);
  const [currentSelectedItem, setCurrentSelectedItem] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [disbleSelect, setDisableSelect] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [score, setScore] = useState(0);
  const router = useRouter();

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
      url: `https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986`,
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
      setCorrectAnswer(response.data.results[currentQuestion]?.correct_answer);

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
    setCurrentQuestion(() => 0);
  }, [categoryId, difficultyLevel]);

  const handlePressNext = () => {
    setIsAnswered(false);
    setCurrentQuestion(() => currentQuestion + 1);
    const arr = [
      ...data[currentQuestion + 1]?.incorrect_answers,
      data[currentQuestion + 1]?.correct_answer,
    ];
    shuffleArray(arr);
    setAnswers(arr);
    setCorrectAnswer(data[currentQuestion + 1]?.correct_answer);
    setDisableSelect(false);
  };

  const handleSelect = (answer) => {
    if (answer === data[currentQuestion].correct_answer) {
      setIsAnswered(true);
      setCurrentSelectedItem(answer);
      setCorrectAnswer(answer);
      setDisableSelect(true);
      setScore(score + 10);
    } else {
      setIsAnswered(true);
      setCurrentSelectedItem(answer);
      setDisableSelect(true);
    }
  };

  const handleSeeResult = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.secondary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <View>
          <Text style={styles.headerText}>
            Question {currentQuestion + 1} / 10
          </Text>
          <View>
            <Text style={styles.questionText}>
              {decodeURIComponent(data[currentQuestion]?.question)}
            </Text>
          </View>
          <View>
            {answers?.map((answer, index) => (
              <TouchableOpacity
                key={index}
                style={styles.btnAnswer(answer, currentSelectedItem)}
                onPress={() => (!disbleSelect ? handleSelect(answer) : null)}
              >
                <View style={styles.answersContainer}>
                  <View style={styles.indexContainer}>
                    <Text style={styles.index}>{index + 1}</Text>
                  </View>
                  <Text style={styles.btnAnswerText}>
                    {decodeURIComponent(answer)}
                  </Text>
                  <View style={styles.imgCon}>
                    {isAnswered ? (
                      <Image
                        source={
                          answer === correctAnswer ? icons.right : icons.wrong
                        }
                        style={styles.img}
                        resizeMode="contain"
                      />
                    ) : null}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.btnNextContainer}>
            {currentQuestion > 8 ? (
              <Pressable
                style={styles.btnNext(isAnswered)}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.btnNextText}>See The Result</Text>
              </Pressable>
            ) : (
              <Pressable
                style={styles.btnNext(isAnswered)}
                onPress={isAnswered ? handlePressNext : null}
              >
                <Text style={styles.btnNextText}>Next</Text>
              </Pressable>
            )}
          </View>
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Your Score!</Text>
            <Text style={styles.modalScoreNum}>{score} / 100</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                router.back();
              }}
            >
              <Text style={styles.textStyle}>Play Again</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default QuestionPageComponent;
