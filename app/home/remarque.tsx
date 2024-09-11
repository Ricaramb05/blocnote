import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useTheme } from '../ThemeContext'; // Assurez-vous d'importer correctement

export default function Astuce() {
    const { isDarkMode } = useTheme(); // Utilisation du contexte pour obtenir le mode sombre

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
                        <Image style={styles.icon} source={require("../../assets/icons/Back.png")} />
                    </Link>
                </TouchableOpacity>
            </View> 
            <View style={styles.astuce}>
                <Text style={[styles.titre, { color: isDarkMode ? '#fff' : '#000' }]}>Fanamarihana manokana</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.contenu}>
                    <Image source={require("../../assets/images/ISPM.png")} style={styles.image} />
                    <Text style={[styles.ecole, { color: isDarkMode ? '#ddd' : '#333' }]}>INSTITUT SUPERIEUR POLYTECHNIQUE DE MADAGASCAR</Text>
                </View>
                <View style={styles.mention}>
                    <Text style={[styles.paragraphe, { color: isDarkMode ? '#ddd' : '#333' }]}>
                        Ity fampiharana ity dia novolavolaina ao anatin'ny tetikasan'ny oniversite ao amin'ny Institut Supérieur Polytechnique de Madagascar (ISPM). Misaotra ny oniversite izahay tamin'ny fanohanana ara-akademika sy ara-pitaovana nandritra ny fahavitan'ity tetikasa ity. Ny fampiasana ny anarana, ny logo na ny loharanon'ny ISPM dia atao amin'ny alàlan'ny fanomezan-dàlana mialoha ny fananganana.
                    </Text>
                    <Text style={[styles.paragraphe, { color: isDarkMode ? '#ddd' : '#333' }]}>
                        Tetikasa fanabeazana ny fampiharana Naoti ary tsy vokatra ofisialin'ny oniversite. Ny hevitra sy votoaty aseho amin'ity fampiharana ity dia an'ny mpanoratra ary tsy voatery maneho ny toeran'ny oniversite. Raha misy fanontaniana momba ny fampiharana na ny fivoarany dia mifandraisa aminay mivantana.
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 15
    },
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    astuce: {
        flex: 2,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    body: {
        flex: 10,
        alignItems: "flex-start"
    },
    icon: {
        width: 30,
        height: 32
    },
    image: {
        width: 150, // Ajustez la taille de l'image selon vos besoins
        height: 150,
        resizeMode: 'contain'
    },
    contenu: {
        marginVertical: 15,
        flex: 1.3,
        alignItems: "center",
        width: "100%",
    },
    ecole: {
        marginTop: 10,
        fontSize: 18,
        textAlign: "center",
        fontFamily: "Lato-Bold",
    },
    mention: {
        flex: 2.7,
        width: "100%",
        alignItems: "flex-start",
    },
    titre: {
        fontSize: 40,
        fontWeight: '600',
        fontFamily: "Lato-Bold",
    },
    paragraphe: {
        marginTop: 12,
        fontSize: 18,
        textAlign: "left",
        fontFamily: "Lato-Regular",
    },
    iconBack:{
        flex: 1,
    }
});
