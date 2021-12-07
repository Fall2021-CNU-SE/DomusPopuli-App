import React from 'react';
import { Text, View, Image, StyleSheet, TextInput, 
TouchableHighlight } from 'react-native';

const CheckList = () => {
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
          <Text style={styles.black}>
            예산과 직장(학교)위치를 입력해 주세요
          </Text>
        </View>
      <View style={styles.content}>
        <View style={styles.table}>
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
      </View>
      <TouchableHighlight 
        style={styles.footer} 
        underlayColor="#e65a5a"
        onPress={_onPressButton}>
        <Text style={styles.boldWhite}>다음</Text>
      </TouchableHighlight>
    </View>
  );
}

const _onPressButton = function() {
    alert('You tapped the button!')
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
