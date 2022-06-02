import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import {CustomButton} from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onConfirmPressed = data => {
    console.warn(data);
    navigation.navigate('Home', {
      screen: 'Discover',
      params: {
        screen: 'DiscoverS',
        params: {
          user,
        },
      },}
    );
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onResendPress = () => {
    console.warn('onResendPress');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#001F2D'}}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: 'Confirmation code is required',
          }}
        />

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
          bgColor='white'
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
          fgColor='white'
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
  text: {
    color: 'white',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
