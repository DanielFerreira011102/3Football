import { useNavigation } from '@react-navigation/native';
import {React, useState, useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Dimensions, FlatList, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { Divider } from 'react-native-paper';
import { NEWSCard, MATCHCard, HomeHeader, FocusedStatusBar} from "../../components";
import { FONTS, SIZES, COLORS, NEWSData, MATCHData, assets } from "../../constants";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Matches = () => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const today = new Date()
  const strtdy = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  const mData = MATCHData.find(m => m.id == strtdy).matches;
  const [matchData, setMatchData] = useState(mData);
  const [curDate, setCurDate] = useState(today);

  const onSelect = selectedDate => {
    const date = selectedDate.toDate();
    setCurDate(date)
    const strdate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    setMatchData(MATCHData.find(m => m.id === strdate)?.matches)
  }

  const handleSearch = (value) => {
    if (value.length === 0) {
      setMatchData(mData);
    }

    const filteredData = mData.filter((item) =>
      item.team1.name.toLowerCase().includes(value.toLowerCase())
      || item.team2.name.toLowerCase().includes(value.toLowerCase())
      || item.event.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setMatchData(mData);
    } else {
      setMatchData(filteredData);
    }
  };

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const strdate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    setMatchData(MATCHData.find(m => m.id === strdate)?.matches)
    hideDatePicker();
    setCurDate(date)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{
                backgroundColor: COLORS.primary,
                padding: SIZES.font,
                }}
                >
                <View style={{height: 60}}>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 5, marginTop: 8, color: "white", fontSize: 30, fontWeight: '800'}}>Football</Text>
                    <Text style={{marginLeft: 5, marginTop: 12, color: "white", fontSize: 26}}>Fixtures</Text>
                    </View>
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
                        placeholder="Search matches, teams, events..."
                        style={{ flex: 1 }}
                        onChangeText={handleSearch}
                    />
                </View>
            </View>
      <View style={{ flex: 1 }}>
      {matchData != undefined?
        <View style={{ zIndex: 0 }}>
          <FlatList
              data={matchData}
              renderItem={({ item }) => <MATCHCard data={item} date={curDate} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false} /><Divider />
        </View>
        : <Text style={{alignSelf: 'center', marginTop: '50%', fontSize: 25}}>No matches stored</Text>
      }
      </View>
      <View>
        <View>
         <TouchableOpacity style={{width: 28, height: 28, position: 'absolute', right: 5, bottom: 64, zIndex: 55}} onPress={showDatePicker}>
          <Image
          source={assets.calendar}
          resizeMode="contain"
          style={{ width: 24, height: 24}}
          />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            date={curDate}
          />
        <CalendarStrip
          scrollable
          style=
          {{
            height: 100,
            paddingTop: 5,
            paddingBottom: 0,
          }}
          calendarColor={'#001F2D'}
          startingDate={addDays(new Date(), -3)}
          selectedDate={curDate}
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
