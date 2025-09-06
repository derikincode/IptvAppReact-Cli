// src/navigation/AppNavigator.tsx - VERSÃO CORRIGIDA
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import screens
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import LiveTVScreen from '../screens/LiveTVScreen';
import MoviesScreen from '../screens/MoviesScreen';
import SeriesScreen from '../screens/SeriesScreen';
import CategoryScreen from '../screens/CategoryScreen';
import PlayerScreen from '../screens/PlayerScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2a2a2a',
          borderTopColor: '#333',
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#666',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>🏠</Text>,
        }}
      />
      <Tab.Screen
        name="LiveTV"
        component={LiveTVScreen}
        options={{
          tabBarLabel: 'Ao Vivo',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>📺</Text>,
        }}
      />
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        options={{
          tabBarLabel: 'Filmes',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>🎬</Text>,
        }}
      />
      <Tab.Screen
        name="Series"
        component={SeriesScreen}
        options={{
          tabBarLabel: 'Séries',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>📺</Text>,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>🔍</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#1a1a1a' },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen 
          name="Player" 
          component={PlayerScreen}
          options={{
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;