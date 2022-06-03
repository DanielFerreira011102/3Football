import React, {useState} from "react";
import { View, Image, Pressable, Text } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets, NEWSData } from "../constants";
import { Divider } from 'react-native-paper';
import {  CircleButton } from "../components";

const SEARCHCard = ({ data }) => {
    
    const id = data.id;
    const type = data.type;
    const img = data.img? data.img : undefined
    const title = data.title;
    const navigation = useNavigation();

    const newsHandler = () => {
        const data = NEWSData.find(News => News.id === id);
        navigation.navigate("Details", { data })
    }

    const [heartImage, setHeartImage] = useState(assets.heart);

    const heartHandler = () => {
      if (heartImage == assets.heart)
        setHeartImage(assets.heartol)
      else setHeartImage(assets.heart)
    }
    
    const PTECard = ({ handler }) => {
        return (
            <View style={{height: 80}}>
                <Divider style={{height: 1}}/>
                <Pressable onPress={handler}>
                    <View
                        style={{
                            width: "100%",
                            height: "100%",
                            paddingHorizontal: SIZES.font,
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                        >
                        <View style={{ flexDirection: "column", alignItems: 'center' }}>
                            <Image
                                source={img}
                                resizeMode="contain"
                                style={{
                                    width: 48,
                                    height: 48,
                                    marginLeft: 0,
                                }}
                            />
                            <Text>{type}</Text>
                        </View>
                        <Text style={{marginLeft: 40}}>{title}</Text>
                        <CircleButton
                        imgUrl={heartImage}
                        right={15}
                        handlePress={heartHandler}
                        />        
                    </View>
                </Pressable>
            </View>
        );   
    }

    if (type == "News") {
        return (
            <View style={{minHeight: 40}}>
                <Divider style={{height: 1}}/>
                <Pressable onPress={newsHandler}>
                    <View
                        style={{
                            width: "100%",
                            padding: SIZES.font,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                        >
                        <Text>{type}</Text>
                        <Text style={{paddingHorizontal: 30}}>{title}</Text>
                    </View>
                </Pressable>
            </View>
            );
    }
    if (type == "Player")
        return (<PTECard handler={() => {navigation.navigate('Player')}}/>);    
    if (type == "Team")
        return (<PTECard handler={() => {navigation.navigate('Team')}}/>);
    if (type == "Manager")
        return (<PTECard handler={() => {navigation.navigate('Manager')}}/>);       
    if (type == "Event") 
        return (<PTECard handler={() => {navigation.navigate('Evento')}}/>);   
    if (type == "Title") 
        return (
            <View style={{height: 100}}>
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
                    <Text style={{paddingHorizontal: 10, paddingTop: 20, fontSize: 30, fontWeight: 'bold'}}>{title}</Text>
                </View>
            </View>
        );
};

export default SEARCHCard;
