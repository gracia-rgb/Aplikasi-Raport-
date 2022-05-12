import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import firebase from '../../config/Firebase';
import {Table, Row} from 'react-native-table-component';
const Current = ({navigation, route}) => {
  const [users, setUsers] = useState({});
  const {uid, angkatan} = route.params;
  const [filess, setFiles] = useState([]);
  const [ket, setKet] = useState({});
  const back = () => {
    navigation.navigate('Lihat', {uid: uid, angkatan: angkatan});
  };
  useEffect(() => {
    //sem1
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/nilaiupdate/data`)
      .on('value', res => {
        if (res.val()) {
          const rawData = res.val();
          const productArray = [];
          Object.keys(rawData).map(itemFile => {
            productArray.push({
              id: itemFile,
              ...rawData[itemFile],
            });
            console.log(itemFile);
          });
          setFiles(productArray);
          console.log(productArray);
        }
      });
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/nilaiupdate/data`)
      .on('value', res => {
        if (res.val()) {
          setUsers(res.val());
        }
      });
    getke1();
  }, []);
  const getke1 = () => {
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/nilaiupdate`)
      .on('value', res => {
        if (res.val()) {
          setKet(res.val());
        }
        console.log(users);
      });
  };
  const list = () => {
    return filess.map(itemFile => {
      const data = [itemFile.MataPelajaran, itemFile.Nilai];
      return (
        <View>
          <View key={itemFile.id} style={styles.table}>
            <Table>
              <Row data={data} textStyle={styles.text} />
            </Table>
          </View>
        </View>
      );
    });
  };
  return (
    <>
      <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <TouchableOpacity onPress={back}>
            <Text style={styles.butt}>History</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.i}>{ket.kelas}</Text>
            <View>
              <Text style={styles.i}>{ket.ket}</Text>
            </View>
            <View style={styles.c}>
              <Text style={styles.b}>{ket.ketn}</Text>
            </View>
            {list()}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Current;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  table: {
    marginLeft: 20,
    marginTop: 15,
  },
  text: {
    fontSize: 18,
    margin: 6,
    color: 'black',
  },
  i: {
    marginTop: 20,
    marginLeft: 25,
    fontSize: 20,
    width: 150,
    color: 'black',
  },
  b: {
    marginLeft: 5,
    fontSize: 20,
    width: 50,
    color: 'black',
  },
  c: {
    marginTop: -27,
    marginLeft: 210,
    fontSize: 20,
    width: 100,
  },
  butt: {
    marginLeft: 290,
    marginTop: 10,
    backgroundColor: '#61B15A',
    width: 90,
    height: 28,
    borderRadius: 20,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});
