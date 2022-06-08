import React, {useState} from "react";
import { SafeAreaView, Text, ScrollView, View, useWindowDimensions, Image } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import { assets, COLORS } from "../../constants";
import { PlayerHeader } from "../../components";
import { Divider } from 'react-native-paper';

const ProfileRoute = () => {

  const StatBox = ({title, value}) => {
    return (
      <View style={{backgroundColor: 'rgba(105,105,105,0.2)', alignItems: 'center', justifyContent: 'center', height: '100%' , width: '28%' , borderRadius: 10}}>
        <Text style={{fontSize: 20, fontWeight: '700', textAlign: 'center'}}>{title}</Text>
        <Text style={{color: 'grey', textAlign: 'center', fontSize: 15}}>{value}</Text>
      </View>
    )
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }} >
      <View style={{ flex: 1, marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly', height: 100, width: '100%' }}>
        <StatBox title={"Country"} value={"France"}/><StatBox title={"Age"} value={49} /><StatBox title={"Height"} value={"185 cm"} />
      </View>
      <View style={{ flex: 1, marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly', height: 100, width: '100%'  }}>
        <StatBox title={"Foot"} value={"Right"}/><StatBox title={"Position"} value={"Forward"} /><StatBox title={"Number"} value={21} />
      </View>
      <View style={{ flex: 1, marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly', height: 100, width: '100%'  }}>
        <StatBox title={"Weight"} value={"78 kg"}/><StatBox title={"Market Value"} value={"40 Million"} /><StatBox title={"Avg.   Rating"} value={8.8} />
      </View>
      <Divider width={'96%'} style={{backgroundColor: '#808080', height: 1, marginTop: 11, marginBottom: 7, alignSelf: 'center'}} />
      <Text style={{fontSize: 22, fontWeight: '700', marginLeft: 20, color: '#585858'}}>ABOUT</Text>
      <Divider width={'96%'} style={{backgroundColor: '#808080', height: 1, marginTop: 7, marginBottom: 11, alignSelf: 'center'}} />
      <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', overflow: 'hidden', marginBottom: 10, paddingHorizontal: 10,}}>
        <View>
          <Text style={{fontSize: 16, fontWeight: '700', marginBottom: 5, textAlign: 'center'}}>HEAT MAP</Text>
          <Image source={assets.heatmap} resizeMode='stretch' borderRadius={10} style={{width: 200, height: 305, borderWidth: 1, borderColor: 'rgba(0,0,0,0.4)'}}></Image>
          <Text style={{fontSize: 16, fontWeight: '700', marginBottom: 5, marginTop: 15, textAlign: 'center'}}>POSITIONS PLAYED</Text>
          <Image source={assets.zidanepos} resizeMode='stretch' borderRadius={10} style={{width: 200, height: 200, borderWidth: 1, borderColor: 'rgba(0,0,0,0.4)'}}></Image>
        </View>
        <View style={{paddingLeft: 0}}>
        <View style={{marginBottom: 10, marginLeft: 8}}>
            <Text style={{fontSize: 16, fontWeight: '700',}}>TEAM</Text>
            <Text style={{color: 'grey',}}>Real Madrid</Text>
          </View>
          <View style={{marginBottom: 10, marginLeft: 8}}>
            <Text style={{fontSize: 16, fontWeight: '700',}}>FULL NAME</Text>
            <Text style={{color: 'grey',}}>Zinédine Yazid Zidane</Text>
          </View>
          <View style={{marginBottom: 10, marginLeft: 8}}>
            <Text style={{fontSize: 16, fontWeight: '700',}}>BIRTHDAY</Text>
            <Text style={{color: 'grey',}}>June 23, 1972, Marseille</Text>
          </View>
          <View style={{marginBottom: 10, marginLeft: 8}}>
            <Text style={{fontSize: 16, fontWeight: '700',}}>ORIGIN</Text>
            <Text style={{color: 'grey',}}>Algerian</Text>
          </View>
          <View style={{marginBottom: 10, marginLeft: 8}}>
            <Text style={{fontSize: 16, fontWeight: '700',}}>APPEARANCES</Text>
            <Text style={{color: 'grey',}}>631</Text>
          </View>
          <View style={{marginBottom: 10, marginLeft: 8}}>
            <Text style={{fontSize: 16, fontWeight: '700',}}>GOALS</Text>
            <Text style={{color: 'grey',}}>122</Text>
          </View>
          <View style={{marginBottom: 10, marginLeft: 8}}>
            <Text style={{fontSize: 16, fontWeight: '700',}}>ASSISTS</Text>
            <Text style={{color: 'grey',}}>130</Text>
          </View>
          <View style={{marginBottom: 10, marginLeft: 8}}>
            <Text style={{fontSize: 16, fontWeight: '700',}}>YELLOW CARDS</Text>
            <Text style={{color: 'grey',}}>73</Text>
          </View>
          <View style={{marginBottom: 10, marginLeft: 8}}>
            <Text style={{fontSize: 16, fontWeight: '700',}}>RED CARDS</Text>
            <Text style={{color: 'grey',}}>11</Text>
          </View>
          <View style={{marginBottom: 10, marginLeft: 8}}>
            <Text style={{fontSize: 16, fontWeight: '700',}}>MINUTES PLAYED</Text>
            <Text style={{color: 'grey',}}>50.444'</Text>
          </View>
          <View style={{marginBottom: 10, marginLeft: 8}}>
            <Text style={{fontSize: 16, fontWeight: '700',}}>NATIONAL CAPS</Text>
            <Text style={{color: 'grey',}}>108</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


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
