import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, FontAwesome6, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import TecnologiaScreen from './src/tecnologia';
import EsportesScreen from './src/esportes';
import Detalhes from './src/Detalhes';

function SobreScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.sobreContainer} edges={['bottom', 'left', 'right']}>
      <View style= {{ flex: 1, padding: 20 }}>
        <Text style={styles.sobreTitle}>Sobre</Text>
        <Image 
          source={require('./assets/newspaper.png')}
          style={styles.sobreImage}
          resizeMode="contain"
          accessibilityLabel="Ilustração de um jornal"
        />
        <Text style={styles.sobreDescription}>
          Esse é o Mini App de Notícias.
          Aqui eu pratiquei diferentes tipos de navegação com
          React Native:
          - Drawer (raiz)
          - Tabs (Tecnologia/Esportes)
          - Stacks (Lista ➜ Detalhes)
        </Text>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Button
            title='Voltar'
            onPress={() => navigation.navigate('Notícias')}
          />
        </View>
      </View>
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
const Stack = createStackNavigator();

function TecnologiaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tecnologia"
        component={TecnologiaScreen}
        options ={{ title: 'Tecnologia' }}
      />
      <Stack.Screen
        name="Detalhes"
        component={Detalhes}
      />
    </Stack.Navigator>
  );
}

function EsportesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Esportes"
        component={EsportesScreen}
        options ={{ title: 'Esportes' }}
      />
      <Stack.Screen
        name="Detalhes"
        component={Detalhes}
      />
    </Stack.Navigator>
  );
}

function NoticiasTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }} 
    >
      <Tab.Screen 
        name="Tecnologia" 
        component={TecnologiaStack} 
        options={{
          tabBarIcon: ({color, size}) => (<FontAwesome6 name="computer" size={size} color={color}/>)
        }} 
      />

      <Tab.Screen 
        name="Esportes" 
        component={EsportesStack}
        options={{
          tabBarIcon: ({color, size}) => (<MaterialIcons name="sports-football" size={size} color={color}/>)
        }}
      />
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
  sobreContainer: { 
    flex: 1,
    backgroundColor: '#fff',
  },
  sobreTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sobreImage: {
    width: '80%', 
    height: 150, 
    alignSelf: 'center',
    marginBottom: 20,
  },
  sobreDescription: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    color: '#333',
  }
});
