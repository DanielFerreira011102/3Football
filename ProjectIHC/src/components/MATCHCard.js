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
    const team1score = team1.score
    const team2score = team2.score
    const team1img = team1.img
    const team2img = team2.img
    const status = data.status
    const time = data.time? data.time : undefined
    const event = data.event
    const phase = data.phase? data.phase : undefined
    const aggr = data.aggr? data.aggr : undefined

    const navigation = useNavigation();

    const Score = () => {
        return (
            <View style={{flexDirection: "column", alignItems: 'center', width: '50%'}}>
                    <Text style={{color: "#525252"}}>{event}</Text>
                    {phase != undefined? <Text>{phase}</Text> : null}
                    {status != "NS"? <Text style={{fontSize: 25}}>{team1score} - {team2score}</Text>: <Text style={{fontSize: 25}}>{time}</Text>}
                    {aggr != undefined? <Text style={{color: "#525252"}}>{aggr}</Text> : null} 
                    <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
                        {status == "LIVE"? <><Image source={require('../../assets/images/red.png')} style={{height: 7, width: 7, marginRight: 5}}></Image><Text style={{color: 'red'}}>{status}</Text></> : null}
                    </View>
                    {status == "FT"? <Text style={{color: "#525252"}}>{status}</Text> : null}
            </View>
        )
    }
    
    const MCard = () => {
        return (
            <View style={{height: 120}}>
                <Divider style={{height: 1}}/>
                <Pressable onPress={() => {navigation.navigate("Match")}}>
                    <View
                        style={{
                            width: "100%",
                            height: "100%",
                            paddingHorizontal: SIZES.font - 5,
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                        }}
                        >
                        <View style={{ flexDirection: "column", alignItems: "flex-start", width: '25%'}}>
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
                        <Score />
                        <View style={{ flexDirection: "column", alignItems: 'flex-end', width: '25%'}}>
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
