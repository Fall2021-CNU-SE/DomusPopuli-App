import React from 'react';
import { Text, View, Image, StyleSheet, TextInput,
TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const RoomMade = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./image/left_arrow.png')}
          style={styles.imageButton}
        />
        <Text style={styles.black}>방 생성</Text>
        <TouchableWithoutFeedback
          onPress={ ()=>navigation.popToTop() }
        >
          <Image 
            source={require('./image/x.png')}
            style={styles.imageButton}
          />
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.title}>
        <Text style={styles.black}>진행률 0/5</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.black}>방위치, 크기를 입력해 주세요.</Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.rowText}>방 크기</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.rowText}>평</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>방 위치</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.rowText}></Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>상세주소</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.rowText}></Text>
          </View>
        </View>

        <View style={styles.table}>
          <Text style={styles.black}>{'전세, 월세를 체크해주세요.\n'}</Text>
          <View style={styles.row}>
            <BouncyCheckbox
            fillColor="red"
            iconStyle={{ borderColor: "red" }}
            onPress={(isChecked) => {}} 
            />
            <Text style={styles.chooseText}>전세</Text>

            <BouncyCheckbox
            fillColor="red"
            iconStyle={{ borderColor: "red" }}
            onPress={(isChecked) => {}} 
            />
            <Text style={styles.chooseText}>월세</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.boldWhite}>다음</Text>
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
    textAlign:"center",
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
  table: {
    flex: 1,
  },
  input: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#D43736",
    borderRadius: 10,
    width: "30%",
    fontSize: 20,
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
    borderColor: "white",
  },
  rowText: {
    width: "21%",
    fontSize: 20,
    textAlign: "center",
  },
  chooseText:{
    width: "21%",
    fontSize: 20,
  },
});

export default RoomMade;
