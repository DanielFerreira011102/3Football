import React, {useState, useCallback, useEffect,} from 'react';
import {View, Text, Pressable, useWindowDimensions, Image, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Background from '../../../assets/images/ronaldo.jpg';
import appName from '../../../assets/images/app_name.png';
import {
  useFonts,
  Roboto_400Regular,
  Bangers_400Regular,
  OpenSans_400Regular
} from "@expo-google-fonts/dev";
import AppLoading from 'expo-app-loading';

const StartScreen = () => {
  const navigator = useNavigation();
  
  const { height, width } = useWindowDimensions();

  const onGetStartedPress = () => {
    navigator.navigate('SignIn');
  }
  
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
          <View style={[styles.root, {flex: 1}]}>
              <ImageBackground
              source={Background}
              style={[styles.background, {width: width, height: '100%'}]}
              resizeMode='cover'
              >
              <Image source={appName} resizeMode='contain' style={styles.app_name}/>
              <Pressable onPress={onGetStartedPress} style=
              {{
                backgroundColor: '#E51027',
                width: '70%',
                borderRadius: 25,
                padding: 15,
                elevation: 1000,
                marginVertical: 5,
                alignItems: 'center',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowOpacity: 0.8,
                elevation: 69,
                shadowRadius: 15 ,
                shadowOffset : { width: 1, height: 13},
              }}
              >
              <Text style=
              {{
                fontFamily: 'OpenSans_400Regular',
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white', 
              }}
              >
              GET STARTED
              </Text>
              </Pressable>
              </ImageBackground>
          </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: 'center',
  },
  app_name: {
    marginTop: '45%',
    marginBottom: '70%',
    height: 160,
  }
});

export default StartScreen;