import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Pressable } from "react-native";

import { COLORS, SIZES, SHADOWS, assets} from "../constants";
import { SubInfo, NEWSTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";

const NEWSCard = ({ data }) => {
  const [heartImage, setHeartImage] = useState(assets.heartol);
  const navigation = useNavigation();

  const heartHandler = () => {
    if (heartImage == assets.heart)
      setHeartImage(assets.heartol)
    else setHeartImage(assets.heart)
  }

  return (
    <Pressable style={data.top!=undefined? {width: '95%', alignSelf: 'center', elevation: 200, borderRadius: 20, shadowColor: '#00008b'} : {width: '92%', alignSelf: 'center'}} onPress={() => navigation.navigate("Details", { data })}>
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        ...SHADOWS.dark,
        width: '100%'
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={heartImage} right={10} top={10} handlePress={heartHandler} />
      </View>
      
      <SubInfo creator={data.creator_img} date={data.date}/>

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NEWSTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
            innerText='Read more'
          />
        </View>
      </View>
    </View>
    </Pressable>
  );
};

export default NEWSCard;
