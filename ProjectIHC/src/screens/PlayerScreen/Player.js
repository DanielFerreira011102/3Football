import React, {useState} from "react";
import { SafeAreaView, Text, ScrollView, View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';

const ProfileRoute = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const StatsRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#3a5aab' }} />
);

const CareerRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: ProfileRoute,
  second: StatsRoute,
  third: CareerRoute,
});

const Player = () => {

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Profile' },
    { key: 'second', title: 'Stats' },
    { key: 'third', title: 'Career' },
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

export default Player;
