// screens/GameFeedScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
// import rockPapeImage from '../../assets/images/rockPape.jpg';

const games = [
    {
        id: '1', title: 'Rock Paper Scissor', description: `Overview:
Rock Paper Scissors is a classic hand game for two players. Each player simultaneously forms one of three shapes: rock, paper, or scissors.

Rules:

Rock crushes Scissors
Scissors cuts Paper
Paper covers Rock
Same shapes result in a tie

How to Play:
Players count down and reveal their shapes.
Compare shapes to determine the winner.
Repeat if there's a tie.

Features:

Interactive UI for selecting shapes
Real-time results
Score tracking for wins, losses, and ties
Play against a computer
Game reset option

Objective:

Win as many rounds as possible by choosing shapes that beat the opponent's choice. Enjoy the quick and fun gameplay of Rock Paper Scissors!`, image: require('../../assets/images/rockPape.jpg'), screenName: 'RockPaperScissors'
    },

    {
        id: '2', title: 'Memory Matching', description: `### Memory Matching Game Description

**Overview:**
Memory Matching is a fun and challenging game designed to test and improve your memory skills. The goal is to match pairs of cards by remembering their locations on the board.

**Rules:**
- A set of cards is laid out face down.
- Each card has a matching pair.
- Players flip over two cards at a time, trying to find matching pairs.
- If a match is found, the cards remain face up.
- If not, the cards are turned back over.

**How to Play:**
1. Tap any two cards to flip them over.
2. If the cards match, they stay face up.
3. If they don't match, they flip back over after a short delay.
4. Continue until all pairs are matched.

**Features:**
- Interactive UI for card selection
- Randomized card placement for each game
- Real-time feedback on matches and mismatches
- Score tracking to count pairs found
- Restart option to play again

**Objective:**
The objective is to find all matching pairs with the fewest number of tries, improving your memory and concentration skills while enjoying the game.`, image: require('../../assets/images/memoryMatching.jpeg'), screenName: 'MemoryMatchingGame'
    },

    {
        id: '3', title: 'Tic Tac Toe', description: `### Tic Tac Toe Game Description

**Overview:**
Tic Tac Toe is a classic two-player game where the objective is to be the first to form a horizontal, vertical, or diagonal line of three of your symbols (either X or O) on a 3x3 grid.

**Rules:**
- The game is played on a 3x3 grid.
- Players take turns placing their symbol (X or O) in an empty cell.
- The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins.
- If all nine cells are filled and no player has three in a row, the game is a tie.

**How to Play:**
1. The game starts with an empty 3x3 grid.
2. Player 1 (X) makes the first move by tapping an empty cell.
3. Player 2 (O) makes the next move by tapping an empty cell.
4. Players continue taking turns until one player wins or the game ends in a tie.

**Features:**
- Interactive UI for selecting cells
- Real-time feedback on moves and game status
- Option to play against another player or against the computer
- Reset option to start a new game

**Objective:**
The objective is to be the first player to get three of your symbols in a row while blocking your opponent's attempts to do the same. Enjoy this quick and strategic game of Tic Tac Toe!`, image: require('../../assets/images/ticTacToe.png'), screenName: 'TicTacToe'
    },
    {
        id: '4', title: 'Trivia Quiz Game', description: `### Trivia Quiz Game Description

**Overview:**
Trivia Quiz is an engaging and educational game where players answer a series of questions from various categories to test their knowledge. The goal is to score as many points as possible by correctly answering the questions.

**Rules:**
- Players are presented with multiple-choice questions.
- Each question has a set time limit to answer.
- Points are awarded for each correct answer.
- No points are deducted for incorrect answers.

**How to Play:**
1. Start the game to receive your first question.
2. Select the correct answer from the multiple-choice options.
3. Receive immediate feedback on whether your answer is correct.
4. Continue to the next question and repeat until the quiz is complete.
5. View your final score at the end of the quiz.

**Features:**
- Wide range of question categories (e.g., history, science, pop culture)
- Multiple-choice format for easy interaction
- Timer for each question to add excitement
- Score tracking to keep record of correct answers
- Option to restart the quiz and try again

**Objective:**
The objective is to answer as many questions correctly as possible to achieve a high score. Challenge your knowledge and enjoy learning new facts with the Trivia Quiz game!`, image: require('../../assets/images/quiz.jpg'), screenName: 'TriviaGame'
    },

    // Add more games as needed
];

const GameFeedScreen = ({ navigation }: { navigation: any }) => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState(games.slice(0, 5));

    useEffect(() => {
        setData(games.slice(0, page * 5)); // Load 5 games per page
    }, [page]);

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    const renderGame = ({ item }: { item: any }) => (


        <Card style={styles.card}>
            <Card.Cover source={item.image} />
            <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>{`${item.description.substring(0, 150)}...Read more`}</Paragraph>
                <Button mode="contained" onPress={() => navigation.navigate('GameDetail', { game: item })}>
                    View Details
                </Button>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderGame}
                keyExtractor={item => item.id}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    card: {
        marginBottom: 10,
    },
});

export default GameFeedScreen;
