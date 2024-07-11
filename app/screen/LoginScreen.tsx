// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { auth } from '../../firebase/firebase';
import ParallaxScrollView from '../../components/ParallaxScrollView';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// import { Image } from 'react-native-reanimated/lib/typescript/Animated';

const LoginScreen = ({ navigation }: { navigation: any }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [user, setUser] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleLogin = () => {
        // const auth = getAuth();
        setLoading(true)

        signInWithEmailAndPassword(auth, email, password)

            .then(() => {
                setLoading(false)
                setUser("LoginUser")

                navigation.navigate('GameFeed');

            })
            .catch((error) => { alert(error.message), setLoading(false) });

    };

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
                <Button mode="contained"
                    onPress={handleLogin}
                    style={styles.button}
                    loading={loading}
                >
                    Login
                </Button>
                <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
                    Don't have an account? Sign Up
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
        // backgroundColor: "b"
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

export default LoginScreen;
