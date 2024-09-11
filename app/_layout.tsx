import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { CustomHeader } from '@/components/custoemHeade';
import CustomeDrawer from '@/components/CustomeDrawer';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { ThemeProvider } from './ThemeContext';
import { NoteProvider } from './NoteContext';

SplashScreen.preventAutoHideAsync();


export default function Layout() {

  const [fontsLoaded] = useFonts({
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
    'Margarine': require('../assets/fonts/Margarine-Regular.ttf')
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NoteProvider>
      <ThemeProvider>
      <Drawer drawerContent={CustomeDrawer}>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Fandraisana',
            headerShown : false,
            drawerLabelStyle: {
              fontFamily: "Lato-Bold",
              fontSize: 18,
            }
          }}
        />
        <Drawer.Screen
          name="home/propos" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Mahakasika',
            headerShown : false,
            drawerLabelStyle: {
              fontFamily: "Lato-Bold",
              fontSize: 18,
            }
          }}
        />
        <Drawer.Screen
          name="home/astuce" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Torohevitra',
            headerShown : false,
            drawerLabelStyle: {
              fontFamily: "Lato-Bold",
              fontSize: 18,
            }
          }}
        />
        <Drawer.Screen
          name="home/remarque" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Fanamarihana',
            headerShown : false,
            drawerLabelStyle: {
              fontFamily: "Lato-Bold",
              fontSize: 18,
            }
          }}
        />
        <Drawer.Screen
          name="home/equipe" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Ekipa',
            headerShown : false,
            drawerLabelStyle: {
              fontFamily: "Lato-Bold",
              fontSize: 18,
            }
          }}
        />
        <Drawer.Screen
          name="home/addNote" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Manampy naoty',
            headerShown : false,
            drawerLabelStyle: {
              fontFamily: "Lato-Bold",
              fontSize: 18,
            }
          }}
        />
      </Drawer>
      </ThemeProvider>
      </NoteProvider>
      
    </GestureHandlerRootView>
  );
}