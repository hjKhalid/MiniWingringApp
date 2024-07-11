// screens/TicTacToeScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Button, Title } from 'react-native-paper';

const TicTacToeScreen = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);

  const handlePress = (index: number) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  let status="";
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  const renderSquare = (index: number) => (
    <TouchableOpacity style={styles.square} onPress={() => handlePress(index)}>
      <Text style={styles.squareText}>{board[index]}</Text>
    </TouchableOpacity>
  );

  const handleRestart = () => {
    setBoard(initialBoard);
    setIsXNext(true);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Tic Tac Toe</Title>
      <View style={styles.board}>
        {Array(3)
          .fill(0)
          .map((_, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {Array(3)
                .fill(0)
                .map((_, colIndex) => renderSquare(rowIndex * 3 + colIndex))}
            </View>
          ))}
      </View>
      <Title style={styles.status}>{status}</Title>
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
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  squareText: {
    fontSize: 24,
  },
  status: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default TicTacToeScreen;
