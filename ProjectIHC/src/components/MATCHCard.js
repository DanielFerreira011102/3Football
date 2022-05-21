import React from "react";
import { View, Image, Pressable, Text } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets, NEWSData } from "../constants";
import { Divider } from 'react-native-paper';

const MATCHCard = ({ data }) => {

    const id = data.id;
    const team1 = data.team1;
    const team2 = data.team2;
    const team1name = team1.name;
    const team2name = team2.name;
    const team1score = team1.score? team1.score: undefined;
    const team2score = team2.score? team2.score: undefined;
    const team1img = team1.img
    const team2img = team2.img
    const status = data.status
    const time = data.time? data.time : undefined
    const event = data.event
    const phase = data.phase? data.phase : undefined
    const aggr = data.aggr? data.aggr : undefined

    const navigation = useNavigation();

    const handler = () => {
        //
    }
    
    const MCard = ({ handler }) => {
        return (
            <View style={{height: 90}}>
                <Divider style={{height: 1}}/>
                <Pressable onPress={handler}>
                    <View
                        style={{
                            width: "100%",
                            height: "100%",
                            paddingHorizontal: SIZES.font - 5,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                        >
                        <View style={{ flexDirection: "column", alignItems: "flex-start",}}>
                            <Image
                                source={team1img}
                                resizeMode="contain"
                                style={{
                                    width: 48,
                                    height: 48,
                                    marginLeft: 0,
                                    marginRight: 0,
                                }}
                            />
                            <Text style={{paddingLeft: 7}}>{team1name}</Text>
                        </View>
                        <View style={{ flexDirection: "column", alignItems: 'flex-end',}}>
                            <Image
                                source={team2img}
                                resizeMode="contain"
                                style={{
                                    width: 48,
                                    height: 48,
                                    marginLeft: 0,
                                    marginRight: 0,
                                }}
                            />
                            <Text style={{paddingRight: 7}}>{team2name}</Text>
                        </View>    
                    </View>
                </Pressable>
            </View>
        );   
    }

    return (
        <MCard />
    )
     
};

export default MATCHCard;
