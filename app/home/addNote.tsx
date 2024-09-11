import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../ThemeContext'; // Import du contexte de thème
import { Link, useRouter } from 'expo-router'; // Utilisation de useRouter pour rediriger
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useNotes } from '../NoteContext'; // Import du contexte des notes
import Toast from 'react-native-toast-message'; // Import du toast

export default function AddNote() {
    const { isDarkMode } = useTheme(); // Utilisation du contexte pour obtenir isDarkMode
    const { addNote } = useNotes(); // Fonction pour ajouter une note dans le contexte
    const router = useRouter(); // Utilisation du hook de navigation

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [fontsLoaded] = useFonts({
        'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
        'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    const handleSave = () => {
        if (title.trim() && content.trim()) {
            addNote({ title, content }); // Appel de la fonction addNote pour enregistrer la note
            setTitle('');
            setContent('');

            // Affichage du toast après l'enregistrement de la note
            Toast.show({
                type: 'success',
                text1: 'Note enregistrée avec succès !',
                position: 'bottom',
                visibilityTime: 2000,
            });

            router.push('/NotesGrid'); // Redirection vers la page de la grille des notes
        } else {
            alert('Veuillez entrer un titre et une note.');
        }
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
            <View style={styles.header}>
                <View style={styles.iconHeader}>
                    <Link href="/">
                        <Image style={styles.icon} source={require("../../assets/icons/Back.png")} />
                    </Link>
                    <TouchableOpacity onPress={handleSave}>
                        <Image style={styles.icon} source={require("../../assets/icons/Done.png")} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.body}>
                <TextInput
                    style={[styles.input, { color: isDarkMode ? '#fff' : '#000', borderColor: isDarkMode ? '#666' : '#ddd' }]}
                    placeholder="Lohateny naoty"
                    placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
                    value={title}
                    onChangeText={setTitle}
                />

                <TextInput
                    style={[styles.textArea, { color: isDarkMode ? '#fff' : '#000', borderColor: isDarkMode ? '#666' : '#ddd' }]}
                    placeholder="Ampidiro eto ny naoty"
                    placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
                    value={content}
                    onChangeText={setContent}
                    multiline
                    numberOfLines={4}
                />
            </View>
            {/* Composant Toast */}
            <Toast />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    header: {
        flex: 1,
    },
    body: {
        flex: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 30,
        height: 32,
    },
    iconHeader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    input: {
        height: 40,
        width: "100%",
        paddingHorizontal: 10,
        marginBottom: 12,
        fontSize: 24,
        fontWeight: "600",
        fontFamily: "Lato-Bold",
        borderBottomWidth: 1, // Ajouter une bordure en bas
    },
    textArea: {
        height: 100,
        width: "100%",
        marginTop: 20,
        paddingHorizontal: 10,
        marginBottom: 12,
        textAlignVertical: 'top', // Pour le texte aligné en haut
        fontSize: 18,
        fontFamily: "Lato-Regular",
        borderWidth: 1, // Ajouter une bordure
        borderRadius: 5, // Ajouter des coins arrondis
    },
});
