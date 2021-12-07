import React from 'react';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';

const RoomList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./image/User.png')}
          style={styles.imageButton}
        />
        <Text style={styles.black}>방 목록</Text>
        <Image 
          source={require('./image/plus.png')}
          style={styles.imageButton}
        />
      </View>
        <View style={styles.title}>
          <Text style={styles.black}>
            예산과 직장(학교)위치를 입력해 주세요
          </Text>
        </View>
      <View style={styles.content}>
        <View style={styles.table}>
          <View style={styles.topRow}>
            
          </View>
          <View style={styles.row}>
            
          </View>
        </View>
      </View>
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
  boldWhite: {
    fontSize: 20, 
    color: "white",
    fontWeight: "bold",
 },
  container: {
    flex: 1,
  },
  title: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 7,
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
    backgroundColor: "#D43736",
  },
  input: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#D43736",
    borderRadius: 10,
    width: "30%",
    fontSize: 20,
  },
  table: {
    flex: 1,
  },
  row:{
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "space-between",
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
    borderBottomWidth: 0.3,
    borderStyle: "solid",
    // borderColor: "#DCDCDC",
    borderColor: "white",
    
  },
  topRow: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "space-between",
    borderWidth: 0.3,
    borderStyle: "solid",
    // borderColor: "#DCDCDC",
    borderColor: "white",
  },
  rowText: {
    width: "21%",
    fontSize: 20,
    textAlign: "center",
  },
});

export default RoomList;