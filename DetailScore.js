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
          source={require('./image/plus.png')}
          style={styles.imageButton}
        />
      </View>

      <View style={styles.content}> 
        <View style={styles.tableHeader}>
          <View style={styles.tableHeaderRoomName}>
            <Text style={styles.tableHeaderText}>카테고리</Text>
          </View>
          <View style={styles.tableHeaderScore}>
            <Text style={styles.tableHeaderText}>점수</Text>
          </View>
        </View>


        <View style={styles.table}>
          <View style={styles.row}>
			      <View style={styles.tableRoomName}>
			        <Text style={styles.rowText}>집안</Text>
			      </View>
			      <View style={styles.tableScore}>
			        <Text style={styles.rowText}> 48 점</Text>
			      </View>
          </View>

          <View style={styles.row}>
			      <View style={styles.tableRoomName}>
			        <Text style={styles.rowText}>화장실 등등등</Text>
			      </View>
			      <View style={styles.tableScore}>
			        <Text style={styles.rowText}> 98 점</Text>
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
  tableHeader:{
	flexDirection: "row",
	flex: 1,
  },
  tableHeaderText:{
	fontSize:20,
	color:"white",
	fontWeight:"bold",
	textAlign:"center",
  },
  tableHeaderRoomName:{
    backgroundColor:"#D43736",
    borderRightWidth:1,
    borderRightColor: "white",
    flex: 3,
    borderRadius:20,
    justifyContent: "center",
  },
  tableHeaderScore:{
    backgroundColor: "#D43736",
    borderRadius:20,
    flex: 1,
    justifyContent: "center",
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
  black: {
    fontSize: 20,
    textAlign:"center",
  },
  table: {
    flex: 9,
  },
  tableRoomName:{
    flex: 3,
    borderRightWidth:1,
    borderRightColor: "black",
	},
  tableScore:{
    flex:1,
	},
  row:{
    height:50,
    // paddingLeft: 20,
    // paddingRight: 20,
    // paddingBottom: 20,
    paddingTop: 20,
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
  rowText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default DetailScore;