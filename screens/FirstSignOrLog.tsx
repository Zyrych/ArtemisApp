import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons'; // For Meta, Discord, and Email icons
import { Ionicons } from '@expo/vector-icons'; // For Google icon, if using Expo

type FirstSignOrLogNavigationProp = NativeStackNavigationProp<RootStackParamList, 'FirstSignOrLog'>;

const FirstSignOrLog = () => {
  const navigation = useNavigation<FirstSignOrLogNavigationProp>();

  return (
    <ImageBackground
      source={require('../assets/welcomeScreenBackground.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Discover a new way of socializing</Text>
        <Text style={styles.subtitle}>Explore the "Name of the community" community</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LanguageInputInfo')}>
          <Ionicons name="logo-google" size={24} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Sign Up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LanguageInputInfo')}>
          <FontAwesome name="facebook" size={24} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Sign Up with Meta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LanguageInputInfo')}>
          <MaterialIcons name="discord" size={24} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Sign Up with Discord</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LanguageInputInfo')}>
          <Feather name="mail" size={24} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Sign Up with Email</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Already on Artemis?
          <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}> Login</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: '1%',
    marginTop: '30%',
    color: 'rgba(234, 237, 223, 1)',
    width: '75%',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(232, 237, 223, 0.7)',
    width: '50%',
    paddingBottom: '70%',
  },
  button: {
    backgroundColor: 'rgba(232, 237, 223, 0.2)',
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
  loginText: {
    fontSize: 14,
    color: 'rgb(118, 126, 120)',
  },
  loginLink: {
    color: 'rgb(228, 233, 219)',
    fontWeight: 'bold',
  },
});

export default FirstSignOrLog;
