// screens/TriviaGameScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card, RadioButton } from 'react-native-paper';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Jane Austen"],
    correctAnswer: "Harper Lee",
  },
  // Add more questions as needed
];

const TriviaGameScreen = ({ navigation }: { navigation: any }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      setGameOver(true);
    }
  };

  if (gameOver) {
    return (
      <View style={styles.container}>
        <Text style={styles.scoreText}>Your Score: {score}</Text>
        <Button mode="contained" onPress={() => navigation.navigate('GameFeed')}>
          Back to Game Feed
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Text style={styles.questionText}>
            {questions[currentQuestion].question}
          </Text>
          {questions[currentQuestion].options.map((option, index) => (
            <RadioButton.Item
              key={index}
              label={option}
              value={option}
              status={selectedOption === option ? 'checked' : 'unchecked'}
              onPress={() => setSelectedOption(option)}
            />
          ))}
          <Button
            mode="contained"
            onPress={handleNextQuestion}
            disabled={!selectedOption}
            style={styles.button}
          >
            Next
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  scoreText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default TriviaGameScreen;
