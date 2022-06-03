import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, useColorScheme } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import PlayerScreen from '../screens/PlayerScreen';
import EventScreen from '../screens/EventScreen';
import TeamScreen from '../screens/TeamScreen';
import ManagerScreen from '../screens/ManagerScreen';
import MatchScreen from '../screens/MatchScreen';
import SettDetails from '../screens/SettingsDetails'

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const SearchNavigator = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          safeAreaInsets: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
        }}
        initialRouteName="Search"
      >
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Player" component={PlayerScreen} />
        <Stack.Screen name="Team" component={TeamScreen}  />
        <Stack.Screen name="Manager" component={ManagerScreen}  />
        <Stack.Screen name="Evento" component={EventScreen}  />
      </Stack.Navigator>
      </SafeAreaProvider>
  );
};

const NewsNavigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          safeAreaInsets: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
        }}
        initialRouteName="DiscoverS"
      >
        <Stack.Screen name="DiscoverS" component={DiscoverScreen} />
        <Stack.Screen name="Details" component={NewsScreen} />
        <Stack.Screen name="SearchNav" component={SearchNavigator}  />
      </Stack.Navigator>
  );
};

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        safeAreaInsets: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      }}
      initialRouteName="SettingsS"
    >
      <Stack.Screen name="SettingsS" component={SettingsScreen}  />
      <Stack.Screen name="SettDetails" component={SettDetails} />
    </Stack.Navigator>
);
}

const FavoritesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        safeAreaInsets: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      }}
      initialRouteName="FavoritesS"
    >
      <Stack.Screen name="FavoritesS" component={FavoritesScreen}  />
      <Stack.Screen name="Player" component={PlayerScreen} />
      <Stack.Screen name="Team" component={TeamScreen}  />
      <Stack.Screen name="Manager" component={ManagerScreen}  />
      <Stack.Screen name="Evento" component={EventScreen}  />
      <Stack.Screen name="Details" component={NewsScreen} />
    </Stack.Navigator>
  );
}

const MacthNavigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          safeAreaInsets: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
        }}
        initialRouteName="MatchGroup"
      >
        <Stack.Screen name="MatchGroup" component={MatchesScreen}  />
        <Stack.Screen name="Match" component={MatchScreen} />
      </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarHideOnKeyboard: true,
      safeAreaInsets: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '500'
      },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;''
        let material = false;

        if (route.name === 'Discover')
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
    initialRouteName="Discover"
    >
      <Tab.Screen name="Discover" component={NewsNavigator} />
      <Tab.Screen name="Matches" component={MacthNavigator} />
      <Tab.Screen name="Favorites" component={FavoritesNavigator} />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
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
