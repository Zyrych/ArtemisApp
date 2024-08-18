import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';

interface CustomPickerProps {
    selectedValue: string;
    onValueChange: (value: string) => void;
    options: string[];
}

const CustomPicker: React.FC<CustomPickerProps> = ({ selectedValue, onValueChange, options }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleSelect = (item: string) => {
        onValueChange(item);
        setIsVisible(false);
    };

    return (
        <>
            <TouchableOpacity
                style={styles.pickerButton}
                onPress={() => setIsVisible(true)}
            >
                <Text style={styles.pickerText}>{selectedValue}</Text>
                <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
            <Modal visible={isVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <FlatList
                            data={options}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.optionButton}
                                    onPress={() => handleSelect(item)}
                                >
                                    <Text style={styles.optionText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setIsVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    pickerButton: {
        backgroundColor: 'rgba(51, 53, 51, 1)',
        borderRadius: 25,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pickerText: {
        color: 'rgba(232, 237, 223, 0.5)',
    },
    changeText: {
        color: '#FFD700',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '80%',
    },
    optionButton: {
        padding: 15,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: '#FFD700',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
});

export default CustomPicker;
