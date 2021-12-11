import React from 'react';
import { Text, View, Image, StyleSheet, TextInput,
TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RoomList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./image/User.png')}
          style={styles.imageButton}
        />
        <Text style={styles.headerText}>방 목록</Text>
        <TouchableWithoutFeedback
          onPress={ ()=>navigation.navigate("RoomMade") }
        >
          <Image 
            source={require('./image/plus.png')}
            style={styles.imageButton}
          />
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.content}> 
        <View style={styles.tableHeader}>
            <View style={styles.tableHeaderRoomName}>
              <Text style={styles.tableHeaderText}>방 이름</Text>
            </View>
            <View style={styles.tableHeaderScore}>
              <Text style={styles.tableHeaderText}> 점수 </Text>
            </View>
        </View>


{/* scoll view 용우화이팅*/}
        <View style={styles.table}>
          <View style={styles.row}>
            <TouchableWithoutFeedback 
              onPress={ () => navigation.navigate("CheckList") }
            > 
              <View style={styles.tableRoomName}>
                <Text style={styles.rowText}>궁동 방</Text>
              </View>
            </TouchableWithoutFeedback>
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
    backgroundColor: "white",
  },
  imageButton: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  headerText: {
    fontSize: 40,
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
  // topRow: {
  //   paddingLeft: 20,
  //   paddingRight: 20,
  //   paddingTop: 20,
  //   paddingBottom: 20,
  //   flexDirection: "row",
  //   alignContent: "space-around",
  //   justifyContent: "space-between",
  //   borderWidth: 0.3,
  //   borderStyle: "solid",
  //   // borderColor: "#DCDCDC",
  //   borderColor: "white",
  // },
  rowText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default RoomList;
