import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, Image, View, SafeAreaView } from 'react-native';
import { useTheme } from './ThemeContext'; // Import du contexte de thème
import Ionicons from '@expo/vector-icons/Ionicons';
import SearchBar from '@/components/SearchBar';
import AddButton from '@/components/addButton';
import * as SplashScreen from 'expo-splash-screen';
import Toast from 'react-native-toast-message';

SplashScreen.preventAutoHideAsync();

const Index = () => {
    const { isDarkMode } = useTheme(); // Utilisation du contexte pour obtenir isDarkMode
    const [textInput, setTextInput] = React.useState<string>("Naoti");
    const [searchText, setSearchText] = React.useState('');

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
            <View style={styles.header}>
                <View style={styles.iconHeader}>
                    <Ionicons name="menu" size={22} color={isDarkMode ? '#fff' : '#000'} />
                    <Image style={styles.icon} source={require('../assets/images/ISPM.png')} />
                </View>
                <SearchBar
                    placeholder="Mitady naoty"
                    onChangeText={setSearchText}
                    value={searchText}
                    textColor={isDarkMode ? '#fff' : '#000'} // Dynamiser la couleur du texte
                    iconColor={isDarkMode ? '#fff' : '#000'} // Dynamiser la couleur de l'icône
                />
            </View>
            <View style={styles.body}>
                <Image style={styles.illustration} source={require('../assets/images/illustration.png')} />
                <View style={styles.textContainer}>
                    <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Tongasoa ianao !</Text>
                    <Text style={[styles.subtitle, { color: isDarkMode ? '#ccc' : '#333' }]}>
                        "Raiso ny hevitrao, alamino ny eritreritrao ary mijanona amin'ny famoronana mora hatrany."
                    </Text>
                </View>
            </View>
            <View style={styles.footer}>
                <AddButton />
            </View>
            <Toast />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    header: {
        flex: 1,
    },
    iconHeader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icon: {
        width: 30,
        height: 32,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 15,
        backgroundColor: '#E0DBF5',
    },
    searchIcon: {
        paddingHorizontal: 8,
    },
    searchBar: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
    },
    body: {
        flex: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    illustration: {
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        fontFamily: "Margarine",
        textAlign: "center",
    },
    subtitle: {
        width: 290,
        marginTop: 15,
        fontSize: 18,
        textAlign: "center",
        fontFamily: "Lato-Regular",
    },
    footer: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
    },
});

export default Index;
