import React, {useState} from "react";
import { SafeAreaView, Text, ScrollView, View, useWindowDimensions, Image } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import { assets, COLORS } from "../../constants";
import { PlayerHeader } from "../../components";

const ProfileRoute = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }} >
    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, paddingRight: 10 }}>
      <Text style={{ fontSize: 18 }}>O melhor jogador de Portugal, uma incrível lenda viva, um prodígio desde pequeno</Text>
    </View>
  </SafeAreaView>
);


const CareerRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
    <Image source={assets.trofeus} resizeMode={'stretch'} style={{width: '100%', height: '35%', marginLeft: 0}}/>
    <Text style={{ fontSize: 20, paddingTop: 30, paddingLeft: 10 }}>Atualmente joga na melhor liga do mundo</Text>
  </View>
);

const renderScene = SceneMap({
  first: ProfileRoute,
  second: CareerRoute,
});

const Player = ({ navigation }) => {

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Profile' },
    { key: 'second', title: 'Career' },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PlayerHeader navigation={navigation} />
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
