import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Divider } from 'react-native-paper';
import { assets } from "../constants";

const BENCHCard = ({name, number, isLast}) => {

    return (
           <Pressable>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={assets.ucircle}></Image>
                        <Text style={{marginLeft: 15}}>{name}</Text>
                    </View>
                    <Text>{number}</Text>
                </View>
                {!isLast? <><Divider width={'92%'} style={{backgroundColor: '#d3d3d3', height: 1, marginVertical: 10, alignSelf: 'center' }} /></> : <View style={{marginBottom: 25}}></View>}
            </Pressable>
        );
    };

  export default BENCHCard;
  