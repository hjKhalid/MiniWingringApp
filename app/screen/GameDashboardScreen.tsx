// screens/GameDashboardScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Text, Button } from 'react-native-paper';
import { Pedometer } from 'expo-sensors';
import { ScrollView } from 'react-native-gesture-handler';

const GameDashboardScreen = ({ route }: { route: any }) => {
  const { game } = route.params;
  const [steps, setSteps] = useState<number>(0);

  useEffect(() => {
    const subscription = Pedometer.watchStepCount(result => {
      setSteps(result.steps);
    });

    return () => subscription && subscription.remove();
  }, []);

  return (
    <ScrollView style={styles.container} >
      {/* <Text>Welcome to the Game Dashboard!</Text> */}
     
      <Card>
        <Card.Content>
          <Title>{game.title}</Title>
          <Paragraph>{game.description}</Paragraph>
          <Paragraph>Steps: {steps}</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default GameDashboardScreen;
