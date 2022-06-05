import React, {useState, useRef} from "react";
import { SafeAreaView, Text, ScrollView, View, useWindowDimensions, Image, StyleSheet,  TouchableHighlight } from "react-native";
import { assets, COLORS } from "../constants";
import { CircleButton } from "../components";

const TeamCircle = ({teamImg, ...props}) => {
  return (
    <View style={[styles.circle, {...props}]} >
      <Image style={{flex:1 , width: 90, height: 90, resizeMode: 'contain', alignSelf: 'center'}} source={teamImg}></Image>
    </View>
  )
};


const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    top: 35,
    zIndex: -1,
  },
});

const MatchHeader = ({ navigation, data, date }) => {

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

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

    var weekDay = days[ date.getDay() ];
    var day = date.getDate();
    var year = date.getFullYear();
    var month = months[ date.getMonth() ];

    const formatDate = weekDay + ", " + day + " " + month + " " + year;

    const [bellImage, setBellImage] = useState(assets.bellol);

    const bellHandler = () => {
      if (bellImage == assets.bell)
        setBellImage(assets.bellol)
      else setBellImage(assets.bell)
    }

    return (
    <View style={{height: 170, backgroundColor: COLORS.primary}}>
        <View style={{marginTop: 20, backgroundColor: '#000000'}}>
            <CircleButton 
            imgUrl={assets.left}
            left={15}
            handlePress={() => {navigation.goBack()}}/>
            <CircleButton
            imgUrl={bellImage}
            right={15}
            handlePress={bellHandler}/>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TeamCircle left={40} teamImg={team1img}/>
            <View style={{flexDirection: "column", alignItems: 'center', width: '100%', height: '100%', marginTop: -10, justifyContent: 'center'}}>
            <Text style={{fontSize: 15, color: "white"}}>{event}</Text>
            {phase != undefined? <Text style={{color: 'white'}}>{phase}</Text> : null}
            {status != "LIVE"? <Text style={{fontSize: 12, color:'white', marginTop: 5}}>{formatDate}</Text> : null}
            {status != "NS"? <Text style={{fontSize: 30, color:'white', fontWeight: '700'}}>{team1score} - {team2score}</Text>: <Text style={{fontSize: 30, color: 'white', fontWeight: '700'}}>{time}</Text>}
            {aggr != undefined? <Text style={{color: "white"}}>{aggr}</Text> : null} 
            <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
                {status == "LIVE"? <><Image source={require('../../assets/images/red.png')} style={{height: 7, width: 7, marginRight: 5}}></Image><Text style={{color: 'red'}}>{status}</Text></> : null}
            </View>
            {status == "LIVE"? <Text style={{color: 'red'}}>{time}'</Text> : null}
            {status == "FT"? <Text style={{color: "white"}}>{status}</Text> : null}
            </View>
          <TeamCircle right={40} teamImg={team2img}/>
        </View>
      </View>
    );
  };

export default MatchHeader;