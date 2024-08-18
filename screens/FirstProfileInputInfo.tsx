import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type FirstProfileInputInfoNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'SecondProfileInputInfo'
>;

const FirstProfileInputInfo = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [bio, setBio] = useState('');
    const [country, setCountry] = useState('');

    // Get navigation object
    const navigation = useNavigation<FirstProfileInputInfoNavigationProp>();

    const handleContinue = () => {
        // Navigate to the SecondProfileInputInfo screen
        navigation.navigate('SecondProfileInputInfo');
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Complete your account</Text>
                <TouchableOpacity onPress={() => { /* Handle "Do it later" action */ }}>
                    <Text style={styles.linkText}>Do it later</Text>
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#888"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor="#888"
                value={firstName}
                onChangeText={setFirstName}
            />

            <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor="#888"
                value={lastName}
                onChangeText={setLastName}
            />

            <View style={styles.inputRow}>
                <View style={styles.pickerWrapper}>
                    <Picker
                        selectedValue={gender}
                        onValueChange={(itemValue) => setGender(itemValue)}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                    >
                        <Picker.Item label="Select Gender" value="" />
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Non-Binary" value="Non-Binary" />
                        <Picker.Item label="Other" value="Other" />
                        <Picker.Item label="Prefer not to say" value="Prefer not to say" />
                    </Picker>
                </View>
                <TextInput
                    style={styles.inputSmall}
                    placeholder="Age"
                    placeholderTextColor="#888"
                    value={age}
                    onChangeText={setAge}
                    keyboardType="numeric"
                />
            </View>

            <TextInput
                style={styles.bioInput}
                placeholder="Bio"
                placeholderTextColor="#888"
                value={bio}
                onChangeText={setBio}
                multiline
            />

            <View style={styles.countryPickerWrapper}>
                <Picker
                    selectedValue={country}
                    onValueChange={(itemValue) => setCountry(itemValue)}
                    style={styles.countryPicker}
                >
                    <Picker.Item label="Select Country" value="" />
                    <Picker.Item label="United States" value="US" />
                    <Picker.Item label="Canada" value="CA" />
                    <Picker.Item label="United Kingdom" value="UK" />
                    <Picker.Item label="Australia" value="AU" />
                    {/* Add more countries as needed */}
                </Picker>
            </View>

            <Text style={styles.requiredText}>* Required Information</Text>

            <TouchableOpacity style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(36, 36, 35, 1)',
        padding: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: '30%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    linkText: {
        fontSize: 16,
        color: 'rgba(232, 237, 223, 0.6)',
        textDecorationLine: 'none',
    },
    input: {
        backgroundColor: 'rgba(51, 53, 51, 1)',
        color: 'white',
        padding: 15,
        borderRadius: 30,
        marginBottom: 10,
    },
    bioInput: {
        backgroundColor: 'rgba(51, 53, 51, 1)',
        color: 'white',
        padding: 15,
        borderRadius: 30,
        marginBottom: 10,
        height: '20%', // Adjusted height for the Bio field
        textAlignVertical: 'top', // Align text to the top
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    inputSmall: {
        flex: 0.3,
        backgroundColor: 'rgba(51, 53, 51, 1)',
        color: 'white',
        padding: 15,
        borderRadius: 30,
    },
    pickerWrapper: {
        flex: 0.7,
        backgroundColor: 'rgba(51, 53, 51, 1)',
        borderRadius: 30,
        marginRight: '1%',
        overflow: 'hidden',
    },
    countryPickerWrapper: {
        backgroundColor: 'rgba(51, 53, 51, 1)',
        borderRadius: 30,
        marginBottom: 10,
        overflow: 'hidden',
    },
    picker: {
        color: '#888',
    },
    countryPicker: {
        color: '#888',
    },
    pickerItem: {
        color: '#888',
    },
    requiredText: {
        color: 'rgba(232, 237, 223, 0.4)',
        marginBottom: '2%',
        marginTop: '15%',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#FFD700',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: '#121212',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default FirstProfileInputInfo;
