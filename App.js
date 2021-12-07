import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import CheckList from './CheckList';
import PreferenceSurvey from './PreferenceSurvey';
import Inputbugetandloc from './Inputbugetandloc';
import RoomList from './RoomList';
import PreferenceFacil from './PreferenceFacil';
import RoomMade from './RoomMade';

const app = () => {
  return (
//    <View style={styles.container}>
    //  <Image 
    //   source={require('./image/logo.png')} 
    //    style={styles.title}
    //  />
//    </View>
    // <CheckList/>
    // <PreferenceSurvey/>
    // <Inputbugetandloc/>
    // <RoomList/>
    // <PreferenceFacil/>
    <RoomMade/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: 225,
    height: 225,
    resizeMode: "contain",
  }
});

export default app;
