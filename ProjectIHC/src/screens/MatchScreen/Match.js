import React, {useState, useRef} from "react";
import { SafeAreaView, Text, View, useWindowDimensions, Image, StyleSheet, Button, Pressable, ScrollView} from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import { assets } from "../../constants";
import { FootballField, MatchHeader, PercentageRing, PercentageBlock, LiveBranch, BROADCASTCard, BENCHCard } from '../../components';
import {home, away, COLORS} from '../../constants';
import { Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Overview = ({data}) => {

  const sheetRef = React.useRef(null);

  const renderContent = () => (
          <ScrollView style={{zIndex : 10, backgroundColor: 'white', height: 940}}>
                <Pressable style={{right: 15, top: 15, position: 'absolute'}} onPress={() => {sheetRef.current.snapTo(2)}}><Image source={assets.close} style={{width: 40, height: 40}}></Image></Pressable>
                <View style={{flexDirection: 'row', left: 10, top: 25, position: 'absolute', height: '100%', backgroundColor: 'white'}}><MaterialCommunityIcons name="broadcast" size={26} color="black" /><Text style={{fontSize: 20, fontWeight: '700', marginLeft: 10}}>BROADCAST CHANNELS</Text></View>
                <View style={{marginTop: 60}}>
                  <BROADCASTCard isFirst={true} img={assets.ptcircle} country={"PORTUGAL"} channels={[{link: 'https://www.rtp.pt/rtp1', name: 'RTP1'}, {link: 'https://www.rtp.pt/play/direto/rtp1', name: 'RTP Play'}, {link: 'https://www.sporttv.pt/', name: 'SPORT TV1'}]}/>
                  <BROADCASTCard img={assets.engcircle} country={"ENGLAND"} channels={[{link: 'https://www.skysports.com/', name: 'Sky Sports 1'}, {link: 'https://www.espn.co.uk/', name: 'ESPN UK'}]}/>
                  <BROADCASTCard isLast={true} img={assets.uscircle} country={"USA"} channels={[{link: 'https://www.beinsports.com/site-locator', name: 'beIN Sport 1'}, {link: 'https://www.espnplayer.com/packages', name: 'ESPN 3'}, {link: 'https://www.nbcsports.com/', name: 'NBCSN'}]}/>
                </View>
          </ScrollView>
    );

  return (
  <ScrollView contentContainerStyle={{}} style={{backgroundColor: 'white', zIndex: 1}}>
    { data.status == "LIVE"?
    <>
    <BottomSheet
        ref={sheetRef}
        snapPoints={[0, windowHeight + 55, 0]}
        borderRadius={10}
        enabledInnerScrolling={true}
        renderContent={renderContent}
    />
    <Pressable style={{height: 50, backgroundColor: '#36454F', borderBottomEndRadius: 12, borderBottomStartRadius: 12, alignItems: 'center', justifyContent: 'center', zIndex: 2}} onPress={() => sheetRef.current.snapTo(1)}>
      <Text style={{color: 'white', fontWeight: '700'}}>WATCH LIVE ON TV</Text>
    </Pressable>
    <View style={{marginTop: 15, justifyContent: 'center', alignItems: 'center',}}>
        <Text style={{backgroundColor: 'white', color: 'red', paddingHorizontal: 5, marginBottom: -10, borderRadius: 3}}>{data.time}'</Text>
        <Image source={assets.livehead} style={{}}></Image>
        <View style={{position: 'absolute', top: 0, height: 70, width: 2, backgroundColor: '#E5E4E2', alignSelf: 'center', zIndex: -1}}></View>
    </View>
    <LiveBranch what={"sub"} player1={"José Matis"} player2={"Lola Lilo"} time={73} side={"left"}/>
    <LiveBranch what={"goal"} player1={"José Matis"} player2={"Lola Lilo"} time={53} side={"left"}/>
    <View style={{marginVertical: 30, justifyContent: 'center', alignItems: 'center',}}>
        <Image source={assets.halftime} style={{}}></Image>
    </View>
    <LiveBranch makeTop={true} what={"goal"} player1={"José Matis"} player2={"Lola Lilo"} time={42} side={"left"}/>
    <LiveBranch what={"sub"} player1={"José Matis"} player2={"Lola Lilo"} time={32} side={"right"}/>
    <LiveBranch what={"goal"} player1={"José Matis"} player2={"Lola Lilo"} time={28} side={"right"}/>
    <LiveBranch what={"yellow"} player1={"José Matis"} time={27} side={"right"}/>
    <LiveBranch what={"red"} player1={"José Matis"} time={16} side={"left"}/>
    <LiveBranch what={"goal"} player1={"José Matis"} time={8} side={"right"}/>
    <View style={{marginBottom: 15, justifyContent: 'center', alignItems: 'center',}}>
        <Image source={assets.kickoff} style={{marginTop: 10}}></Image>
        <View style={{position: 'absolute', bottom: 0, height: 70, width: 2, backgroundColor: '#E5E4E2', alignSelf: 'center', zIndex: -1}}></View>
    </View>
    
    </>
    : data.status == "NS"?
    <>
    <View style={{flexDirection: 'row', left: 10, top: 20, position: 'absolute'}}><MaterialCommunityIcons name="broadcast" size={26} color="black" /><Text style={{fontSize: 20, fontWeight: '700', marginLeft: 10}}>BROADCAST CHANNELS</Text></View>
      <View style={{marginTop: 60}}>
        <BROADCASTCard isFirst={true} img={assets.ptcircle} country={"PORTUGAL"} channels={[{link: 'https://www.rtp.pt/rtp1', name: 'RTP1'}, {link: 'https://www.rtp.pt/play/direto/rtp1', name: 'RTP Play'}, {link: 'https://www.sporttv.pt/', name: 'SPORT TV1'}]}/>
        <BROADCASTCard img={assets.engcircle} country={"ENGLAND"} channels={[{link: 'https://www.skysports.com/', name: 'Sky Sports 1'}, {link: 'https://www.espn.co.uk/', name: 'ESPN UK'}]}/>
        <BROADCASTCard isLast={true} img={assets.uscircle} country={"USA"} channels={[{link: 'https://www.beinsports.com/site-locator', name: 'beIN Sport 1'}, {link: 'https://www.espnplayer.com/packages', name: 'ESPN 3'}, {link: 'https://www.nbcsports.com/', name: 'NBCSN'}]}/>
      </View>
      </>
      :
      <>
      <View style={{marginTop: 15, justifyContent: 'center', alignItems: 'center',}}>
        <Image source={assets.endtime} style={{marginBottom: 10}}></Image>
        <View style={{position: 'absolute', top: 0, height: 70, width: 2, backgroundColor: '#E5E4E2', alignSelf: 'center', zIndex: -1}}></View>
      </View>
      <LiveBranch what={"sub"} player1={"José Matis"} player2={"Lola Lilo"} time={73} side={"left"}/>
      <LiveBranch what={"goal"} player1={"José Matis"} player2={"Lola Lilo"} time={53} side={"left"}/>
      <View style={{marginVertical: 30, justifyContent: 'center', alignItems: 'center',}}>
        <Image source={assets.halftime} style={{}}></Image>
      </View>
      <LiveBranch makeTop={true} what={"goal"} player1={"José Matis"} player2={"Lola Lilo"} time={42} side={"left"}/>
      <LiveBranch what={"sub"} player1={"José Matis"} player2={"Lola Lilo"} time={32} side={"right"}/>
      <LiveBranch what={"goal"} player1={"José Matis"} player2={"Lola Lilo"} time={28} side={"right"}/>
      <LiveBranch what={"yellow"} player1={"José Matis"} time={27} side={"right"}/>
      <LiveBranch what={"red"} player1={"José Matis"} time={16} side={"left"}/>
      <LiveBranch what={"goal"} player1={"José Matis"} time={8} side={"right"}/>
      <View style={{marginBottom: 15, justifyContent: 'center', alignItems: 'center',}}>
        <Image source={assets.kickoff} style={{marginTop: 10}}></Image>
        <View style={{position: 'absolute', bottom: 0, height: 70, width: 2, backgroundColor: '#E5E4E2', alignSelf: 'center', zIndex: -1}}></View>
      </View>
    </>
    }
  </ScrollView>
  );
}

let myData;
let navig;


const Lineup = ( {data} ) => (
<ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
    <FootballField home={home} away={away} />
    <Divider style={{backgroundColor: 'grey', height: 1, marginTop: 8}} />
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{width: 20, height: '100%', backgroundColor: 'rgba(244, 67, 54,0.5)', borderRightColor: 'rgb(244, 67, 54)', borderRightWidth: 1}}></View>
      <Text style={{fontSize: 18, fontWeight: '700', paddingLeft: 15, marginVertical: 8}}>{data.team2.name.toUpperCase()} BENCH</Text>
    </View>
    <Divider style={{backgroundColor: 'grey', height: 1, marginBottom: 8}} />
    <BENCHCard name={"Matheus Nunes"} number={23}/>
    <BENCHCard name={"Ruben Neves"} number={18}/>
    <BENCHCard name={"Diogo Dalot"} number={2}/>
    <BENCHCard name={"Rui Silva"} number={12}/>
    <BENCHCard name={"Goncalo Guedes"} number={17}/>
    <BENCHCard name={"William Carvalho"} number={14}/>
    <BENCHCard name={"Cristiano Ronaldo"} number={7}/>
    <BENCHCard name={"João Palinha"} number={6}/>
    <BENCHCard name={"Nuno Mendes"} number={19}/>
    <BENCHCard name={"Ricardo Horta"} number={21}/>
    <BENCHCard name={"David Carmo"} number={4}/>
    <BENCHCard name={"Rui Patricio"} number={1}/>
    <BENCHCard name={"Daniel Ferreira"} number={0} isLast={true}/>
    <Divider style={{backgroundColor: 'grey', height: 1}} />
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{width: 20, height: '100%', backgroundColor: 'rgba(3, 169, 244,0.5)', borderRightColor: 'rgb(3, 169, 244)', borderRightWidth: 1}}></View>
      <Text style={{fontSize: 18, fontWeight: '700', paddingLeft: 15, marginVertical: 8}}>{data.team2.name.toUpperCase()} BENCH</Text>
    </View>
    <Divider style={{backgroundColor: 'grey', height: 1, marginBottom: 8}} />
    <BENCHCard name={"Matheus Nunes"} number={23}/>
    <BENCHCard name={"Ruben Neves"} number={18}/>
    <BENCHCard name={"Diogo Dalot"} number={2}/>
    <BENCHCard name={"Rui Silva"} number={12}/>
    <BENCHCard name={"Goncalo Guedes"} number={17}/>
    <BENCHCard name={"William Carvalho"} number={14}/>
    <BENCHCard name={"Cristiano Ronaldo"} number={7}/>
    <BENCHCard name={"João Palinha"} number={6}/>
    <BENCHCard name={"Nuno Mendes"} number={19}/>
    <BENCHCard name={"Ricardo Horta"} number={21}/>
    <BENCHCard name={"David Carmo"} number={4}/>
    <BENCHCard name={"Rui Patricio"} number={1}/>
    <BENCHCard name={"Daniel Ferreira"} number={0} isLast={true}/>
  </ScrollView>
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

