import React, {useState, useRef} from "react";
import { SafeAreaView, Text, ScrollView, View, useWindowDimensions, Image, StyleSheet, TouchableHighlight } from "react-native";
import { CircleButton } from "../../components";
import { TabView, SceneMap } from 'react-native-tab-view';
import { assets } from "../../constants";

const Overview = () => (
  <SafeAreaView style={{backgroundColor: '#ffffff'}}>
  <Image source={assets.bola}  style={{width: 40, height: 40, marginLeft: 40, marginRight: 20}}/>
  <View style={styles.div}>
    <Text style={styles.titleL}>32' Player 7</Text>
  </View>
  <View style={styles.div}>
    <Text style={styles.titleR}>41' Player 22</Text>
  </View>
  <View style={styles.div}>
    <Text style={styles.titleL}>61' Player 75</Text>
  </View>
  <View style={styles.div}>
    <Text style={styles.titleL}>78' Player 34</Text>
  </View>
  <View style={styles.div}>
    <Text style={styles.titleR}>84' Player 11</Text>
  </View>
  <View style={{height: 100, backgroundColor: '#ffffff'}}/>
  </SafeAreaView>
);


const Lineup = () => (
  <View style={{flex: 1, backgroundColor: '#ffffff'}}>
    <Image source={assets.lineUpTeam1}  style={{width: '80%', height: '100%', marginLeft: 40, marginRight: 20}}/>
  </View>
);

const Stats = () => (
  <View style={{ flex: 1, backgroundColor: '#000000'}}>
    <Image source={assets.matchStats} resizeMode={'stretch'} style={{width: '100%', height: '108%', marginLeft: 0}}/>
  </View>
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

const renderScene = SceneMap({
  first: Overview,
  second: Lineup,
  third: Stats,
  fourth: Details,
});

const Match = ({ navigation }) => {

  const layout = useWindowDimensions();
  const lastNameRef = useRef();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Overview' },
    { key: 'second', title: 'Line-up' },
    { key: 'third', title: 'Stats' },
    { key: 'fourth', title: 'Details' },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{height: 150, backgroundColor: '#4e1e85'}}>
        <View style={{marginLeft: 20, marginTop: 20, backgroundColor: '#000000'}}>
        <CircleButton imgUrl={assets.left}
        handlePress={() => {navigation.goBack()}}/>
        </View>
      </View>
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
