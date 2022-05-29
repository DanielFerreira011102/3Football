import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView} from 'react-native';
import { favourites } from '../../constants';
import { Divider } from 'react-native-paper';
import { SEARCHCard } from '../../components';


const Favorites = () => {
  const favs = favourites;

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={styles.root}>
        <Text style={styles.title} >Favorites</Text>
      </View>
      <View style={{ zIndex: 0, marginBottom: 300 }}>
      <FlatList data={favs} horizontal={false}
                renderItem={({ item }) => <SEARCHCard data={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}/>
      <Divider />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    height: 150,
    backgroundColor: '#001F2D',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
    marginTop: 40,
  },
  content: {
    backgroundColor: 'white',
    height: 80,
  },
  fav: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    margin: 20,
    marginTop: 20,
  }
});

export default Favorites;
