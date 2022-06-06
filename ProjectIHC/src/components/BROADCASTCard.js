import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Divider } from 'react-native-paper';
import * as Linking from 'expo-linking';

const BROADCASTCard = ({country, img, channels, isFirst, isLast}) => {

    const OneLiner = ({key, link, tv}) => {

        return (
            <Pressable onPress={() => Linking.openURL({link})} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>{tv}</Text><Text>{'>'}</Text></Pressable>
        )
    
    }

    return (
        <>
            {isFirst? <><Divider style={{backgroundColor: 'grey', height: 1, marginBottom: 10}}/></> : <><Divider style={{backgroundColor: 'grey', height: 1, marginVertical: 10}}/></> }
            <View style={{flexDirection: 'row'}}>
                <View style={{width: '30%', alignItems: 'center', marginLeft: 20, justifyContent: 'center'}}>
                    <Image source={img} style={{width: 130, height: 130, borderColor: '#E6E6FA', borderWidth: 7, borderRadius: 65}}></Image>
                    <Text style={{marginTop: 10}}>{country}</Text>
                </View>
                <View style={{width: '70%', alignItems: 'flex-start', marginRight: 20, justifyContent: 'center', marginLeft: 60}}>
                    {channels.map(channel => {
                        return <OneLiner link={channel.link} tv={channel.name} key={channel.name} />
                    })}
                </View>
            </View>
        </>
        );
    };

  export default BROADCASTCard;
  