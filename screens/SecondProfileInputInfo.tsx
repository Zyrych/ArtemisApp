import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const SecondProfileInputInfo = () => {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [bannerImage, setBannerImage] = useState<string | null>(null);

    const handleProfileImagePress = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
    };

    const handleBannerImagePress = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [2, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setBannerImage(result.assets[0].uri);
        }
    };

    const handleContinuePress = () => {
        // Implement logic to proceed with the selected images
        console.log('Continue');
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Complete your account</Text>
                <TouchableOpacity onPress={() => { /* Handle "Do it later" action */ }}>
                    <Text style={styles.linkText}>Do it later</Text>
                </TouchableOpacity>
            </View>

            <ImageSection
                image={profileImage}
                onPress={handleProfileImagePress}
                title="Profile Picture"
                description="Must be a .png or .jpg, with at least 100 x 100 pixel dimensions."
            />
            <BannerImageSection
                image={bannerImage}
                onPress={handleBannerImagePress}
            />

            <Text style={styles.bannerPictureTitle}>Banner Picture</Text>
            <Text style={styles.bannerPictureDesc}>Must be a .png or .jpg, with at least 380 x 180 pixel dimensions.</Text>
            <TouchableOpacity onPress={handleContinuePress} style={styles.continueButton}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const ImageSection = ({
    image,
    onPress,
    title,
    description,
}: {
    image: string | null;
    onPress: () => void;
    title: string;
    description: string;
}) => (
    <View style={styles.imageContainer}>
        <TouchableOpacity onPress={onPress} style={styles.imageButton}>
            {image ? (
                <Image source={{ uri: image }} style={styles.image} />
            ) : (
                <View style={styles.plusIcon}>
                    <Text style={styles.plusText}>+</Text>
                </View>
            )}
        </TouchableOpacity>
        <View style={styles.textContainer}>
            <Text style={styles.imageTitle}>{title}</Text>
            <Text style={styles.imageDescription}>{description}</Text>
        </View>
    </View>
);

const BannerImageSection = ({
    image,
    onPress
}: {
    image: string | null;
    onPress: () => void;
}) => (
    <View style={styles.bannerImageSection}>
        <TouchableOpacity onPress={onPress} style={styles.bannerImageButton}>
            {image ? (
                <Image source={{ uri: image }} style={styles.bannerImage} />
            ) : (
                <View style={styles.plusIcon}>
                    <Text style={styles.plusText}>+</Text>
                </View>
            )}
        </TouchableOpacity>
    </View>
);

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
        marginBottom: 10,
        marginTop: '2%',
    },
    linkText: {
        fontSize: 16,
        color: 'rgba(232, 237, 223, 0.6)',
        textDecorationLine: 'none',
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    bannerImageSection: {
        flexDirection: 'column',
        marginBottom: 20,
        width: '125%'
    },
    imageButton: {
        width: 150,
        height: 150,
        backgroundColor: '#333',
        borderRadius: 75,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
    bannerImageButton: {
        width: '80%',
        height: 180,
        backgroundColor: '#333',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 75,
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    plusIcon: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusText: {
        fontSize: 30,
        color: '#000',
    },
    textContainer: {
        flex: 1,
    },
    imageTitle: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 5,
    },
    imageDescription: {
        fontSize: 14,
        color: '#fff',
    },
    bannerPictureTitle: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 5,
    },
    bannerPictureDesc: {
        fontSize: 14,
        color: '#fff',
        marginBottom: '35%',
    },
    continueButton: {
        backgroundColor: '#FFD700',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
    },
    continueText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
});

export default SecondProfileInputInfo;
