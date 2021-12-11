import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, FlatList} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const PreferenceFacil = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image 
          source={require('./image/left_arrow.png')}
          style={styles.imageButton}
        />
        <Text style={styles.black}>선호 시설 입력</Text>
        <Image 
          source={require('./image/x.png')}
          style={styles.imageButton}
        />
      </View>
      
      <View style={styles.title}>
        <Text style={styles.black}>{'가장 중요하다고 생각하는 시설을 체크해주세요. \n(최대 3 가지)'}
        </Text>
      </View>
  
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.center}>
            <BouncyCheckbox
            fillColor="red"
            iconStyle={{ borderColor: "red" }}
            onPress={(isChecked) => {}} 
            />
          </View>
          <View style={styles.center}>
            <Text style={styles.rowText}> 병원 </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.center}>
            <BouncyCheckbox
            fillColor="red"
            iconStyle={{ borderColor: "red" }}
            onPress={(isChecked) => {}} 
            />
          </View>
          <View style={styles.center}>
            <Text style={styles.rowText}> 대형마트 </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.center}>
            <BouncyCheckbox
            fillColor="red"
            iconStyle={{ borderColor: "red" }}
            onPress={(isChecked) => {}} 
            />
          </View>
          <View style={styles.center}>
            <Text style={styles.rowText}> 편의점 </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.center}>
            <BouncyCheckbox
            fillColor="red"
            iconStyle={{ borderColor: "red" }}
            onPress={(isChecked) => {}} 
            />
          </View>
          <View style={styles.center}>
            <Text style={styles.rowText}> 지하철 </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.center}>
            <BouncyCheckbox
            fillColor="red"
            iconStyle={{ borderColor: "red" }}
            onPress={(isChecked) => {}} 
            />
          </View>
          <View style={styles.center}>
            <Text style={styles.rowText}> 기차역 </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.center}>
            <BouncyCheckbox
            fillColor="red"
            iconStyle={{ borderColor: "red" }}
            onPress={(isChecked) => {}} 
            />
          </View>
          <View style={styles.center}>
            <Text style={styles.rowText}> 빨래방 </Text>
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

export default PreferenceFacil;