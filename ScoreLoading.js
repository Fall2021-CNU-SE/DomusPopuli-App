import React from 'react';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';

const ScoreLoading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./image/left_arrow.png')}
          style={styles.imageButton}
        />
        <Text style={styles.black}>종합 점수 계산</Text>
        <Image 
          source={require('./image/x.png')}
          style={styles.imageButton}
        />
      </View>
       
      <View style={styles.title}></View>
      
      <View style={styles.content}>
          <Text style={styles.mainText}>점수 계산중...</Text>
      </View>

      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageButton: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  black: {
    fontSize: 20,
  },
  container: {
    flex: 1,
  },
  title: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText:{
      fontSize:50,
      fontWeight:"bold",
  },
  content: {
    flex: 7,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    flex: 1.1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingBottom: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: "#DCDCDC",
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#D43736",
  },
});

export default ScoreLoading;