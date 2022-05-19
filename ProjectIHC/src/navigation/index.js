import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, useColorScheme } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import StartScreen from '../screens/StartScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import DiscoverScreen from '../screens/DiscoverScreen/Discover';
import NewsScreen from '../screens/NewsScreen/Details';
import MatchesScreen from '../screens/MatchesScreen/Matches';
import FavoritesScreen from '../screens/FavoritesScreen/Favorites';
import SettingsScreen from '../screens/SettingsScreen/Settings';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const NewsNavigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Discover"
      >
        <Stack.Screen name="Discover" component={DiscoverScreen} />
        <Stack.Screen name="Details" component={NewsScreen} />
      </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let material = false;

        if (route.name === 'News')
        {
          iconName = focused
            ? 'md-search'
            : 'ios-search-outline';
            size+=3;
        } 
        else if (route.name === 'Matches')
        {
          iconName = 'soccer-field'
          material = true;
        }
        else if (route.name === 'Favorites')
        {
          iconName = focused
            ? 'ios-star'
            : 'ios-star-outline';
        }
        else
        {
          iconName = focused
            ? 'ios-settings'
            : 'ios-settings-outline';
        }
        
        if (material == false)
          return <Ionicons name={iconName} size={size + 3} color={color} />;
        return <MaterialCommunityIcons name={iconName} size={size + 8} color={color} />;
      },
    })}
    initialRouteName="News"
    >
      <Tab.Screen name="News" component={NewsNavigator} />
      <Tab.Screen name="Matches" component={MatchesScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Home" component={TabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
