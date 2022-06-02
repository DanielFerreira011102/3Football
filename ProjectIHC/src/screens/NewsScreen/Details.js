import React, {useState} from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../../constants";
import { SubInfo, NEWSTitle, FocusedStatusBar, CircleButton, RectButton } from "../../components";

const DetailsHeader = ({ data, navigation, heartImg, heartHandler }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton
      imgUrl={heartImg}
      right={15}
      handlePress={heartHandler}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  const [heartImage, setHeartImage] = useState(assets.heartol);

  const heartHandler = () => {
    if (heartImage == assets.heart)
      setHeartImage(assets.heartol)
    else setHeartImage(assets.heart)
  }

  function shorten(text,max) {
    return text && text.length > max ? text.slice(0,max).split(' ').slice(0, -1).join(' ') : text
  }


  const [text, setText] = useState(shorten(data.description, 160) + "...");
  const [readMore, setReadMore] = useState(false);
  const [buttonText, setButtonText] = useState('Read more');

  const descHandler = () => {
    if (!readMore) {
      setText(data.description);
      setReadMore(true);
      setButtonText(' Read less')
    } else {
      setText(shorten(data.description, 160) + "...");
      setReadMore(false);
      setButtonText('Read more')
  }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
      <RectButton minWidth={170} fontSize={SIZES.large} innerText={buttonText} handlePress={descHandler}/>
      </View>

      <FlatList
        data={data.bids}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} heartImg={heartImage} heartHandler={heartHandler} />
            <SubInfo date={data.date}/>
            <View style={{ paddingLeft: SIZES.font, paddingRight: SIZES.font }}>
              <View
                style=
                {{
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
                  style=
                  {{
                    fontSize: SIZES.font + 4,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Description
              </Text>
              <View
                style=
                {{
                  marginTop: SIZES.base,
                }}
              >
                <Text
                  style=
                  {{
                    color: COLORS.secondary,
                    fontSize: SIZES.small + 4,
                    fontFamily: FONTS.regular,
                    fontWeight: '500',
                    lineHeight: SIZES.large + 7,
                  }}
                >
                  {text}
              </Text>
            </View>
          </View>
        </View>
        </>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
