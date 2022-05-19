import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { Divider } from 'react-native-paper';

const Matches = () => {

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: '#001F2D', alignItems: 'center'}}><Text style={styles.title}> Matches</Text></View>
      <Divider />
      <CalendarStrip
      scrollable
      style={{height:100, paddingTop: 10, paddingBottom: 0}}
      calendarColor={'#001F2D'}
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
    </ScrollView>
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
