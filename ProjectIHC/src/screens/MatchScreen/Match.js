import React, {useState, useRef} from "react";
import { SafeAreaView, Text, ScrollView, View, useWindowDimensions, Image, StyleSheet, } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import { assets } from "../../constants";
import { FootballField, MatchHeader, PercentageRing, PercentageBlock, LiveBranch } from '../../components';
import {home, away, COLORS} from '../../constants'

const Overview = ({data}) => (
  <ScrollView style={{backgroundColor: 'white'}}>
    { data.status == "LIVE"?
    <><View style={{marginVertical: 15, justifyContent: 'center', alignItems: 'center',}}>
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
    : null }
  </ScrollView>
);

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
