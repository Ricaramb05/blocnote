import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useTheme } from '../ThemeContext'; // Assurez-vous d'importer correctement

export default function Equipe() {
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

    const teamMembers = [
        {
            name: 'Mario Ralison',
            email: 'marioeuphraim@gmail.com',
            role: 'Front-End Developer',
            image: require('../../assets/images/mario.png')
        },
        {
            name: 'Tsitohaina',
            email: 'tsitoranjafy@gmail.com',
            role: 'FullStack Developer',
            image: require('../../assets/images/user.png')
        },
        {
            name: 'Rica Rambala',
            email: 'rambalarica@gmail.com',
            role: 'Front-End Developer',
            image: require('../../assets/images/rica.png')
        },
        {
            name: 'Maxel Tsarahary',
            email: 'maxeltsarahary@gmail.com',
            role: 'Front-End Developer',
            image: require('../../assets/images/haja.png')
        },
        {
            name: 'Hajaniaina',
            email: 'andrianjafyhaja@gmail.com',
            role: 'Front-End Developer',
            image: require('../../assets/images/maxel.png')
        },
        {
            name: 'Manitra',
            email: 'manitra123@gmail.com',
            role: 'Front-End Developer',
            image: require('../../assets/images/manitra.png')
        }
    ];

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
                <Text style={[styles.titre, { color: isDarkMode ? '#fff' : '#000' }]}>Ireo ekipa</Text>
            </View>
            <View style={styles.body}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {teamMembers.map((member, index) => (
                        <View key={index} style={[styles.carte, { backgroundColor: isDarkMode ? '#444' : '#B8CBF1' }]}>
                            <View>
                                <Image style={styles.imageUser} source={member.image} />
                            </View>
                            <View style={styles.infoMembre}>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={[styles.nomMembre, { color: isDarkMode ? '#fff' : '#000' }]}>{member.name}</Text>
                                    <Text style={[styles.email, { color: isDarkMode ? '#ddd' : '#333' }]}>{member.email}</Text>
                                </View>
                                <Text style={[styles.competence, { color: isDarkMode ? '#ddd' : '#333' }]}>{member.role}</Text>
                                <View style={{ flexDirection: "row", gap: 10 }}>
                                    <Image style={styles.socialMedia} source={require("../../assets/images/Facebook.png")} />
                                    <Image style={styles.socialMedia} source={require("../../assets/images/Instagram.png")} />
                                    <Image style={styles.socialMedia} source={require("../../assets/images/LinkedIn.png")} />
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.contenu}>
                    <Text style={[styles.paragraphe, { color: isDarkMode ? '#ddd' : '#333' }]}>
                        Eto izahay hanampy anao! Raha manana fanontaniana, soso-kevitra, na raha sendra olana amin'ny fampiharana ianao dia aza misalasala mifandray aminay. Afaka mifandray aminay amin'ny alàlan'ny mailaka, telefaona, na amin'ny tambajotra sosialy ianao. Misokatra amin'ny hevitrao sy ny hevitrao koa izahay hanatsarana ny fampiharana.
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    contenu: {
        flex: 4,
        marginVertical: 40,
        width: "100%",
    },
    titre: {
        fontSize: 40,
        fontWeight: '600',
        fontFamily: "Lato-Bold"
    },
    nomMembre: {
        fontFamily: "Lato-Bold",
        fontSize: 24
    },
    email: {
        fontFamily: "Lato-Regular"
    },
    competence: {
        fontFamily: "Lato-Bold",
        fontSize: 16
    },
    paragraphe: {
        fontSize: 18,
        fontFamily: "Lato-Regular"
    },
    iconBack: {
        flex: 1,
    },
    carte: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: 310,
        height: 150,
        borderRadius: 15,
        marginHorizontal: 10
    },
    infoMembre: {
        gap: 15,
        alignItems: "center"
    },
    imageUser: {
        width: 102,
        height: 100
    },
    socialMedia: {
        width: 22,
        height: 22
    }
});
