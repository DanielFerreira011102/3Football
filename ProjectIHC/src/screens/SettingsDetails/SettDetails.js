import React, {useState} from "react";
import { View, Text, SafeAreaView, Image, StatusBar,StyleSheet } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../../constants";
import { CircleButton } from "../../components";
import { Divider } from 'react-native-paper';
const SettDetails = ({ route, navigation}) => {
  const { data } = route.params;

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={{
                backgroundColor: COLORS.primary,
                padding: SIZES.font,
                }}
                >
          <View style={{height: 60}}>
            <View style={{flexDirection: 'row'}}>
            <CircleButton
                imgUrl={assets.left}
                handlePress={() => navigation.goBack()}
                top={StatusBar.currentHeight -20}
              />
              <Text style={{marginLeft: 50, marginTop: 8, color: "white", fontSize: 30, fontWeight: '800'}}>Your</Text>
              <Text style={{marginLeft: 5, marginTop: 12, color: "white", fontSize: 26}}>Settings</Text>
              <Text style={{marginRight: 5,flex:1,textAlign:'right',marginTop: 20,color: "white", fontSize: 16}}>{data.title}</Text>

            </View>
          </View>
        </View>
      <View style={{ zIndex: 0, marginBottom: 10,backgroundColor: 'white' }}>
        <Text style={{marginRight: 20,marginLeft: 20, marginTop: 8}}>{data.description}</Text>

      </View>
      <View style={{height: 800}}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    height: 150,
    backgroundColor: 'white',
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
  fav: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    margin: 20,
    marginTop: 20,
  }
  
});

export default SettDetails;
