import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { assets }  from '../constants'
import { AntDesign } from '@expo/vector-icons'; 

const LiveBranch = ({time, what, player1, player2, side}) => {

    const SideText = () => {

        if (side == "left")
            return (
                <View style={{flexDirection: 'column', borderRightWidth: 2, borderRightColor: '#C0C0C0', alignItems: 'flex-end', justifyContent: 'center', paddingRight: 8}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}} >{what == "sub"? <><Text>{player1}</Text><AntDesign name="arrowright" style={{marginLeft: 5}} size={16} color="green" /></> : <Text>{player1}</Text>}</View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}} >{what == "sub"? <><Text>{player2}</Text><AntDesign name="arrowleft" style={{marginLeft: 5}} size={16} color="red" /></> : player2 != undefined? <><Text style={{color: '#899499'}}>{player2}</Text><Image style={{marginLeft: 5}} source={assets.assist}></Image></> : null}</View>
                </View>
            )
        else return (
            <View style={{flexDirection: 'column', borderLeftWidth: 2, borderLeftColor: '#C0C0C0', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 8}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}} >{what == "sub"? <><AntDesign name="arrowleft" style={{marginRight: 5}} size={16} color="green" /><Text>{player1}</Text></> : <Text>{player1}</Text>}</View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}} >{what == "sub"? <><AntDesign name="arrowright" style={{marginRight: 5}} size={16} color="red" /><Text>{player2}</Text></> : player2 != undefined? <><Image style={{marginRight: 5}} source={assets.assist}></Image><Text style={{color: '#899499'}}>{player2}</Text></> : null}</View>
            </View>
        )
    }


    let img;
    let colora;
    let pad = 0;

    if (time < 10) {
        pad -= 4
    }

    if (what == "sub") {
        colora = '#32CD32'
        img = assets.subs
        pad = 10
    }
    else if (what == "goal") {
        if (player2 != undefined)
            pad = 4
        colora = '#1E90FF'
        img = assets.bola
    }
    else if (what == "yellow") {
        colora = '#FFD700'
        img = assets.cardyellow
    }
    else if (what == "red") {
        colora = '#DC143C'
        img = assets.cardred
    }
    if (side == "left")
        return(
            <View style={{marginVertical: 15,}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', marginLeft: -56 - pad}}>
                {side == "left"? <><SideText text1={player1} text2={player2} /><Text style={{marginRight: 8, marginLeft: 5, marginTop: -16}}>{time}'</Text></> : null}
                <View style={{width: 36, height: 36, borderRadius: 18, borderColor: colora, borderWidth: 2, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', backgroundColor: 'white'}}>
                    <Image source={img} resizeMode={'contain'} style={{width: 26, height: 26}}></Image>
                </View>
                {side == "right"? <><Text style={{marginLeft: 8, marginRight: 5, marginTop: -16}}>{time}'</Text><SideText text1={player1} text2={player2} /></> : null}
            </View>
            <View style={{position: 'absolute', top: 0, height: 70, width: 2, backgroundColor: '#E5E4E2', alignSelf: 'center', zIndex: -1}}></View>
            </View>
        );
    else return(
        <View style={{marginVertical: 15,}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', marginLeft: 56 + pad}}>
            {side == "left"? <><SideText text1={player1} text2={player2} /><Text style={{marginRight: 8, marginLeft: 5, marginTop: -16}}>{time}'</Text></> : null}
            <View style={{width: 36, height: 36, borderRadius: 18, borderColor: colora, borderWidth: 2, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', backgroundColor: 'white'}}>
                <Image source={img} resizeMode={'contain'} style={{width: 26, height: 26}}></Image>
            </View>
            {side == "right"? <><Text style={{marginLeft: 8, marginRight: 5, marginTop: -16}}>{time}'</Text><SideText text1={player1} text2={player2} /></> : null}
        </View>
        <View style={{position: 'absolute', top: 0, height: 70, width: 2, backgroundColor: '#E5E4E2', alignSelf: 'center', zIndex: -1}}></View>
        </View>
    );
  }

export default LiveBranch