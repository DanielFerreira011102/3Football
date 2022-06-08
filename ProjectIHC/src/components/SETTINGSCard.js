import React, { useState } from "react";
import { View, Image, Pressable, Text,Switch } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets,settings_text } from "../constants";
import { Divider } from 'react-native-paper';



const SETTINGSCard = ({ data }) => {

    const itemHandler = () => {
        const data = settings_text.find(more => more.id === id);
        navigation.navigate("SettDetails", { data })
    }

    const id = data.id;
    const type = data.type;
    const title = data.title;
    const value = data.value? data.value : false
    const [isEnabled, setIsEnabled] = useState(value);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();

    if(type=='more'){
        return (
            <View style={{minHeight: 60}}>
                <Divider style={{height: 1}}/>
                <Pressable onPress={itemHandler}>
                    <View
                        style={{
                            width: "100%",
                            padding: SIZES.font,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                        >
                        <Text style={{paddingHorizontal: 30}}>{title}</Text>

                        
                    </View>
                    </Pressable>
            </View>
            );
    }

    if(type=='account'){
        return (
            <View style={{minHeight: 60}}>
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
                        <Text style={{paddingHorizontal: 30}}>{title}</Text>

                        
                    </View>
                   
            </View>
            );
    }
    

    if(type=='switch'){
        return (
            <View style={{minHeight: 60}}>
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
                        <Text style={{paddingHorizontal: 30}}>{title}</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#001F2D" }}
                            thumbColor={isEnabled ? "#0d6fff" : "#f4f3f4"}
                            onValueChange={toggleSwitch}
                             value={isEnabled}
                        />
                        
                    </View>
    
            </View>
            );
    }
    if (type == "Title") {
    return (
            <View style={{height: 80}}>
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
                    <Text style={{paddingHorizontal: 5, paddingTop: 20, fontSize: 20,color:COLORS.gray}}>{title}</Text>
                </View>
            </View>
    );}
};

export default SETTINGSCard;
