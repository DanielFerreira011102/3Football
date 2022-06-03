import React, {useState, useRef} from "react";
import { SafeAreaView, Text, ScrollView, View, useWindowDimensions, Image, StyleSheet,  TouchableHighlight } from "react-native";
import { assets, COLORS } from "../constants";
import { CircleButton } from "../components";

const MatchHeader = ({ navigation }) => {
    const [bellImage, setBellImage] = useState(assets.bellol);

    const bellHandler = () => {
      if (bellImage == assets.bell)
        setBellImage(assets.bellol)
      else setBellImage(assets.bell)
    }

    return (
    <View style={{height: 170, backgroundColor: COLORS.primary}}>
        <View style={{marginTop: 20, backgroundColor: '#000000'}}>
            <CircleButton 
            imgUrl={assets.left}
            left={15}
            handlePress={() => {navigation.goBack()}}/>
            <CircleButton
            imgUrl={bellImage}
            right={15}
            handlePress={bellHandler}/>
        </View>
      </View>
    );
  };

export default MatchHeader;