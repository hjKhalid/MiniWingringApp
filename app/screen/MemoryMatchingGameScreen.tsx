import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Title, Button } from 'react-native-paper';

interface Card {
  id: number;
  value: number;
  isRevealed: boolean;
  isMatched: boolean;
}

const MemoryMatchingGameScreen = () => {
  const initialBoard: Card[] = Array(12)
    .fill(null)
    .map((_, index) => ({
      id: index,
      value: Math.floor(index / 2),
      isRevealed: false,
      isMatched: false,
    }))
    .sort(() => Math.random() - 0.5);

  const [board, setBoard] = useState<Card[]>(initialBoard);
  const [firstPick, setFirstPick] = useState<Card | null>(null);
  const [secondPick, setSecondPick] = useState<Card | null>(null);

  useEffect(() => {
    if (firstPick && secondPick) {
      if (firstPick.value === secondPick.value) {
        setBoard(prevBoard =>
          prevBoard.map(card =>
            card.id === firstPick.id || card.id === secondPick.id
              ? { ...card, isMatched: true }
              : card
          )
        );
      } else {
        setTimeout(() => {
          setBoard(prevBoard =>
            prevBoard.map(card =>
              card.id === firstPick.id || card.id === secondPick.id
                ? { ...card, isRevealed: false }
                : card
            )
          );
        }, 1000);
      }
      setFirstPick(null);
      setSecondPick(null);
    }
  }, [secondPick]);

  const handleCardPress = (card: Card) => {
    if (firstPick && secondPick) return;

    const updatedCard = { ...card, isRevealed: true };
    setBoard(prevBoard =>
      prevBoard.map(c => (c.id === card.id ? updatedCard : c))
    );

    if (!firstPick) {
      setFirstPick(updatedCard);
    } else if (firstPick.id !== card.id) {
      setSecondPick(updatedCard);
    }
  };

  const handleRestart = () => {
    const newBoard = initialBoard.map(card => ({
      ...card,
      isRevealed: false,
      isMatched: false,
    })).sort(() => Math.random() - 0.5);
    setBoard(newBoard);
    setFirstPick(null);
    setSecondPick(null);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Memory Matching Game</Title>
      <View style={styles.board}>
        {board.map(card => (
          <TouchableOpacity
            key={card.id}
            style={[styles.card, card.isRevealed ? styles.revealed : {}]}
            onPress={() => handleCardPress(card)}
          >
            {card.isRevealed || card.isMatched ? (
              <Text style={styles.cardText}>{card.value}</Text>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
      <Button mode="contained" onPress={handleRestart} style={styles.button}>
        Restart
      </Button>
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
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-around',
  },
  card: {
    width: '30%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    margin: 5,
  },
  revealed: {
    backgroundColor: '#fff',
  },
  cardText: {
    fontSize: 24,
  },
  button: {
    marginTop: 20,
  },
});

export default MemoryMatchingGameScreen;
