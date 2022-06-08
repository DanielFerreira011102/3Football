import React, {useState} from "react";
import { SafeAreaView, Text, ScrollView, View, useWindowDimensions, Image } from "react-native";
import { TabView,SceneMap } from 'react-native-tab-view';
import { assets } from "../../constants";
import { EventHeader } from "../../components";

const TableRoute = () => {
  return(
    <Image
    source={assets.pltable}
  />
  );
};
const MatchesRoute = () => {
  return(
    <Image
    source={assets.plmatches}
  />
  );
};
const StatsRoute = () => {
  return(
    <Image
    source={assets.plstats}
  />
  );
};


const renderScene = SceneMap({
  first: TableRoute,
  second: MatchesRoute,
  third: StatsRoute,
});

const Evento = ( { navigation }) => {

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Table' },
    { key: 'second', title: 'Matches' },
    { key: 'third', title: 'Stats' },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <EventHeader navigation={navigation} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
};

export default Evento;
