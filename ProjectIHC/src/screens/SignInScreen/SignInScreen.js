import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Logo from '../../../assets/images/Logo_1.png';
import X from '../../../assets/images/x.png';
import Erro from '../../../assets/images/error.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { USERData } from '../../constants';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const SignInScreen = () => {
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();

  const passwordRef = useRef();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  function goHome(user) {  
    navigation.navigate('Home', {
      screen: 'News',
      params: {
        screen: 'Discover',
        params: {
          user,
        },
      },}
    );
  }

  const onSignInPressed = data => {
    if (USERData.some(U => (U.username == data.username || U.email == data.username) && U.password == data.password)) {
      const user = USERData.find(U => (U.username == data.username || U.email == data.username) && U.password == data.password);
      goHome(user)
    }
    else
      showModal()
  }

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  var id;

  const [modalVisible, setModalVisible] = useState(false);

  function showModal()  {
      setModalVisible(true);
      id = window.setTimeout(() => {
      setModalVisible(false);
    }, 1500);
  };

  function CloseClick() {
    const highestId = window.setTimeout(() => {
      for (let i = highestId; i >= 0; i--) {
        window.clearInterval(i);
      }
    }, 0);
      setModalVisible(false)
  }
 
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#001F2D'}}>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // this.closeButtonFunction()
          }}
          style={{margin: 0, flex: 1 }}
          >
          <Pressable style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}} onPress={CloseClick}><View style={{height: '100%'}}></View></Pressable>
          <View
            style={{
              height: '17%',
              marginTop: 'auto',
            }}>
            <View style={styles.footer}>
              <Image source={Erro} style={{width: 60, height: 60}}/>
              <Text style={styles.headerText}>Incorrect username or password</Text>
            </View>
          </View>
        </Modal>
      
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        
        <CustomInput
          name="username"
          placeholder="Username or email"
          control={control}
          returnKey="next"
          submit={() => {passwordRef.current.focus()}}
          blurSubmit={false}
          rules=
          {{
            required: 'Username is required',
          }}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          aref={passwordRef}
          control={control}
          rules=
          {{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />

        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
          fgColor='white'
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
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
    marginTop: 20,
  },
  logo: {
    width: '100%',
    maxWidth: 350,
    maxHeight: 200,
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    padding: 10,
  },
  footer: {
    backgroundColor: '#f5dfdf',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    flex: 1,
  },
});

export default SignInScreen;
