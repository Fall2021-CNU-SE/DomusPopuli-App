import React from 'react';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';

const RoomList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./image/User.png')}
          style={styles.imageButton}
        />
        <Text style={styles.headerText}>방 목록</Text>
        <Image 
          source={require('./image/plus.png')}
          style={styles.imageButton}
        />
      </View>

      <View style={styles.content}> 
        <View style={styles.tableheader}>
            <View style={styles.tableheaderRoomName}>
              <Text style={styles.tableheaderText}>방 이름</Text>
            </View>
            <View style={styles.tableheaderScore}>
              <Text style={styles.tableheaderText}> 점수 </Text>
            </View>
        </View>


{/* scoll view 용우화이팅*/}
        <View style={styles.table}>
          <View style={styles.row}>
						<View style={styles.tableRoomName}>
							<Text style={styles.rowText}>궁동 방</Text>
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
  tableheader:{
		flexDirection: "row",
		flex: 1,
  },
  tableheaderText:{
		fontSize:20,
		color:"white",
		fontWeight:"bold",
		textAlign:"center",
  },
  tableheaderRoomName:{
		backgroundColor:"#D43736",
		borderRightWidth:1,
		borderRightColor: "white",
		flex: 3,
		borderRadius:20,
		justifyContent: "center",
  },
  tableheaderScore:{
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
    paddingTop: 20,
    // paddingBottom: 20,
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "space-between",
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
    borderBottomWidth: 0.3,
    borderStyle: "solid",
    // borderColor: "#DCDCDC",
    borderColor: "white",
		// borderColor: "#DCDCDC",
		
    
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
    // width: "21%",
    fontSize: 20,
    textAlign: "center",
  },
});

export default RoomList;