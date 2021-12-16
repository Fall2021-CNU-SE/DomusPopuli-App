import React from 'react';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CheckLease = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./image/left_arrow.png')}
          style={styles.imageButton}
        />
        <Text style={styles.black}>전세 체크</Text>
        <Image 
          source={require('./image/x.png')}
          style={styles.imageButton}
        />
      </View>

      <View style={styles.title}>
        <Text style={styles.black}>진행률 1/5</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.black}>값을 입력해 주세요.</Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.rowText}>보증금</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.rowText}>만원</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>관리비</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.rowText}>만원</Text>
          </View>
        </View>

        <View style={styles.underTable}>
          <View style={styles.boxRow}>
            <View style={styles.Leftbox}>
              <Text style={styles.boxText}>집안</Text>
            </View>
            <View style={styles.Rightbox}>
              <Text style={styles.boxText}>화장실</Text>
            </View>
          </View>

          <View style={styles.boxRow}>
            <View style={styles.Leftbox}>
              <Text style={styles.boxText}>주방</Text>
            </View>

            <View style={styles.Rightbox}>
              <Text style={styles.boxText}>기타</Text>
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
    textAlign:"center",
  },
  boldWhite: {
    fontSize: 20, 
    color: "white",
    fontWeight: "bold",
 },
  container: {
    flex: 1,
    backgroundColor:"white",
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
  underTable: {
    flex: 1.5,
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
  boxRow:{
    flex:1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "space-between",
    borderColor: "white",
    // backgroundColor:"green",
    borderRadius:15,
  },
  Leftbox:{
      flex:1,
      marginRight:30,
      marginBottom:10,
      marginTop:10,
      justifyContent: "center",
      backgroundColor:"#D43736",
      borderColor:"white",
      borderRadius:10,
  },
  Rightbox:{
    flex:1,
    marginLeft:10,
    marginBottom:10,
    marginTop:10,
    justifyContent: "center",
    backgroundColor:"#D43736",
    borderColor:"white",
    borderRadius:10,
},
  boxText:{
    fontSize: 20, 
    color: "white",
    fontWeight: "bold",
    textAlign:"center",
  },
});

export default CheckLease;