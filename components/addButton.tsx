// components/AddButton.js
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const AddButton = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Link style={styles.iconAdd} href={"/home/addNote"}>
                <Image
                    source={require('../assets/icons/add.png')} // Chemin vers l'image de l'icône
                    style={styles.icon}
                />
            </Link>
        </TouchableOpacity>
    );
    };

    const styles = StyleSheet.create({
    button: {
        width : 60,
        height : 60,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007BFF', // Couleur de fond du bouton
        borderRadius: 50, // Arrondir les coins du bouton
    },
    icon: {
        width: 24, // Taille de l'icône
        height: 24, // Taille de l'icône
        borderColor: 'red',
        borderWidth: 1
    },
    iconAdd : {
        flex: 1
    }
});

export default AddButton;
