import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import CheckList from './CheckList';
import MakeAccount from './MakeAccount';
import Login from './Login';
import PreferenceSurvey from './PreferenceSurvey';
import Inputbugetandloc from './Inputbugetandloc';
import RoomList from './RoomList';
import PreferenceFacil from './PreferenceFacil';
import PreferenceList from './PreferenceList';
import RoomMade from './RoomMade';
import WriteCheckList from './WriteCheckList';
import ScoreLoading from './ScoreLoading';
import DetailScore from './DetailScoreTmp';

const app = () => {
  return (
//    <View style={styles.container}>
    //  <Image 
    //   source={require('./image/logo.png')} 
    //    style={styles.title}
    //  />
//    </View>
    // <CheckList/>
    // <MakeAccount/>
    // <Login/>
    // <PreferenceSurvey/>
    // <Inputbugetandloc/>
    // <PreferenceFacil/>
    // <PreferenceList/>
    // <RoomList/>
    <RoomMade/>
    // <WriteCheckList/>
    // <ScoreLoading/>
    // <DetailScore/>
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
