import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TextInput, 
TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

const user = {
  id: "",
  pw: ""
}

const MakeAccount = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableWithoutFeedback
              onPress={ ()=>{navigation.goBack()} }
            >
              <Image 
                source={require('./image/left_arrow.png')}
                style={styles.imageButton}
              />
            </TouchableWithoutFeedback>
            <Text style={styles.black}>회원가입</Text>
            <TouchableWithoutFeedback
              onPress={ ()=>{navigation.popToTop()} }
            >
              <Image 
                source={require('./image/x.png')}
                style={styles.imageButton}
              />
            </TouchableWithoutFeedback>
          </View>
          
          <View style={styles.content}>
            <View style={styles.table}>
              <View style={styles.row}>
                <View style={styles.rowBox}>
                  <Text style={styles.rowText}>ID</Text>
                </View>
                <TextInput 
                  style={styles.input}
                  onChangeText={(id)=>{user.id = id}}
                />
              </View>
              <View style={styles.row}>
                <View style={styles.rowBox}>
                  <Text style={styles.rowText}>PW</Text>
                </View>
                <TextInput 
                  style={styles.input}
                  onChangeText={(pw)=>{user.pw = pw}}
                  secureTextEntry="true"
                />
              </View>
            </View>            
          </View>

          <View style={styles.footer}>
            <TouchableHighlight 
              style={styles.footer}
              underlayColor="#e65a5a"
              onPress={()=>{
                //send request
                axios.post("192.168.35.205:8080/signup", user)
                .then(resp => {
                  if(resp.data.error === "null") {
                    alert("가입되었습니다");
                    navigation.goBack();
                  }
                });
              }}
            >
              <Text style={styles.boldWhite}>회원가입 완료</Text>
            </TouchableHighlight>
            </View>
        </View>
      );
    }
    
const styles = StyleSheet.create({
  titleImage:{
    width: "50%",
    height: "100%",
  },
  black: {
    fontSize: 20,
    textAlign:"center",
  },
  loginText:{
    fontSize: 20,
    textAlign:"center",
    color:"white"
  },
  boldWhite: {
    fontSize: 20, 
    color: "white",
    fontWeight: "bold",
  },
  container: {
    backgroundColor:"white",
    flex: 1,
    backgroundColor: "white",
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
    borderWidth: 1.5,
    borderColor: "#D43736",
    borderRadius: 10,
    flex:3,
  },
  table: {
    flex: 1,
  },
  rowBox:{
    flex:1,
    justifyContent: "center",
  },
  row:{
    height:50,
    flexDirection: "row",
    marginBottom:10,
  },
  rowText: {
    fontSize: 20,
    textAlign: "center",
  },
  accountBox:{
    height:50,
    backgroundColor:"#D43736",
    justifyContent: "center",
    borderRadius:10,
  },
  imageButton: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginRight: 15,
  },
});

export default MakeAccount;
