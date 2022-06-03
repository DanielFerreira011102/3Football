import React, {useState, useRef} from "react";
import { SafeAreaView, StatusBar, TextInput, View, Image, FlatList, Text} from "react-native";
import { CircleButton, SEARCHCard } from "../../components";
import { COLORS, FONTS, SIZES, assets, SEARCHData } from "../../constants";
import { Divider } from 'react-native-paper';

const Search = ({ navigation }) => {
    const [searchData, setSearchData] = useState(SEARCHData);
    const lastNameRef = useRef();

    const handleSearch = (value) => {
        if (value.length === 0) {
            setSearchData(SEARCHData);
        }

        const filteredData = SEARCHData.filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );

        if (filteredData.length === 0) {
            setSearchData(SEARCHData);
        } else {
            setSearchData(filteredData);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}> 
            <View style={{
                backgroundColor: COLORS.primary,
                padding: SIZES.font,
                }}
                >
                <View style={{height: 60}}>
                    <CircleButton
                    imgUrl={assets.left}
                    handlePress={() => {
                        lastNameRef.current.blur()
                        navigation.goBack()}}
                    top={10}
                    />
                    <Text style={{marginLeft: 65, marginTop: 15, color: "white", fontSize: 20}}>Learn about the world of football</Text>
                </View>
                <View
                    style={{
                        width: "100%",
                        borderRadius: SIZES.font,
                        backgroundColor: COLORS.gray,
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: SIZES.font,
                        paddingVertical: SIZES.small - 2,
                        marginVertical: 10,
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
                        onChangeText={handleSearch}
                        autoFocus={true}
                        ref={lastNameRef}
                    />
                </View>
            </View>
            <View style={{ zIndex: 0, marginBottom: 160 }}>
                <FlatList
                    data={searchData}
                    renderItem={({ item }) => <SEARCHCard data={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
                <Divider />
            </View>
        </SafeAreaView>
  );
};

export default Search;
