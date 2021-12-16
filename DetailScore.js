import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';

const DetailScore = () => {

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image 
          source={require('./image/left_arrow.png')}
          style={styles.imageButton}
          />
          <Text style={styles.black}>상세 점수 조회</Text>
          <Image 
          source={require('./image/white.png')}
          style={styles.imageButton}
        />
        </View>

        <View style={styles.content}> 
          <View style={styles.table}>
            <View style={styles.row}>
              <View style={styles.scoreTextBox}>
                <Text style={styles.checkListText}>체크리스트 점수</Text>
              </View>
              <View style={styles.scoreTextBox}>
                <Text style={styles.checkListText}>시설 점수</Text>
              </View>
              <View style={styles.scoreTextBox}>
                <Text style={styles.checkListText}>총점</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.scoreBox}>
                <Text style={styles.black}>50</Text>
              </View>
              <View style={styles.scoreBox}>
                <Text style={styles.black}>20</Text>
              </View>
              <View style={styles.scoreBox}>
                <Text style={styles.black}>70</Text>
              </View>
            </View>
          </View>

          <View style={styles.tableBottom}>
            <View style={styles.tableBottomRow}>
              <View style={styles.nameBox}>
                <Text style={styles.checkListText}>시설명</Text>
              </View>
              <View style={styles.addBox}>
                <Text style={styles.checkListText}>주소</Text>
              </View>
            </View>
            <View style={styles.tableBottomRow}>
              <View style={styles.nameTextBox}>
                <Text style={styles.nameText}>헤종이집</Text>
              </View>
              <View style={styles.addTextBox}>
                <Text style={styles.nameText}>분식살롱</Text>
              </View>
            </View>
          </View>   
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
  checkListText:{
    fontSize: 18,
    textAlign:"center",
    color:"white",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: "#DCDCDC",
  },
  scoreTextBox:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:0.5,
    borderRadius:10,
    borderColor:"white",
    backgroundColor:"#D43736"
  },
  nameText:{
    fontSize: 18,
    textAlign:"center",
  },
  nameBox:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:0.5,
    borderRadius:10,
    borderColor:"white",
    backgroundColor:"#D43736"
  },
  addBox:{
    flex:1.5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:0.5,
    borderRadius:10,
    borderColor:"white",
    backgroundColor:"#D43736"
  },
  scoreBox:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:0.3,
    borderRadius:10,
    borderColor:"#D43736",
},
  nameTextBox:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:0.3,
    borderRadius:10,
    borderColor:"#D43736",
  },
  addTextBox:{
    flex:1.5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:0.3,
    borderRadius:10,
    borderColor:"#D43736",
  },
  black: {
    fontSize: 20,
    textAlign:"center",
  },
  table: {
    flex: 1,
  },
  tableBottom:{
    flex:4,
  },
  row:{
    height:50,
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "space-between",
    borderColor:"white",
  },
  tableBottomRow:{
    height:70,
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "space-between",
    borderColor:"white",
  },
});

export default DetailScore;