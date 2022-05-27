import React, {useState} from "react";
import { SafeAreaView, Text, ScrollView, View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const thirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#3a5aab' }} />
);

const fourthRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#b4c4c7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: thirdRoute,
  fourth: fourthRoute,
});

const Player = () => {

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'third', title: 'Third' },
    { key: 'fourth', title: 'Fourth' },
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
