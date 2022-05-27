import React from "react";
import { View, Text, Image, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch, username, userimg }) => {

  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate("SearchNav")
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 160, height: 80 }}
        />

        <View style={{ width: 45, height: 45 }}>
          <Image
            source={userimg}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small + 3,
            color: COLORS.white,
          }}
        >
          Hello, {username}  👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Learn about the world of football 
        </Text>
      </View>
      
      <Pressable onPress={handleSearch}>
      <View>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search matches, events, players, news..."
            style={{ flex: 1 }}
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
      </View>
      </Pressable>
    </View>
  );
};

export default HomeHeader;
