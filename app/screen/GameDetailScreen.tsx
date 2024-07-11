// screens/GameDetailScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const GameDetailScreen = ({ route, navigation }: { route: any, navigation: any }) => {
  const { game } = route.params;
  console.log(game.screenName);
  var detailsDescription = game.description
  var sub = detailsDescription.substring(0, 150)

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Cover source={game.image} />
        <Card.Content>
          <Title>{game.title}</Title>
          <Paragraph>
            {game.description}
            {/* {sub} */}
          </Paragraph>
          <Button mode="contained" onPress={() => navigation.navigate('GameDashboard', { game })}>
            Join
          </Button>
          <Button style={styles.button} mode="contained" onPress={() => navigation.navigate(game.screenName)}>
            Play {game.title}
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    // margin:1,
  },
  button: {
    margin: 4
  }

});

export default GameDetailScreen;
