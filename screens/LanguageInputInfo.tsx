import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomPicker from './components/CustomPicker'; // Assuming CustomPicker is in the same directory

type LanguageInputInfoNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LanguageInputInfo'>;

const LanguageInputInfo = () => {
    const navigation = useNavigation<LanguageInputInfoNavigationProp>();
    const [mainLanguage, setMainLanguage] = useState('English (US)');
    const [otherLanguages, setOtherLanguages] = useState<string[]>([]);

    const languages = [
        'English (US)',
        'Spanish',
        'French',
        'German',
        'Italian',
        'Portuguese',
        'Russian',
        'Chinese',
        'Japanese',
        'Korean',
        // Add more languages here
    ];

    const handleOtherLanguagesChange = (newLanguage: string) => {
        if (otherLanguages.length < 2) {
            setOtherLanguages([...otherLanguages, newLanguage]);
        } else {
            // Overwrite the first or second language based on the array length
            setOtherLanguages([otherLanguages[1], newLanguage]);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Choose the languages</Text>
                <TouchableOpacity onPress={() => { /* Handle "Do it later" action */ }}>
                    <Text style={styles.linkText}>Do it later</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.subtitle}>Main Language</Text>
            <View style={styles.pickerWrapper}>
                <CustomPicker
                    selectedValue={mainLanguage}
                    onValueChange={setMainLanguage}
                    options={languages}
                />
            </View>
            <Text style={styles.subtitle}>Other Languages</Text>
            <View style={styles.pickerWrapper}>
                <CustomPicker
                    selectedValue={otherLanguages.length > 0 ? otherLanguages.join(', ') : 'Select a language'}
                    onValueChange={handleOtherLanguagesChange}
                    options={languages.filter((lang) => !otherLanguages.includes(lang))}
                />
            </View>

            <Text style={styles.reqInfoText}>* Required Information</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FirstProfileInputInfo')}>
                <Text style={styles.buttonText}>Sign Up</Text>
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
        fontSize: 16,
        color: '#fff',
    },
    linkText: {
        fontSize: 16,
        color: 'rgba(232, 237, 223, 0.6)',
        textDecorationLine: 'none',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(232, 237, 223, 1)',
        marginBottom: '5%',
    },
    pickerWrapper: {
        backgroundColor: 'rgba(51, 53, 51, 1)', // Background color of the picker
        borderRadius: 25,
        marginBottom: 20,
        padding: 10,
    },
    reqInfoText: {
        textAlign: 'center',
        color: 'rgba(232, 237, 223, 0.4)',
        marginBottom: '2%',
        marginTop: '80%',
    },
    button: {
        backgroundColor: '#FFD700',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default LanguageInputInfo;
