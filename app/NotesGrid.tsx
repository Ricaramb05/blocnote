import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useTheme } from './ThemeContext';
import { useNotes } from './NoteContext'; // Utiliser le context des notes

const NotesGrid = () => {
    const { isDarkMode } = useTheme();
    const { notes } = useNotes(); // Récupérer les notes sauvegardées

    const renderNote = ({ item }: { item: { title: string; content: string } }) => (
        <View style={[styles.note, { backgroundColor: getRandomColor() }]}>
            <Text style={[styles.noteTitle, { color: isDarkMode ? '#fff' : '#000' }]}>{item.title}</Text>
            <Text style={[styles.noteContent, { color: isDarkMode ? '#ccc' : '#333' }]}>{item.content}</Text>
        </View>
    );

    const getRandomColor = () => {
        const colors = ['#FFDDC1', '#FFABAB', '#FFC3A0', '#B9FBC0', '#C2E9FB', '#E2C2FB'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
            <FlatList
                data={notes}
                renderItem={renderNote}
                keyExtractor={(item) => item.title}
                numColumns={2} // Nombre de colonnes pour l'affichage en grille
                columnWrapperStyle={styles.row} // Style pour espacer les colonnes
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    row: {
        justifyContent: 'space-between',
    },
    note: {
        flex: 1,
        margin: 10,
        padding: 15,
        borderRadius: 10,
        minHeight: 100,
    },
    noteTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    noteContent: {
        marginTop: 5,
        fontSize: 14,
    },
});

export default NotesGrid;
