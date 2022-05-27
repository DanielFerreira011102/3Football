import React, {useState} from "react";
import { SafeAreaView, Text, ScrollView, View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';

const Overview = () => (
  <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#ff4081' }}><View style={{height: '120%'}}><Text style={{fontSize: 200}}>juefeddedededhef</Text></View></ ScrollView>
);

const Lineup = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const Stats = () => (
  <View style={{ flex: 1, backgroundColor: '#3a5aab' }} />
);

const Details = () => (
  <View style={{ flex: 1, backgroundColor: '#b4c4c7' }} />
);

const renderScene = SceneMap({
  first: Overview,
  second: Lineup,
  third: Stats,
  fourth: Details,
});

const Match = () => {

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Overview' },
    { key: 'second', title: 'Line-up' },
    { key: 'third', title: 'Stats' },
    { key: 'fourth', title: 'Details' },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{height: 200}}></View>
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
