import React from "react";
import { View, Image, Text } from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

export const NEWSTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        by {subTitle}
      </Text>
    </View>
  );
};

export const EndDate = ( { date } ) => {

  function processTime(interval, extension) {
    interval = Math.floor(interval);
    return interval + ((interval == 1)? extension.slice(0, -1) : extension);
  }

  function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;

    if (interval > 1) {
      return processTime(interval, " years");
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return processTime(interval, " months");
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return processTime(interval, " days");
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return processTime(interval, " hours");
    }
    interval = seconds / 60;
    if (interval > 1) {
      return processTime(interval, " minutes");
    }
    return processTime(interval, " seconds");
  }

  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Posted
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      > 
        {`${timeSince(date)}`} ago
      </Text>
    </View>
  );
};

const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = ({profile, type}) => {
  return (
    <View style={{ flexDirection: "column", marginLeft: 20 }}>
      <ImageCmp imgUrl={profile} />
      <Text>{type}</Text>
    </View>
  );
};

export const SubInfo = ({creator, date}) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People profile={creator}/>
      <EndDate date={date} />
    </View>
  );
};
