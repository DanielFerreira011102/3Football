import React, {useState, useRef} from "react";
import { SafeAreaView, Text, ScrollView, View, useWindowDimensions, Image, StyleSheet, Button, Pressable} from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import { assets } from "../../constants";
import { FootballField, MatchHeader, PercentageRing, PercentageBlock, LiveBranch } from '../../components';
import {home, away, COLORS} from '../../constants';
import { Divider } from 'react-native-paper';
import Modal from 'expo-react-native-modalbox';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as Linking from 'expo-linking';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Overview = ({data}) => {

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const [isOpena, setisOpen] = useState(false);

  async function handleOpen() {
    if (isOpena) {
      setisOpen(false) 
      await sleep(100);
    }
    setisOpen(true)
  }

  return (
  <ScrollView style={{backgroundColor: 'white'}}>
    { data.status == "LIVE"?
    <>
    <Modal
      style={{}}
      isOpen={isOpena}>
      <Pressable style={{right: 15, top: 15, position: 'absolute'}} onPress={() => {setisOpen(false)}}><Image source={assets.close} style={{width: 40, height: 40}}></Image></Pressable>
      <View style={{flexDirection: 'row', left: 10, top: 25, position: 'absolute'}}><MaterialCommunityIcons name="broadcast" size={26} color="black" /><Text style={{fontSize: 20, fontWeight: '700', marginLeft: 10}}>BROADCAST CHANNELS</Text></View>
      <View style={{marginTop: 60}}>
        <Divider style={{backgroundColor: 'grey', height: 1, marginBottom: 10}}/>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '30%', alignItems: 'center', marginLeft: 20, justifyContent: 'center'}}>
            <Image source={assets.ptcircle} style={{width: 130, height: 130, borderColor: '#E6E6FA', borderWidth: 7, borderRadius: 65}}></Image>
            <Text style={{marginTop: 10}}>PORTUGAL</Text>
          </View>
          <View style={{width: '70%', alignItems: 'flex-start', marginRight: 20, justifyContent: 'center', marginLeft: 60}}>
            <Pressable onPress={() => Linking.openURL("https://www.rtp.pt/rtp1")} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>RTP 1</Text><Text>{'>'}</Text></Pressable>
            <Pressable onPress={() => Linking.openURL("https://www.rtp.pt/play/direto/rtp1")} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>RTP Play</Text><Text>{'>'}</Text></Pressable>
            <Pressable onPress={() => Linking.openURL("https://www.sporttv.pt/")} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>SPORT TV1</Text><Text>{'>'}</Text></Pressable>
          </View>
        </View>
        <Divider style={{backgroundColor: 'grey', height: 1, marginVertical: 10}}/>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '30%', alignItems: 'center', marginLeft: 20, justifyContent: 'center'}}>
            <Image source={assets.engcircle} style={{width: 130, height: 130, borderColor: '#E6E6FA', borderWidth: 7, borderRadius: 65}}></Image>
            <Text style={{marginTop: 10}}>ENGLAND</Text>
          </View>
          <View style={{width: '70%', alignItems: 'flex-start', marginRight: 20, justifyContent: 'center', marginLeft: 60}}>
          <Pressable onPress={() => Linking.openURL("https://www.skysports.com/")} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>Sky Sports 1</Text><Text>{'>'}</Text></Pressable>
          <Pressable onPress={() => Linking.openURL("https://www.espn.co.uk/")} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>ESPN UK</Text><Text>{'>'}</Text></Pressable>
          </View>
        </View>
        <Divider style={{backgroundColor: 'grey', height: 1, marginVertical: 10}}/>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '30%', alignItems: 'center', marginLeft: 20, justifyContent: 'center'}}>
            <Image source={assets.uscircle} style={{width: 130, height: 130, borderColor: '#f2efee', borderWidth: 7, borderRadius: 65}}></Image>
            <Text style={{marginTop: 10}}>USA</Text>
          </View>
          <View style={{width: '70%', alignItems: 'flex-start', marginRight: 20, justifyContent: 'center', marginLeft: 60}}>
          <Pressable onPress={() => Linking.openURL("https://www.beinsports.com/site-locator")} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>beIN Sport 1</Text><Text>{'>'}</Text></Pressable>
          <Pressable onPress={() => Linking.openURL("https://www.espnplayer.com/packages")} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>ESPN 3</Text><Text>{'>'}</Text></Pressable>
          <Pressable onPress={() => Linking.openURL("https://www.nbcsports.com/")} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>NBCSN</Text><Text>{'>'}</Text></Pressable>
          </View>
        </View>
      </View>
    </Modal>
    <Pressable style={{height: 50, backgroundColor: '#36454F', borderBottomEndRadius: 12, borderBottomStartRadius: 12, alignItems: 'center', justifyContent: 'center'}} onPress={handleOpen}>
      <Text style={{color: 'white', fontWeight: '700'}}>WATCH LIVE ON TV</Text>
    </Pressable>
    <View style={{marginTop: 15, justifyContent: 'center', alignItems: 'center',}}>
        <Text style={{backgroundColor: 'white', color: 'red', paddingHorizontal: 5, marginBottom: -10, borderRadius: 3}}>{data.time}'</Text>
        <Image source={assets.livehead} style={{}}></Image>
        <View style={{position: 'absolute', top: 0, height: 70, width: 2, backgroundColor: '#E5E4E2', alignSelf: 'center', zIndex: -1}}></View>
      </View>
    <LiveBranch what={"sub"} player1={"José Matis"} player2={"Lola Lilo"} time={73} side={"left"}/>
    <LiveBranch what={"goal"} player1={"José Matis"} player2={"Lola Lilo"} time={53} side={"left"}/>
    <LiveBranch what={"goal"} player1={"José Matis"} player2={"Lola Lilo"} time={42} side={"left"}/>
    <LiveBranch what={"sub"} player1={"José Matis"} player2={"Lola Lilo"} time={32} side={"right"}/>
    <LiveBranch what={"goal"} player1={"José Matis"} player2={"Lola Lilo"} time={28} side={"right"}/>
    <LiveBranch what={"yellow"} player1={"José Matis"} time={27} side={"right"}/>
    <LiveBranch what={"red"} player1={"José Matis"} time={16} side={"left"}/>
    <LiveBranch what={"goal"} player1={"José Matis"} time={8} side={"right"}/></>
    : <>
    <View style={{flexDirection: 'row', left: 10, top: 20, position: 'absolute'}}><MaterialCommunityIcons name="broadcast" size={26} color="black" /><Text style={{fontSize: 20, fontWeight: '700', marginLeft: 10}}>BROADCAST CHANNELS</Text></View>
      <View style={{marginTop: 60}}>
        <Divider style={{backgroundColor: 'grey', height: 1, marginBottom: 10}}/>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '30%', alignItems: 'center', marginLeft: 20, justifyContent: 'center'}}>
            <Image source={assets.ptcircle} style={{width: 130, height: 130, borderColor: '#E6E6FA', borderWidth: 7, borderRadius: 65}}></Image>
            <Text style={{marginTop: 10}}>PORTUGAL</Text>
          </View>
          <View style={{width: '70%', alignItems: 'flex-start', marginRight: 20, justifyContent: 'center', marginLeft: 60}}>
            <Pressable onPress={() => Linking.openURL("https://www.rtp.pt/rtp1")} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>RTP 1</Text><Text>{'>'}</Text></Pressable>
            <Pressable onPress={() => Linking.openURL("https://www.rtp.pt/play/direto/rtp1")} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>RTP Play</Text><Text>{'>'}</Text></Pressable>
            <Pressable onPress={() => Linking.openURL("https://www.sporttv.pt/")} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>SPORT TV1</Text><Text>{'>'}</Text></Pressable>
          </View>
        </View>
        <Divider style={{backgroundColor: 'grey', height: 1, marginVertical: 10}}/>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '30%', alignItems: 'center', marginLeft: 20, justifyContent: 'center'}}>
            <Image source={assets.engcircle} style={{width: 130, height: 130, borderColor: '#E6E6FA', borderWidth: 7, borderRadius: 65}}></Image>
            <Text style={{marginTop: 10}}>ENGLAND</Text>
          </View>
          <View style={{width: '70%', alignItems: 'flex-start', marginRight: 20, justifyContent: 'center', marginLeft: 60}}>
          <Pressable onPress={() => Linking.openURL("https://www.skysports.com/")} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>Sky Sports 1</Text><Text>{'>'}</Text></Pressable>
          <Pressable onPress={() => Linking.openURL("https://www.espn.co.uk/")} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>ESPN UK</Text><Text>{'>'}</Text></Pressable>
          </View>
        </View>
        <Divider style={{backgroundColor: 'grey', height: 1, marginVertical: 10}}/>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={{width: '30%', alignItems: 'center', marginLeft: 20, justifyContent: 'center'}}>
            <Image source={assets.uscircle} style={{width: 130, height: 130, borderColor: '#f2efee', borderWidth: 7, borderRadius: 65}}></Image>
            <Text style={{marginTop: 10}}>USA</Text>
          </View>
          <View style={{width: '70%', alignItems: 'flex-start', marginRight: 20, justifyContent: 'center', marginLeft: 60}}>
          <Pressable onPress={() => Linking.openURL("https://www.beinsports.com/site-locator")} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>beIN Sport 1</Text><Text>{'>'}</Text></Pressable>
          <Pressable onPress={() => Linking.openURL("https://www.espnplayer.com/packages")} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>ESPN 3</Text><Text>{'>'}</Text></Pressable>
          <Pressable onPress={() => Linking.openURL("https://www.nbcsports.com/")} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', borderBottomColor: 'grey', borderBottomWidth: 1}}><Text style={{marginVertical: 10}}>NBCSN</Text><Text>{'>'}</Text></Pressable>
          </View>
        </View>
      </View>
      </> 
    }
  </ScrollView>
  );
}