const TeamCircle = ({teamImg, ...props}) => {
  return (
    <View style={[styles1.circle, {...props}]} >
      <Image style={{flex:1 , width: 55, height: 55, resizeMode: 'contain'}} source={teamImg}></Image>
    </View>
  )
};


const styles1 = StyleSheet.create({
  circle: {
    position: 'absolute',
    zIndex: -1,
  },
});

const Details = ({data}) => (
  <ScrollView style={{backgroundColor: '#ffffff'}}>
  <View style={{height: 150, alignItems: 'center', marginTop: 15}}>
    <Text style={{fontSize: 20, fontWeight: '800'}}>Head to Head</Text>
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: 15}}>
      <TeamCircle left={35} teamImg={data.team1.img}/>
      <View style={{alignItems: 'center'}}><Text style={styles.numbers}>6</Text><Text style={styles.wins}>WINS</Text></View>
      <View style={styles.verticleLine}></View>
      <View style={{alignItems: 'center'}}><Text style={styles.numbers}>1</Text><Text style={styles.wins}>DRAW</Text></View>
      <View style={styles.verticleLine}></View>
      <View style={{alignItems: 'center'}}><Text style={styles.numbers}>3</Text><Text style={styles.wins}>WINS</Text></View>
      <TeamCircle right={35} teamImg={data.team2.img}/>
    </View>
  </View>
  <Divider style={{backgroundColor: 'grey', height: 1, marginBottom: 10, width: '95%', alignSelf: 'center'}}/>
  <View style={styles.div}>
    <Text style={[styles.title, {paddingTop: 0}]}>Competition</Text>
    <Pressable style={styles.nice}>
      <Text>{'\u2022'}</Text>
      <Text style={styles.subtitle}>Liga das Nações</Text>
    </Pressable>
  </View>
  <View style={styles.div}>
    <Text style={styles.title}>Kick off</Text>
    <Pressable style={styles.nice}>
      <Text>{'\u2022'}</Text>
      <Text style={styles.subtitle}>Sexta 2 junho 19:45</Text>
    </Pressable>
  </View>
  <View style={styles.div}>
    <Text style={styles.title}>Attendance</Text>
    <Pressable style={styles.nice}>
      <Text>{'\u2022'}</Text>
      <Text style={styles.subtitle}>60 721</Text>
    </Pressable>
  </View>
  <View style={styles.div}>
    <Text style={styles.title}>Stadium</Text>
    <Pressable style={styles.nice} onPress={() => {navig.navigate("Map")}}>
      <Text>{'\u2022'}</Text>
      <Text style={styles.subtitle}>Benito Villamarín</Text>
    </Pressable>
  </View>
  <View style={styles.div}>
    <Text style={styles.title}>Referee</Text>
    <Pressable style={styles.nice}>
      <Text>{'\u2022'}</Text>
      <Text style={styles.subtitle}>Michael Oliver</Text>
    </Pressable>
  </View>
  <View style={styles.div}>
    <Text style={styles.title}>Broadcast</Text>
    <Pressable style={styles.nice}><Text>{'\u2022'}</Text><Text style={styles.subtitle}>SPORT TV1</Text></Pressable>
    <Pressable style={styles.nice}><Text>{'\u2022'}</Text><Text style={styles.subtitle}>RTP1</Text></Pressable>
    <Pressable style={styles.nice}><Text>{'\u2022'}</Text><Text style={styles.subtitle}>RTP Play</Text></Pressable>
    <Pressable style={styles.nice}><Text>{'\u2022'}</Text><Text style={styles.subtitle}>Sky Sports 1</Text></Pressable>
    <Pressable style={styles.nice}><Text>{'\u2022'}</Text><Text style={styles.subtitle}>ESPN UK</Text></Pressable>
    <Pressable style={styles.nice}><Text>{'\u2022'}</Text><Text style={styles.subtitle}>beIN Sport 1</Text></Pressable>
    <Pressable style={styles.nice}><Text>{'\u2022'}</Text><Text style={styles.subtitle}>ESPN 3</Text></Pressable>
    <Pressable style={styles.nice}><Text>{'\u2022'}</Text><Text style={styles.subtitle}>NCBSN</Text></Pressable>
  <View style={{height: 100, backgroundColor: '#ffffff'}}/>
  </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  div: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20, 
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 20
  },
  OverviewInfo: {
    fontSize: 26, 
    fontWeight: "bold",
    paddingLeft: 10,
  },
  titleL: {
    fontWeight: '800',
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
    paddingLeft: 25, 
  },
  nice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    paddingTop: 5,
  },
  verticleLine: {
    height: 75,
    width: 1,
    backgroundColor: '#909090',
  },
  numbers: {
    fontSize: 30,
    color: '#353935',
    paddingHorizontal: 25,
    fontWeight: 'bold',
  },
  wins: {
    color: '#bababa',
  }
});

const renderScene = ({ route }) => {
  switch (route.key) {
    case 'first':
      return <Overview data={myData} />;
    case 'second':
      return <Lineup data={myData} navigation={navig} />;
    case 'third':
        return <Stats />;
    case 'fourth':
      return <Details data={myData} />;  
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
  navig = useNavigation();
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
