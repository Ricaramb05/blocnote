import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Définition des types des props
type SearchBarProps = {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
    textColor: string;
    iconColor: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onChangeText, value, textColor, iconColor }) => {
    return (
        <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color={iconColor} style={styles.searchIcon} />
            <TextInput
                style={[styles.searchBar, { color: textColor }]} // Appliquer la couleur du texte
                placeholder={placeholder} // Utilisation du placeholder
                placeholderTextColor={iconColor} // Dynamiser la couleur du placeholder
                onChangeText={onChangeText} // Appel de la fonction onChangeText
                value={value} // Valeur du champ texte
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 15,
        backgroundColor: '#E0DBF5', // Couleur de fond de la barre de recherche
    },
    searchIcon: {
        paddingHorizontal: 8,
    },
    searchBar: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
    },
});

export default SearchBar;
