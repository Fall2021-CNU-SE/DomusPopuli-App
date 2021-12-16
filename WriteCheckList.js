import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const WriteCheckList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./image/left_arrow.png')}
          style={styles.imageButton}
        />
        <Text style={styles.black}>체크리스트 작성</Text>
        <Image 
          source={require('./image/x.png')}
          style={styles.imageButton}
        />
      </View>
      
      <View style={styles.title}>
        <Text style={styles.black}>{'변기와 세면대 물을 동시에 사용해보세요.수압이 어떤가요 ?'}</Text>
      </View>
        
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.center}>
            <BouncyCheckbox
            fillColor="#D43736"
            iconStyle={{ borderColor: "#D43736" }}
            onPress={(isChecked) => {}} 
            />
          </View>
          <View style={styles.centerBox}>
            <Text style={styles.rowText}>매우 좋음</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.center}>
            <BouncyCheckbox
            fillColor="#D43736"
            iconStyle={{ borderColor: "#D43736" }}
            onPress={(isChecked) => {}} 
            />
          </View>
          <View style={styles.centerBox}>
            <Text style={styles.rowText}>좋음</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.center}>
            <BouncyCheckbox
            fillColor="#D43736"
            iconStyle={{ borderColor: "#D43736" }}
            onPress={(isChecked) => {}} 
            />
          </View>
          <View style={styles.centerBox}>
            <Text style={styles.rowText}>보통</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.center}>
            <BouncyCheckbox
            fillColor="#D43736"
            iconStyle={{ borderColor: "#D43736" }}
            onPress={(isChecked) => {}} 
            />
          </View>
          <View style={styles.centerBox}>
            <Text style={styles.rowText}>나쁨</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.center}>
            <BouncyCheckbox
            fillColor="#D43736"
            iconStyle={{ borderColor: "#D43736" }}
            onPress={(isChecked) => {}} 
            />
          </View>
          <View style={styles.centerBox}>
            <Text style={styles.rowText}>매우 나쁨</Text>
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
  container: {
    flex: 1,
    backgroundColor:"white",
  },
  imageButton: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  black: {
    textAlign:"center",
    fontSize: 20,
  },
  titleText:{
    textAlign:"center",
    fontSize: 17,
  },
  boldWhite: {
    fontSize: 20, 
    color: "white",
    fontWeight: "bold",
 }, 
  title: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  content: {
    flex: 7,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "center",
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
  row:{
    height:80,
    flexDirection: "row",
  },
  rowText: {
    fontSize: 20,
    textAlign: "center",
  },
  center:{
    flex:1,
    alignItems: "flex-end",
  },
  centerBox:{
    flex:2,
    alignItems: "center",
  },
});

export default WriteCheckList;