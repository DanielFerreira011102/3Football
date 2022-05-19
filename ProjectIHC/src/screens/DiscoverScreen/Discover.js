import React, { useState } from 'react';
import { View, SafeAreaView, FlatList} from "react-native";
import { NEWSCard, HomeHeader, FocusedStatusBar } from "../../components";
import { COLORS, NEWSData } from "../../constants";


const Discover = ( { route } ) => {
  const { user } = route.params;

  const [newsData, setNewsData] = useState(NEWSData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNewsData(NEWSData);
    }

    const filteredData = NEWSData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNewsData(NEWSData);
    } else {
      setNewsData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={newsData}
            renderItem={({ item }) => <NEWSCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} username={user.username} userimg={user.img} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};


export default Discover;
