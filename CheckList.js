import React from 'react';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';

const CheckList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>뒤로가기</Text>
      </View>
      <View style={styles.title}>
          <Text style={styles.middleBlack}>
            예산과 직장(학교)위치를 입력해 주세요
          </Text>
        </View>
      <View style={styles.content}>
        <View style={styles.row}>
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
      <View style={styles.footer}>
        <Text style={styles.bigWhite}>다음</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  middleBlack: {
    fontSize: 20,
  },
  bigWhite: {
    fontSize: 30, 
    color: "white",
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
    flex: 5,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    width: "50%",
    fontSize: 20,
  },
  row: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "space-between",
  },
  rowText: {
    width: "20%",
    fontSize: 20,
    textAlign: "center",
  },
});

export default CheckList;
