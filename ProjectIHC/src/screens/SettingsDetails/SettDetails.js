import React, {useState} from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../../constants";
import { SubInfo, NEWSTitle, FocusedStatusBar, CircleButton, RectButton } from "../../components";
import { Divider } from 'react-native-paper';
const SettDetails = ({ route}) => {
  const { data } = route.params;

  return (
    <View style={{minHeight: 40}}>
    <Divider style={{height: 1}}/>
        <View
            style={{
                width: "100%",
                padding: SIZES.font,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
            >
              
            <Text style={{paddingHorizontal: 30}}>{data.description}</Text>

            
        </View>

    </View>
  );
};

export default SettDetails;
