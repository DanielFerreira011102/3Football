import React, {useState, useRef} from "react";
import { SafeAreaView, Text, ScrollView, View, useWindowDimensions, Image, StyleSheet,  TouchableHighlight } from "react-native";
import { assets, COLORS } from "../constants";
import { CircleButton } from "../components";

const PlayerHeader = ({navigation}) => {
  const [heartImage, setHeartImage] = useState(assets.heartol);

  const heartHandler = () => {
    if (heartImage == assets.heart)
      setHeartImage(assets.heartol)
    else setHeartImage(assets.heart)
  }

    return (
      <View style={{height: 170, backgroundColor: COLORS.primary}}>
        <View style={{marginTop: 20, backgroundColor: '#000000'}}>
          <CircleButton 
          imgUrl={assets.left}
          left={15}
          handlePress={() => {navigation.goBack()}}/>
          <CircleButton
          imgUrl={heartImage}
          right={15}
          handlePress={heartHandler}
          />
        </View>
      </View>
    );
  };

export default PlayerHeader;