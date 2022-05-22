import {React, useState, useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Dimensions, FlatList, Pressable} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { Divider } from 'react-native-paper';
import { NEWSCard, MATCHCard, HomeHeader, FocusedStatusBar } from "../../components";
import { COLORS, NEWSData, MATCHData } from "../../constants";

const Matches = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const today = new Date()
  const strtdy = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  const [matchData, setMatchData] = useState(MATCHData.find(m => m.id == strtdy).matches);

  const onSelect = selectedDate => {
    const date = selectedDate.toDate();
    const strdate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    setMatchData(MATCHData.find(m => m.id === strdate)?.matches)
  }

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
      {matchData != undefined?
        <View style={{ zIndex: 0 }}>
          <FlatList
              data={matchData}
              renderItem={({ item }) => <MATCHCard data={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false} /><Divider />
        </View>
        : <Text style={{alignSelf: 'center', marginTop: '50%', fontSize: 25}}>No matches stored</Text>
      }
      </View>
      <View
          style=
          {{
            position: "absolute",
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
          startingDate={addDays(new Date(), -3)}
          selectedDate={new Date()}
          onDateSelected={onSelect}
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
