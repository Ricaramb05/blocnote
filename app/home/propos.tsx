import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
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
                <Link href="/" style={styles.iconBack}>
                    <Image style={styles.icon} source={require("../../assets/icons/Back.png")} />
                </Link>
            </View> 
            <View style={styles.astuce}>
                <Text style={[styles.titre, { color: isDarkMode ? '#fff' : '#000' }]}>Mahakasika</Text>
            </View>
            <View style={styles.contentContainer}>
                <ScrollView>
                    <View style={styles.contenu}>
                        <Text style={[styles.subtitle, { color: isDarkMode ? '#fff' : '#000' }]}>Fampahafantarana</Text>
                        <Text style={[styles.paragraphe, { color: isDarkMode ? '#ddd' : '#333' }]}>
                            Naoti dia “application mobile” tsotra sy mora ampiasaina, natao handraisana an-tsoratra haingana sy mahomby. Alamino amin'ny toerana iray ny hevitrao, ny lisitra tokony hatao ary ny fampahatsiahivanao. Miaraka amin'ny mpampiasa interface tsara, ity fampiharana ity dia ahafahanao mijanona mamokatra amin'ny fotoana rehetra
                        </Text>
                    </View>
                    <View style={styles.contenu}>
                        <Text style={[styles.subtitle, { color: isDarkMode ? '#fff' : '#000' }]}>Version 2.0.0</Text>
                        <Text style={[styles.paragraphe, { color: isDarkMode ? '#ddd' : '#333' }]}>
                            Dika ofisialy faharoa amin'ny “application” Naoti. Ity dikan-teny ity dia misy endri-javatra fototra ahafahana mamorona, manitsy, ary mamafa naoty. Ny version 2.0.0 koa dia mampiditra safidy toy ny fanasokajiana sy fitadiavana naoty manokana
                        </Text>
                    </View>
                    <View style={styles.contenu}>
                        <Text style={[styles.subtitle, { color: isDarkMode ? '#fff' : '#000' }]}>Fepetra fampiasana</Text>
                        <Text style={[styles.paragraphe, { color: isDarkMode ? '#ddd' : '#333' }]}>
                            Ny fampiharana Naoti dia omena ho an'ny fampiasana manokana, tsy ara-barotra. Manaiky ianao fa tsy hampiasa ny fampiharana amin'ny tanjona tsy ara-dalàna, manimba, manafintohina na manitsakitsaka ny zon'ny hafa. Ianao no tompon'andraikitra amin'ny fahamendrehana, ny fahamendrehana ary ny maha-ara-dalàna ny atiny rehetra noforoninao na tehirizinao ao amin'ny fampiharana.Nanolo-tena izahay hiaro ny tsiambaratelon'ny angonao. Na izany aza, tsy tompon'andraikitra amin'ny fanitsakitsahana ny fiarovana tsy voafehintsika izahay.
                        </Text>
                    </View>
                    <View style={styles.contenu}>
                        <Text style={[styles.subtitle, { color: isDarkMode ? '#fff' : '#000' }]}>Fanovana amin'ny fepetra fampiasana</Text>
                        <Text style={[styles.paragraphe, { color: isDarkMode ? '#ddd' : '#333' }]}>
                            Izahay dia manana zo hanova ireo fepetra fampiasana ireo amin'ny fotoana rehetra. Ny fanovana rehetra dia ampitaina amin'ny alàlan'ny fampiharana na ny tranokalanay. Ny fanohizanao ny fampiasana ny App aorian'ny fanovana toy izany dia ho fanekenao ny fepetra vaovao.
                        </Text>
                    </View>
                    <View style={styles.contenu}>
                        <Text style={[styles.subtitle, { color: isDarkMode ? '#fff' : '#000' }]}>Fanontaniana</Text>
                        <Text style={[styles.paragraphe, { color: isDarkMode ? '#ddd' : '#333' }]}>
                            Raha manana fanontaniana momba ireo fepetra fampiasana ireo ianao dia mifandraisa aminay amin'ny pejinay
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 15
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
    contentContainer: {
        flex: 10,
    },
    icon: {
        width: 30,
        height: 32
    },
    contenu: {
        marginVertical: 15,
        width: "100%",
    },
    titre: {
        fontSize: 40,
        fontFamily: "Lato-Bold",
        fontWeight: '600'
    },
    subtitle: {
        fontSize: 24,
        fontFamily: "Lato-Bold",
        fontWeight: '600'
    },
    paragraphe: {
        fontSize: 18,
        fontFamily: "Lato-Regular",
        marginTop: 10
    },
    iconBack: {
        flex: 1,
    }
});
