import React from 'react';
import {View, Text, StyleSheet,StatusBar, ScrollView, FlatList, SafeAreaView,Button,Image,Alert} from 'react-native';
import { COLORS, SIZES, settings_text, assets } from '../../constants';
import { Divider } from 'react-native-paper';
import { SETTINGSCard,FocusedStatusBar,CircleButton } from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';


const Settings = () => {
  const setts = settings_text;
  const navigator = useNavigation();
  const onGetStartedPress = () => {
    navigator.navigate('StartScreen');
  }
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={{
                backgroundColor: COLORS.primary,
                padding: SIZES.font,
                }}
                >
          <View style={{height: 60}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginLeft: 5, marginTop: 8, color: "white", fontSize: 30, fontWeight: '800'}}>Your</Text>
              <Text style={{marginLeft: 5, marginTop: 12, color: "white", fontSize: 26}}>Settings</Text>
              <CircleButton
                imgUrl={assets.help}
                top={15}
                right={20}
              />
            </View>
          </View>
        </View>
      <View  style={{ zIndex: 0 }}>
      <FlatList data={setts} horizontal={false}
                renderItem={({ item }) => <SETTINGSCard data={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}/>

      <TouchableOpacity onPress={onGetStartedPress} style={styles.button}>
        
        <Image
        
          source={assets.logout}
          resizeMode="contain"
          style={{ width: 24, height: 24,left:-10 }}
          />
          <Text style={{color:'white',fontWeight:'bold'}} >  Logout</Text>

      </TouchableOpacity>
      <Divider />
      </View >
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 60,
    backgroundColor: COLORS.primary,
    padding: SIZES.font,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
    marginTop: 40
  },
  content: {
    backgroundColor: 'white',
    height: 80,
  },
  button: {
    zIndex: 1,
    borderRadius:25,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'red',
    width:150,
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    left:115,
  },
  
});

export default Settings;
