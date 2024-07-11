// screens/RockPaperScissorsScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';

const RockPaperScissorsScreen = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState('');

  const getResult = (player, computer) => {
    if (player === computer) return 'It\'s a tie!';
    if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      return 'You win!';
    }
    return 'You lose!';
  };

  const handlePress = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setResult(getResult(choice, computerChoice));
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Rock Paper Scissors</Title>
      <View style={styles.choicesContainer}>
        {choices.map(choice => (
          <Button
            key={choice}
            mode="contained"
            onPress={() => handlePress(choice)}
            style={styles.choiceButton}
          >
            {choice}
          </Button>
        ))}
      </View>
      {playerChoice && computerChoice && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>You chose: {playerChoice}</Text>
          <Text style={styles.resultText}>Computer chose: {computerChoice}</Text>
          <Title style={styles.resultTitle}>{result}</Title>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  choicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  choiceButton: {
    width: '30%',
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
  },
  resultTitle: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default RockPaperScissorsScreen;
