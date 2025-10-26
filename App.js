import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import TecnologiaScreen from './src/tecnologia';
import EsportesScreen from './src/esportes';

function SobreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Página Sobre</Text>
    </SafeAreaView>
  );
}

function CustomDrawerContent(props) {
  const insets = useSafeAreaInsets();

  return (
    <DrawerContentScrollView 
      {...props}
      contentContainerStyle={{ paddingTop: insets.top }} 
    >
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

// ----------------------------------------

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function NoticiasTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }} 
    >
      <Tab.Screen name="Tecnologia" component={TecnologiaScreen} />

      <Tab.Screen name="Esportes" component={EsportesScreen} />
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        
        <Drawer.Navigator 
          initialRouteName="Notícias"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          
          <Drawer.Screen
            name="Notícias" 
            component={NoticiasTabNavigator} 
            options={{
              drawerLabel: 'Notícias', 
              title: 'Notícias', 
              drawerIcon: ({ color, size }) => (
                <FontAwesome name="newspaper-o" size={size} color={color} />
              ),
            }}
          />

          <Drawer.Screen
            name="Sobre"
            component={SobreScreen}
            options={{
              drawerLabel: 'Sobre',
              title: 'Sobre',
              drawerIcon: ({ color, size }) => (
                <AntDesign name="info-circle" size={size} color={color} />
              )
            }}
          />

        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
