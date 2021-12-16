import React from 'react';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';

const Inputbugetandloc = () => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image 
              source={require('./image/left_arrow.png')}
              style={styles.imageButton}
            />
            <Text style={styles.black}>예산, 주소 입력</Text>
            <Image 
              source={require('./image/x.png')}
              style={styles.imageButton}
            />
          </View>
          
          <View style={styles.title}>
            <Text style={styles.black}>
              예산과 직장(학교)위치를 입력해 주세요.
            </Text>
          </View>
          
          <View style={styles.content}>
            <View style={styles.table}>
              <View style={styles.row}>
                <View style={styles.rowBox}>
                  <Text style={styles.rowText}>예산</Text>
                </View>
                <TextInput style={styles.input}/>
                <View style={styles.rowBox}>
                  <Text style={styles.rowText}>만원</Text>
                </View>
              </View>
              
              <View style={styles.row}>
                <View style={styles.rowBox}>
                  <Text style={styles.rowText2}>직장 위치</Text>
                </View>
                <TextInput style={styles.input}/>
                <View style={styles.rowBox}>
                  <Text style={styles.rowText}></Text>
                </View>
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
  },
  boldWhite: {
    fontSize: 20, 
    color: "white",
    fontWeight: "bold",
  },
  container: {
    backgroundColor:"white",
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
  input: {
    borderWidth: 1.5,
    borderColor: "#D43736",
    borderRadius: 10,
    flex:3,
  },
  row:{
    height:50,
    flexDirection: "row",
    marginBottom:10,
    borderRadius:10,
  },
  rowBox:{
    flex:1,
    justifyContent: "center",
  },
  rowText: {
    fontSize: 19,
    textAlign: "center",
  },
  rowText2: {
    fontSize: 18,
    textAlign: "center",
    paddingRight:5,
  },
});

export default Inputbugetandloc;