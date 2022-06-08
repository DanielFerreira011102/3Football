import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Divider } from 'react-native-paper';

const TROPHYCard = ({name, img, number, isLast, ...props}) => {

    return (
           <Pressable>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, props}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={img}></Image>
                        <Text style={{position:'absolute', left: 60, fontSize: 20, fontWeight: '700'}}>{name}</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>x{number}</Text>
                </View>
                {!isLast? <><Divider width={'92%'} style={{backgroundColor: '#d3d3d3', height: 1, marginVertical: 10, alignSelf: 'center' }} /></> : <View style={{marginBottom: 25}}></View>}
            </Pressable>
        );
    };

  export default TROPHYCard;