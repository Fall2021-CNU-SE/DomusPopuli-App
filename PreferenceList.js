import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, FlatList} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const PreferenceList = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image 
          source={require('./image/left_arrow.png')}
          style={styles.imageButton}
        />
        <Text style={styles.black}>선호 항목 입력</Text>
        <Image 
          source={require('./image/x.png')}
          style={styles.imageButton}
        />
      </View>
      
      <View style={styles.title}>
        <Text style={styles.black}>{'가장 중요하게 생각하는 항목을 선택해주세요. \n(최대 2 가지)'}
        </Text>
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
          <View style={styles.center}>
            <Text style={styles.rowText}> 위생 </Text>
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
          <View style={styles.center}>
            <Text style={styles.rowText}> 안전 </Text>
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
          <View style={styles.center}>
            <Text style={styles.rowText}> 옵션 </Text>
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
          <View style={styles.center}>
            <Text style={styles.rowText}> 화장실 </Text>
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
          <View style={styles.center}>
            <Text style={styles.rowText}> 보일러 </Text>
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
          <View style={styles.center}>
            <Text style={styles.rowText}> 습도 </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.boldWhite}>설정 완료</Text>
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
  boldWhite: {
    fontSize: 20, 
    color: "white",
    fontWeight: "bold",
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
  row:{
    flex:1,
    flexDirection: "row",
  },
  rowText: {
    fontSize: 20,
    textAlign: "center",
  },
  center:{
    flex:1,
    alignItems: "center",
  },
});

export default PreferenceList;