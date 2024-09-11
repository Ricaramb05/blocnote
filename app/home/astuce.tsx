import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useTheme } from '../ThemeContext'; // Import du contexte de thème

export default function Astuce() {
    const { isDarkMode } = useTheme(); // Utilisation du contexte pour obtenir isDarkMode

    const [fontsLoaded] = useFonts({
        'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
        'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
        'Lato-Light': require('../../assets/fonts/Lato-Light.ttf'),
        'Margarine': require('../../assets/fonts/Margarine-Regular.ttf')
    });
    
    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    
    if (!fontsLoaded) {
        return null; // ou un indicateur de chargement
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Link style={styles.iconBack} href={"/"}>
                        <Image 
                            style={styles.icon} 
                            source={require("../../assets/icons/Back.png")} 
                        />
                    </Link>
                </TouchableOpacity>
            </View> 
            <View style={styles.astuce}>
                <Text style={[styles.titre, { color: isDarkMode ? '#fff' : '#000' }]}>Torohevitra</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.contenu}>
                    <Text style={[styles.subtitle, { color: isDarkMode ? '#fff' : '#000' }]}>Famoronana naoty</Text>
                    <Text style={[styles.paragraphe, { color: isDarkMode ? '#ccc' : '#333' }]}>Ampiasao ny bokotra "+" eo amin'ny efijery an-trano mba hamoronana naoty vaovao haingana. Afaka manampy lahatsoratra ianao.</Text>
                </View>
                <View style={styles.contenu}>
                    <Text style={[styles.subtitle, { color: isDarkMode ? '#fff' : '#000' }]}>Fitadiavana naoty manokana</Text>
                    <Text style={[styles.paragraphe, { color: isDarkMode ? '#ccc' : '#333' }]}>Ampiasao ny bara fitadiavana eo an-tampon'ny efijery hahitanao naoty avy hatrany amin'ny fanoratana teny fanalahidy.</Text>
                </View>
            </View>
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
        justifyContent: "center",
        alignItems: "flex-start",
    },
    astuce: {
        flex: 2,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    body: {
        flex: 10,
        alignItems: "center",
    },
    icon: {
        width: 30,
        height: 32,
    },
    contenu: {
        marginVertical: 15,
        alignItems: "flex-start",
        width: "100%",
    },
    titre: {
        fontSize: 40,
        fontWeight: '600',
        fontFamily: "Lato-Bold",
    },
    subtitle: {
        fontSize: 24,
        fontFamily: "Lato-Bold",
        fontWeight: '600',
    },
    paragraphe: {
        fontSize: 18,
        fontFamily: "Lato-Regular",
        marginTop: 10,
    },
    iconBack: {
        flex: 1,
    }
});