let myData;

const Lineup = () => (
  <View style={{flex: 1, backgroundColor: '#ffffff'}}>
     <FootballField home={home} away={away} />
  </View>
);

const Stats = () => (
  <ScrollView style={{ flex: 1, backgroundColor: 'white'}}>
        <PercentageRing percent={80} innerText={"ODDS%"} fontSize={30}/>
        <PercentageBlock poscases={45.2} negcases={54.8} innerText={"POSSESSION"} percent/>
        <PercentageBlock poscases={15} negcases={12} innerText={"TOTAL SHOTS"}/>
        <PercentageBlock poscases={10} negcases={2} innerText={"SHOTS ON TARGET"}/>
        <PercentageBlock poscases={2} negcases={3} innerText={"CORNERS"}/>
        <PercentageBlock poscases={19} negcases={13} innerText={"DUELS WON"}/>
        <PercentageBlock poscases={6} negcases={4} innerText={"OFFSIDES"}/>
        <PercentageBlock poscases={10} negcases={5} innerText={"SHOTS INSIDE BOX"}/>
        <PercentageBlock poscases={5} negcases={7} innerText={"SHOTS OUTSIDE BOX"}/>
        <PercentageBlock poscases={21} negcases={26} innerText={"TACKLES"}/>
        <PercentageBlock poscases={21} negcases={21} innerText={"CLEARANCES"}/>
        <PercentageBlock poscases={11} negcases={16} innerText={"INTERCEPTIONS"}/>
        <PercentageBlock poscases={643} negcases={355} innerText={"TOTAL PASSES"}/>
        <PercentageBlock poscases={88.4} negcases={67.6} innerText={"PASS ACCURACY"} percent/>
        <PercentageBlock poscases={21} negcases={19} innerText={"CROSSES"}/>
        <PercentageBlock poscases={12} negcases={20} innerText={"FOULS CONCEDED"}/>
        <PercentageBlock poscases={2} negcases={5} innerText={"YELLOW CARDS"}/>
        <PercentageBlock poscases={0} negcases={0} innerText={"RED CARDS"}/>
  </ScrollView>
);

