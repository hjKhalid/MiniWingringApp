import { Image, StyleSheet, Platform } from 'react-native';

import LoginScreen from '../screen/LoginScreen';
import SignupScreen from '../screen/SignupScreen';
import GameFeedScreen from '../screen/GameFeedScreen';
import GameDetailScreen from '../screen/GameDetailScreen';
import GameDashboardScreen from '../screen/GameDashboardScreen';
// import { PaperProvider } from 'react-native-paper';

import { Button, IconButton, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TriviaGameScreen from '../screen/TriviaGameScreen';
import TicTacToeScreen from '../screen/TicTacToeScreen';
import MemoryMatchingGameScreen from '../screen/MemoryMatchingGameScreen';
import RockPaperScissorsScreen from '../screen/RockPaperScissorsScreen';
import { auth } from '../../firebase/firebase'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';

const Stack = createStackNavigator();


export default function HomeScreen({ navigation }: { navigation: any }) {
  const [userVerified, setUserVerified] = useState<any>();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUserVerified(uid)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [])
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserVerified(null);  // Update the state to trigger re-render
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  return (
    <>


      <PaperProvider>

        <Stack.Navigator initialRouteName="Login">


          {userVerified ? (
            <>

              <Stack.Screen name="GameFeed" component={GameFeedScreen} options={({ }) => ({
                headerRight: () => (
                  <IconButton
                    icon="logout"
                    onPress={handleLogout}
                  />
                ),
              })} />
              <Stack.Screen name="GameDetail" component={GameDetailScreen} />
              <Stack.Screen name="GameDashboard" component={GameDashboardScreen} />
              <Stack.Screen name="TriviaGame" component={TriviaGameScreen} />
              <Stack.Screen name="RockPaperScissors" component={RockPaperScissorsScreen} />
              <Stack.Screen name="TicTacToe" component={TicTacToeScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
            </>
          )}
        </Stack.Navigator>
        {/* </NavigationContainer> */}
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 278,
    width: 390,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
