import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";

import { NEWSTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";
import { RectButton } from "../components";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  const [buttonText, setButtonText] = useState('Read more');

  const descHandler = () => {
      if (!readMore) {
        setText(data.description);
        setReadMore(true);
        setButtonText(' Read less')
      } else {
        setText(data.description.slice(0, 100));
        setReadMore(false);
        setButtonText('Read more')
    }
  };

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NEWSTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
              }}
              onPress={descHandler}
            >
               {buttonText}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
