import React from 'react';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';

const MakeAccount = () => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.black}>회원가입</Text>
          </View>
          
          <View style={styles.title}>
          <Image 
              source={require('./image/logo.png')}
              style={styles.titleImage}
            />
          </View>
          
          <View style={styles.content}>
            <View style={styles.table}>
              <View style={styles.row}>
                <View style={styles.rowBox}>
                  <Text style={styles.rowText}>ID</Text>
                </View>
                <TextInput style={styles.input}/>
              </View>
              <View style={styles.row}>
                <View style={styles.rowBox}>
                  <Text style={styles.rowText}>PW</Text>
                </View>
                <TextInput style={styles.input}/>
              </View>
            </View>            
          </View>

          <View style={styles.footer}>
            <Text style={styles.boldWhite}>회원가입 완료</Text>
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
    justifyContent: "center",
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
});

export default MakeAccount;
