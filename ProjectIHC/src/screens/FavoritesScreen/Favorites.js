import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { favourites } from '../../constants';
import { Divider } from 'react-native-paper';
import { FAVSCard, FocusedStatusBar, CircleButton } from '../../components';
import { COLORS, SIZES, assets} from "../../constants";
import { useNavigation } from '@react-navigation/native';

const Favorites = () => {
  const favs = favourites;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{
                backgroundColor: COLORS.primary,
                padding: SIZES.font,
                }}
                >
                <View style={{height: 60}}>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 5, marginTop: 8, color: "white", fontSize: 30, fontWeight: '800'}}>Your</Text>
                    <Text style={{marginLeft: 5, marginTop: 12, color: "white", fontSize: 26}}>Favorites</Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('SearchNav')}} style={{position: 'absolute', right: 10, top: 10}}>
                      <View style={{width: 120, height: 40, borderRadius: 20, backgroundColor: 'white', flexDirection: 'row',  justifyContent: 'space-evenly', alignItems: 'center'}}>
                      <Image
                        source={assets.plus}
                        resizeMode="contain"
                        style={{ width: 24, height: 24 }}
                      />
                      <Text style={{fontSize: 22}}>ADD</Text>
                      </View>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
      <View style={{ zIndex: 0}}>
      <FlatList data={favs} horizontal={false}
                renderItem={({ item }) => <FAVSCard data={item} navigation={navigation} />}
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
