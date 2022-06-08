import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { CircleButton } from "../../components";
import { assets } from '../../constants';

const MapScreen = ({ route, navigation }) => {
  return (
    <>
    <CircleButton 
    imgUrl={assets.left}
    left={15}
    handlePress={() => {navigation.goBack()}}/>
    <View style={styles.container}>
      <MapView style={styles.map} 
          initialRegion={{
            latitude: 37.35653,
            longitude: -5.98175,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
});

export default MapScreen;