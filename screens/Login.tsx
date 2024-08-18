import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
    const navigation = useNavigation<LoginNavigationProp>();
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('LanguageInputInfo');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Get Back Where You Were</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LanguageInputInfo')}>
                <Ionicons name="logo-google" size={24} color="white" style={styles.icon} />
                <Text style={styles.buttonText}>Login with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LanguageInputInfo')}>
                <FontAwesome name="facebook" size={24} color="white" style={styles.icon} />
                <Text style={styles.buttonText}>Login with Meta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LanguageInputInfo')}>
                <MaterialIcons name="discord" size={24} color="white" style={styles.icon} />
                <Text style={styles.buttonText}>Login with Discord</Text>
            </TouchableOpacity>

            <Text style={styles.subtitle}>Or Login with your Email</Text>

            <TextInput
                style={styles.input}
                placeholder="Username or Email"
                placeholderTextColor="#888"
                value={usernameOrEmail}
                onChangeText={setUsernameOrEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#888"
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(36, 36, 35, 1)',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '5%',
        marginTop: '30%',
        marginRight: '25%',
        color: 'rgba(234, 237, 223, 1)',
        width: '45%',
        textAlign: 'left',
    },
    button: {
        backgroundColor: 'rgba(51, 53, 51, 1)',
        padding: 16,
        borderRadius: 30,
        marginBottom: 16,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: 'rgba(232, 237, 223, 1)',
        fontSize: 16,
        textAlign: 'center',
    },
    icon: {
        marginRight: '5%',
        marginLeft: '15%',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(234, 237, 223, 1)',
        width: '45%',
        marginRight: '20%',
        marginTop: '20%',
        marginBottom: '5%',
    },
    input: {
        backgroundColor: 'rgba(51, 53, 51, 1)',
        color: 'white',
        padding: 15,
        borderRadius: 30,
        marginBottom: 10,
        width: '80%',
    },
    loginButton: {
        backgroundColor: '#FFD700',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        width: '80%',
        marginTop: '15%',
    },
    loginButtonText: {
        color: '#121212',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Login;
