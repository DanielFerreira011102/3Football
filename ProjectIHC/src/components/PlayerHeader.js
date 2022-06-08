import React, {useState, useRef} from "react";
import { SafeAreaView, Text, ScrollView, View, useWindowDimensions, Image, StyleSheet,  TouchableHighlight } from "react-native";
import { assets, COLORS } from "../constants";
import { CircleButton } from "../components";
import { useNavigation } from "@react-navigation/native";

const PlayerHeader = ({ navigation } ) => {

  const [heartImage, setHeartImage] = useState(assets.heartol);
  const heartHandler = () => {
    if (heartImage == assets.heart)
      setHeartImage(assets.heartol)
    else setHeartImage(assets.heart)
  }

    return (
      <View style={{height: 200, backgroundColor: COLORS.primary, width: '100%'}}>
        <View style={{marginTop: 20, backgroundColor: '#000000', zIndex: 100}}>
          <CircleButton 
          imgUrl={assets.left}
          left={15}
          zIndex={100}
          handlePress={() => {navigation.goBack()}}/>
          <CircleButton
          imgUrl={heartImage}
          right={15}
          handlePress={heartHandler}
          />
        </View>
        <Image source={assets.realm} resizeMode={'contain'} style={{height: 70, zIndex: 0, position: 'absolute', left: -90, top: 82}}></Image>
        <Image source={assets.frcircle} resizeMode={'contain'} style={{height: 60, zIndex: 0, position: 'absolute', left: -150, top: 96}}></Image>
        <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
          <Text style={{color: 'white', paddingLeft: 12, fontSize: 20, fontWeight: '700', paddingTop: 140}}>Zinedine Zidane</Text>
          <Image source={assets.zidaneimg} resizeMode={'contain'} style={{height: 240, marginLeft: -100, zIndex: -12}}></Image>
        </View>
      </View>
    );
  };

export default PlayerHeader;