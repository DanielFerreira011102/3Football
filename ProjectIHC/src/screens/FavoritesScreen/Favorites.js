import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const Favorites = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#001F2D'}}>
      <View style={styles.root}>
        <Text style={styles.title} >Favorites</Text>
      </View>
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
    marginTop: 40
  },
});

export default Favorites;
