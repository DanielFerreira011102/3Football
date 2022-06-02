import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, positionAbs, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: positionAbs? positionAbs : "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, innerText, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small + 5,
        borderRadius: SIZES.extraLarge + 12,
        minWidth: minWidth + 20,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        {innerText}
      </Text>
    </TouchableOpacity>
  );
};
