import {React, useState, useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Dimensions, FlatList, Pressable} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { Divider } from 'react-native-paper';
import { NEWSCard, HomeHeader, FocusedStatusBar } from "../../components";
import { COLORS, NEWSData } from "../../constants";

const Matches = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [newsData, setNewsData] = useState(NEWSData);

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
          />
        </View>
      </View>
      <View
          style=
          {{
            marginTop: windowHeight-172,
            position: "absolute",
            height: 280,
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: 2,
          }}
        >
        <View>
        <CalendarStrip
          scrollable
          style=
          {{
            height:100,
            paddingTop: 5,
            paddingBottom: 0,
          }}
          calendarColor={'#001F2D'}
          selectedDate={new Date()}
          onDateSelected={()=>{}}
          highlightDateNumberStyle={{color: '#4287f5', fontSize: 24}}
          highlightDateNameStyle={{color: '#4287f5', fontSize: 16}}
          calendarHeaderStyle={{color: 'white', fontSize: 20}}
          dateNumberStyle={{color: 'white', fontSize: 20}}
          dateNameStyle={{color: 'white', fontSize: 12}}
          iconContainer={{flex: 0.1}}
          iconLeft={require('../../../assets/images/left.png')}
          iconRight={require('../../../assets/images/right.png')}
        />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
    marginTop: 40,
  },
});

export default Matches;
