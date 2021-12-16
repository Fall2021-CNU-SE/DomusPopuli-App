import React, { useState } from 'react';
import {Text, View, Image, StyleSheet, TouchableHighlight, 
TouchableWithoutFeedback} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const WriteCheckList = ({ navigation }) => {
  let score = 0;
  const [index, setIndex] = useState(0);
  const [checked, setChecked] = useState("none");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={ ()=>{if(index>0) setIndex(index-1)} }
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
        <Text style={styles.titleText}>{'화장실 작성 진행률 1/3\n\n\n'}</Text>
        <View style={styles.checklistBox}>
          <Text style={styles.black}>
            {titleTable[index]}
          </Text>
        </View>
      </View>
        
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.center}>
            <BouncyCheckbox
              disableBuiltInState
              isChecked={checked==="first" ? true : false}
              onPress={()=>{setChecked("first");}}
              fillColor="#D43736"
              iconStyle={{ borderColor: "#D43736" }}
            />
          </View>
          <View style={styles.centerBox}>
            <Text style={styles.rowText}>매우 좋음</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.center}>
            <BouncyCheckbox
              disableBuiltInState
              isChecked={checked==="second" ? true : false}
              onPress={()=>{setChecked("second")}}
              fillColor="#D43736"
              iconStyle={{ borderColor: "#D43736" }}
            />
          </View>
          <View style={styles.centerBox}>
            <Text style={styles.rowText}>좋음</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.center}>
            <BouncyCheckbox
              disableBuiltInState
              isChecked={checked==="third" ? true : false}
              onPress={()=>{setChecked("third")}}
              fillColor="#D43736"
              iconStyle={{ borderColor: "#D43736" }}
            />
          </View>
          <View style={styles.centerBox}>
            <Text style={styles.rowText}>보통</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.center}>
            <BouncyCheckbox
              disableBuiltInState
              isChecked={checked==="fourth" ? true : false}
              onPress={()=>{setChecked("fourth")}}
              fillColor="#D43736"
              iconStyle={{ borderColor: "#D43736" }}
            />
          </View>
          <View style={styles.centerBox}>
            <Text style={styles.rowText}>나쁨</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.center}>
            <BouncyCheckbox
              disableBuiltInState
              isChecked={checked==="fifth" ? true : false}
              onPress={()=>{setChecked("fifth")}}
              fillColor="#D43736"
              iconStyle={{ borderColor: "#D43736" }}
            />
          </View>
          <View style={styles.centerBox}>
            <Text style={styles.rowText}>매우 나쁨</Text>
          </View>
        </View>
      </View>
      
      <TouchableHighlight
        onPress={()=>{
          checkList[keyTable[index]] = score;
          setChecked("none");
          if(index<12) setIndex(index+1);
          console.log(checkList);
        }}
        underlayColor="#e65a5a"
        style={styles.footer}
      >
        <Text style={styles.boldWhite}>다음</Text>
      </TouchableHighlight>
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
