import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TextInput, 
TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CheckList = ({ navigation }) => {
  const checkList = {};
  const keyTable = ["H0","H1","H2","B0","B1","B2","K0","K1","K2","E0","O0",
    "O1","O2"];
  const titleTable = [
    "천장, 벽지를 보면서 누수의 흔적이나 곰팡이가 없는지 확인해보세요. 구석진 곳에도 문제가 없나요?",
    "옵션(냉장고, 에어컨, 인덕션, 세탁기 )등이 있다면 냄새가 나지는 않는지, 온도가 알맞게 설정되는지 등 작동 여부를 확인해보세요. 잘 작동하나요?",
    "난방이 잘 되는지 확인해보세요. 그리고 보일러의 시고 표지판이라는 스티커를 보면 시공 연월일 항목을 볼 수 있습니다. 시고 표지판으로 노후를 체크해보세요. 10년 이상된 보일러는 잔고장이 많습니다.",
    "수압을 확인하기 위해 변기와 세면대, 싱크대 물을 동시에 사용해보세요. 수압이 괜찮나요?",
    "물이 내려갈 때 배수구, 세면대의 물막힘, 물고임 등이 있는지 확인해보세요. 별다른 문제가 없나요?",
    "샤워 헤드, 변기, 세면대, 거울, 수납 공간 등 상태가 괜찮나요?",
    "가스 밸브가 노후화 되지는 않았나요?",
    "싱크대 아래쪽의 공간에 누수의 흔적이나 곰팡이가 있나요?",
    "싱크대에서 역한 냄새가 올라오나요?",
    "도어락이 고장났거나 파손되진 않았나요?",
    "집이 저층이라면 방범창이 설치되어있는지 확인해보세요. 안전한가요?",
    "기타 관리비가 나오는 것이 있는지 확인해보세요. 추가 관리비가 없나요?",
    "간혹 핸드폰이 안터지는 집이 있습니다. 핸드폰이 잘 터지나요?"
  ];
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={ ()=>{setIndex(index-1)} }
        >
          <Image 
            source={require('./image/left_arrow.png')}
            style={styles.imageButton}
          />
        </TouchableWithoutFeedback> 
        <Text style={styles.black}>체크리스트 작성</Text>
        <TouchableWithoutFeedback
          onPress={ ()=>{navigation.popToTop()} }
        >
          <Image 
            source={require('./image/x.png')}
            style={styles.imageButton}
          />
        </TouchableWithoutFeedback> 
      </View>
        <View style={styles.title}>
          <Text style={styles.black}>
            ddddddddddddddddddddddddddddddddddddd예산과 직장(학교)위치를 입력해 주세요
          </Text>
        </View>
      <View style={styles.content}>
        <View style={styles.table}>
          <View style={styles.topRow}>
            <Text style={styles.rowText}>예산</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.rowText}>만원</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>직장위치</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.rowText}></Text>
          </View>
        </View>
      </View>
      <TouchableHighlight 
        style={styles.footer} 
        underlayColor="#e65a5a"
        onPress={ () => {setIndex(index+1)} }>
        <Text style={styles.boldWhite}>다음</Text>
      </TouchableHighlight>
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

export default CheckList;
