// screens/SignupScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import ParallaxScrollView from '../../components/ParallaxScrollView';
import { auth } from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";




const SignupScreen = ({ navigation }: { navigation: any }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }


    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('../../assets/images/banner.jpeg')}
                    style={styles.reactLogo}
                />


            }>
            <View style={styles.container}>
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />
                <TextInput
                    label="Confirm Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />
                <Button mode="contained"
                    onPress={handleSignup}
                    style={styles.button}>
                    Sign Up
                </Button>
                <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
                    Already have an account? Login
                </Text>
            </View>
        </ParallaxScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        marginBottom: 10,
    },
    button: {
        marginVertical: 10,
    },
    link: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
    },
    reactLogo: {
        height: 278,
        width: 390,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});

export default SignupScreen;
