import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const PercentageBlock = ({poscases, negcases, innerText, percent, ...innerTextprops}) => {
    const WinnerColor = poscases >= negcases? '#3498db' : 'grey';
    const LoserColor = poscases >= negcases? 'grey' : '#3498db';
    const cases = poscases + negcases;
    const addPercent = percent != undefined? "%" : ""
    const width1 = cases != 0? (poscases/cases*250) : 0
    const width2 = cases != 0? (negcases/cases*250) : 0

    return(
        <View style={{marginVertical: 15}}>
            <Text style={{...innerTextprops, color: 'black', alignSelf: 'center'}}>{innerText} {addPercent}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'black', paddingRight: 15}}>{poscases}{addPercent}</Text>
                <View style={{width: width1, height: 30, backgroundColor: WinnerColor}}></View>
                <View style={{width: width2, height: 30, backgroundColor: LoserColor}}></View>
                <Text style={{color: 'black', paddingLeft: 15}}>{negcases}{addPercent}</Text>
            </View>
        </View>
    );
  }

export default PercentageBlock