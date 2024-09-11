import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Image, Switch, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import { useTheme } from '../app/ThemeContext'; // Importer le context du thème

const CustomeDrawer = (props: any) => {
    const { bottom } = useSafeAreaInsets();
    const { isDarkMode, toggleTheme } = useTheme(); // Utiliser le thème

    return (
        <View style={{ flex: 1, backgroundColor: isDarkMode ? '#000' : '#fff' }}>
            <DrawerContentScrollView {...props} scrollEnabled={false}>
                {/* Image */}
                <View>
                    <Image
                        source={require("@/assets/images/naoti.png")}
                        style={styles.drawerImage}
                    />
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            {/* Footer avec le switch pour le mode sombre */}
            <View style={[styles.footerContainer, { paddingBottom: 20 + bottom }]}>
                <Text style={[styles.footerText, { color: isDarkMode ? '#fff' : '#000' }]}>Mode sombre</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={toggleTheme}
                    value={isDarkMode}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerImage: {
        alignSelf: "center",
        marginBottom: 20,
        width: 100,
        height: 100,
        resizeMode: "contain"
    },
    footerContainer: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    footerText: {
        fontSize: 16,
        fontFamily: "Lato-Regular"
    }
});

export default CustomeDrawer;
