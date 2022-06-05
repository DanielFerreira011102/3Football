import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
/**
* Override styles that get passed from props
**/
const propStyle = (percent, base_degrees) => {
    const rotateBy = base_degrees + (percent * 3.6);
    return {
      transform:[{rotateZ: `${rotateBy}deg`}]
    };
  }
  
const renderThirdLayer = (percent) => {

    const WinnerColor = percent >= 50? '#3498db' : 'grey';
    const LoserColor = percent >= 50? 'grey' : '#3498db';

    if(percent > 50){
      /**
      * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
      * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
      * before passing to the propStyle function
      **/
      return <View style={[styles.secondProgressLayer,propStyle((percent - 50), 45), {borderRightColor: WinnerColor, borderTopColor: WinnerColor}]}></View>
    }else{
      return <View style={[styles.offsetLayer, {borderRightColor: LoserColor, borderTopColor: LoserColor}]}></View>
    }
}
  
  const PercentageRing = ({percent, innerText, ...innerTextprops}) => {
    let firstProgressLayerStyle;
    if(percent > 50){
        firstProgressLayerStyle = propStyle(50, -135);
    }else {
      firstProgressLayerStyle = propStyle(percent, -135);
    }

    const WinnerColor = percent >= 50? '#3498db' : 'grey';
    const LoserColor = percent >= 50? 'grey' : '#3498db';

    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 30}}>
            <Text style={{color: 'black', paddingLeft: 15, fontSize: 40, fontWeight: '500'}}>{100-percent}%</Text>
            <View style={{alignItems: 'center'}}>
                <View style={[styles.container, {borderColor: LoserColor}]}>
                    <View style={[styles.firstProgressLayer, firstProgressLayerStyle, {borderRightColor: WinnerColor, borderTopColor: WinnerColor}]}></View>
                    <Text style={{color: 'black', textAlign: 'center', fontWeight: '400', ...innerTextprops}}>{innerText}</Text>
                    {renderThirdLayer(percent)}
                </View>
            </View>
            <Text style={{color: 'black', paddingRight: 15, fontSize: 40, fontWeight: '500'}}>{percent}%</Text>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: 180,
      height: 180,
      borderWidth: 20,
      borderRadius: 90,
      borderColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center'
    },
    firstProgressLayer: {
      width: 180,
      height: 180,
      borderWidth: 20,
      borderRadius: 90,
      position: 'absolute',
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      transform:[{rotateZ: '-135deg'}]
    },
    secondProgressLayer:{
      width: 180,
      height: 180,
      position: 'absolute',
      borderWidth: 20,
      borderRadius: 90,
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      transform: [{rotateZ: '45deg'}]
    },
    offsetLayer: {
      width: 180,
      height: 180,
      position: 'absolute',
      borderWidth: 20,
      borderRadius: 90,
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      transform:[{rotateZ: '-135deg'}]
    }
  });

export default PercentageRing;