const Details = () => (
  <SafeAreaView style={{backgroundColor: '#ffffff'}}>
  <View style={styles.div}>
    <Text style={styles.title}>Competition</Text>
    <Text style={styles.subtitle}>Liga das Nações</Text>
  </View>
  <View style={styles.div}>
    <Text style={styles.title}>Kick off</Text>
    <Text style={styles.subtitle}>Sexta 2 junho 19:45</Text>
  </View>
  <View style={styles.div}>
    <Text style={styles.title}>Attendance</Text>
    <Text style={styles.subtitle}>60 721</Text>
  </View>
  <View style={styles.div}>
    <Text style={styles.title}>Stadium</Text>
    <Text style={styles.subtitle}>Benito Villamarín</Text>
  </View>
  <View style={styles.div}>
    <Text style={styles.title}>Referee</Text>
    <Text style={styles.subtitle}>Michael Oliver</Text>
  </View>
  <View style={styles.div}>
    <Text style={styles.title}>Broadcast</Text>
    <Text style={styles.subtitle}>Sport TV</Text>
  </View>
  <View style={{height: 100, backgroundColor: '#ffffff'}}/>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  div: {
    height: 80, 
    padding: 10
  },
  title: {
    fontSize: 20, 
    fontWeight: "bold",
    paddingLeft: 10,
  },
  OverviewInfo: {
    fontSize: 26, 
    fontWeight: "bold",
    paddingLeft: 10,
  },
  titleL: {
    fontSize: 26, 
    fontWeight: "bold",
    marginRight: 100,
  },
  titleR: {
    fontSize: 26, 
    fontWeight: "bold",
    marginLeft: 100,
    textAlign: 'right',
  },
  subtitle: {
    fontSize: 18, 
    paddingLeft: 40, 
    paddingTop: 10
  },
});

const renderScene = ({ route }) => {
  switch (route.key) {
    case 'first':
      return <Overview data={myData} />;
    case 'second':
      return <Lineup />;
    case 'third':
        return <Stats />;
    case 'fourth':
      return <Details />;  
    default:
      return null;
  }
};

const Match = ({ route, navigation }) => {
  const { data, date } = route.params;

  const layout = useWindowDimensions();
  const lastNameRef = useRef();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Overview' },
    { key: 'second', title: 'Line-up' },
    { key: 'third', title: 'Stats' },
    { key: 'fourth', title: 'Details' },
  ]);

  myData = data
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MatchHeader navigation={navigation} data={data} date={date}/>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
};

export default Match;
