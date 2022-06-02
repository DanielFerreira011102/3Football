import React, {useState} from "react";
import { SafeAreaView, Text, ScrollView, View, useWindowDimensions, Image } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
//import trofeus from '../../../assets/images/trophy.png';

const ProfileRoute = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }} >
    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, paddingRight: 10 }}>
      <Text style={{ fontSize: 18 }}>O melhor jogador de Portugal, uma incrível lenda viva, um prodígio desde pequeno</Text>
    </View>
  </SafeAreaView>
);

// <Image source={trofeus} resizeMode={'stretch'} style={{width: '100%', height: '35%', marginLeft: 0}}/>

const CareerRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
     <Text style={{ fontSize: 20, paddingTop: 30, paddingLeft: 10 }}>Atualmente joga na melhor liga do mundo</Text>
  </View>
);

const renderScene = SceneMap({
  first: ProfileRoute,
  second: CareerRoute,
});

const Player = () => {

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Profile' },
    { key: 'second', title: 'Career' },
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
