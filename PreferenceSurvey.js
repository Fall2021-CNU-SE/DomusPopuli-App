import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';

const PreferenceSurvey = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./image/left_arrow.png')}
          style={styles.imageButton}
        />
        <Text style={styles.black}>선호도 조사에 대한 의사 확인</Text>
        <Image
          source={require('./image/x.png')}
          style={styles.imageButton}
        />
      </View>
      
      <View style={styles.title}></View>

      <View style={styles.content}>
        <Text style={styles.contentText}>{'사용자의 기호를 맞추기 위해 선호도를 입력해주세요. 생략하면 다음에 입력할 수 있습니다.'}</Text>
      </View>
      <View style={styles.skip}>
        <Text style={styles.skipText}>생략하기</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.boldWhite}>다음</Text>
      </View>
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
    fontWeight: "bold",
  },
  contentText: {
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 20,
    lineHeight: 40,
    textAlign:'center'
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
  skip: {
    borderBottomWidth: 1.5,
    paddingBottom: 3,
    borderBottomColor: "gray",
    marginBottom: 10,
    width: 75,
    position: 'relative',
    left: '40.5%',
  },
  skipText: {
    textAlign: 'center',
    fontSize: 20, 
    color: "gray",
    fontWeight: "bold",
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D43736",
  },
});

export default PreferenceSurvey;