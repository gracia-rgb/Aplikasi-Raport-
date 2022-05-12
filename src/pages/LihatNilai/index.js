import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import firebase from '../../config/Firebase';
const LihatNilai = ({navigation, route}) => {
  const [filess, setFiles] = useState([]);
  const [filess2, setFiles2] = useState([]);
  const [filess3, setFiles3] = useState([]);
  const [filess4, setFiles4] = useState([]);
  const [filess5, setFiles5] = useState([]);
  const [filess6, setFiles6] = useState([]);
  const [users, setUsers] = useState({});
  const [users2, setUsers2] = useState({});
  const [users3, setUsers3] = useState({});
  const [users4, setUsers4] = useState({});
  const [users5, setUsers5] = useState({});
  const [users6, setUsers6] = useState({});
  const [ket, setKet] = useState({});
  const [ket2, setKet2] = useState({});
  const [ket3, setKet3] = useState({});
  const [ket4, setKet4] = useState({});
  const [ket5, setKet5] = useState({});
  const [ket6, setKet6] = useState({});
  const {uid, angkatan} = route.params;
  const back = () => {
    navigation.navigate('Menu', {uid: uid, angkatan: angkatan});
  };
  const getke1 = () => {
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas1semganjil`)
      .on('value', res => {
        if (res.val()) {
          setKet(res.val());
        }
        console.log(users);
      });
  };
  const getke2 = () => {
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas1semgenap`)
      .on('value', res => {
        if (res.val()) {
          setKet2(res.val());
        }
        console.log(users);
      });
  };
  const getke3 = () => {
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas2semganjil`)
      .on('value', res => {
        if (res.val()) {
          setKet3(res.val());
        }
        console.log(users);
      });
  };
  const getke4 = () => {
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas2semgenap`)
      .on('value', res => {
        if (res.val()) {
          setKet4(res.val());
        }
        console.log(users);
      });
  };
  const getke5 = () => {
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas3semganjil`)
      .on('value', res => {
        if (res.val()) {
          setKet5(res.val());
        }
        console.log(users);
      });
  };
  const getke6 = () => {
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas3semgenap`)
      .on('value', res => {
        if (res.val()) {
          setKet6(res.val());
        }
        console.log(users);
      });
  };

  useEffect(() => {
    //sem1
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas1semganjil/data`)
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
    //sem 2
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas1semgenap/data`)
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
          setFiles2(productArray);
          console.log(productArray);
        }
      });
    //sem 3
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas2semganjil/data`)
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
          setFiles3(productArray);
          console.log(productArray);
        }
      });
    //sem 4
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas2semgenap/data`)
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
          setFiles4(productArray);
          console.log(productArray);
        }
      });
    //sem 5
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas3semganjil/data`)
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
          setFiles5(productArray);
          console.log(productArray);
        }
      });
    //sem 6
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas3semgenap/data`)
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
          setFiles6(productArray);
          console.log(productArray);
        }
      });
    //sem1 ket
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas1semganjil/data`)
      .on('value', res => {
        if (res.val()) {
          setUsers(res.val());
        }
      });
    //sem2 ket
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas1semgenap/data`)
      .on('value', res => {
        if (res.val()) {
          setUsers2(res.val());
        }
      });
    //sem3 ket
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas2semganjil/data`)
      .on('value', res => {
        if (res.val()) {
          setUsers3(res.val());
        }
      });
    //sem4 ket
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas2semgenap/data`)
      .on('value', res => {
        if (res.val()) {
          setUsers4(res.val());
        }
      });
    //sem5 ket
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas3semganjil/data`)
      .on('value', res => {
        if (res.val()) {
          setUsers5(res.val());
        }
      });
    //sem6 ket
    firebase
      .database()
      .ref(`/${angkatan}/${uid}/kelas3semgenap/data`)
      .on('value', res => {
        if (res.val()) {
          setUsers6(res.val());
        }
      });
    getke1();
    getke2();
    getke3();
    getke4();
    getke5();
    getke6();
  }, []);

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
  const list2 = () => {
    return filess2.map(itemFile => {
      const data = [itemFile.MataPelajaran, itemFile.Nilai];
      return (
        <View key={itemFile.id} style={styles.table}>
          <Table>
            <Row data={data} textStyle={styles.text} />
          </Table>
        </View>
      );
    });
  };
  const list3 = () => {
    return filess3.map(itemFile => {
      const data = [itemFile.MataPelajaran, itemFile.Nilai];
      return (
        <View key={itemFile.id} style={styles.table}>
          <Table>
            <Row data={data} textStyle={styles.text} />
          </Table>
        </View>
      );
    });
  };
  const list4 = () => {
    return filess4.map(itemFile => {
      const data = [itemFile.MataPelajaran, itemFile.Nilai];
      return (
        <View key={itemFile.id} style={styles.table}>
          <Table>
            <Row data={data} textStyle={styles.text} />
          </Table>
        </View>
      );
    });
  };
  const list5 = () => {
    return filess5.map(itemFile => {
      const data = [itemFile.MataPelajaran, itemFile.Nilai];
      return (
        <View key={itemFile.id} style={styles.table}>
          <Table>
            <Row data={data} textStyle={styles.text} />
          </Table>
        </View>
      );
    });
  };
  const list6 = () => {
    return filess6.map(itemFile => {
      const data = [itemFile.MataPelajaran, itemFile.Nilai];
      return (
        <View key={itemFile.id} style={styles.table}>
          <Table>
            <Row data={data} textStyle={styles.text} />
          </Table>
        </View>
      );
    });
  };
  return (
    <>
      <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
        <View>
          <TouchableOpacity onPress={back}>
            <Text style={styles.butt}>Back</Text>
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
          <View>
            <Text style={styles.i}>{ket2.kelas}</Text>
            <View>
              <Text style={styles.i}>{ket2.ket}</Text>
            </View>
            <View style={styles.c}>
              <Text style={styles.b}>{ket2.ketn}</Text>
            </View>
            {list2()}
          </View>
          <View>
            <Text style={styles.i}>{ket3.kelas}</Text>
            <View>
              <Text style={styles.i}>{ket3.ket}</Text>
            </View>
            <View style={styles.c}>
              <Text style={styles.b}>{ket3.ketn}</Text>
            </View>
            {list3()}
          </View>
          <View>
            <Text style={styles.i}>{ket4.kelas}</Text>
            <View>
              <Text style={styles.i}>{ket4.ket}</Text>
            </View>
            <View style={styles.c}>
              <Text style={styles.b}>{ket4.ketn}</Text>
            </View>
            {list4()}
          </View>
          <View>
            <Text style={styles.i}>{ket5.kelas}</Text>
            <View>
              <Text style={styles.i}>{ket5.ket}</Text>
            </View>
            <View style={styles.c}>
              <Text style={styles.b}>{ket5.ketn}</Text>
            </View>
            {list5()}
          </View>
          <View>
            <Text style={styles.i}>{ket6.kelas}</Text>
            <View>
              <Text style={styles.i}>{ket6.ket}</Text>
            </View>
            <View style={styles.c}>
              <Text style={styles.b}>{ket6.ketn}</Text>
            </View>
            {list6()}
          </View>
        </View>
      </ScrollView>
    </>
  );
};
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
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    width: '100%',
    height: 300,
    padding: 16,
    paddingTop: 100,
  },
  sem: {
    fontSize: 28,
    marginLeft: 25,
    color: 'black',
    marginTop: 30,
    marginBottom: 20,
  },
  sem1: {
    marginLeft: 27,
    color: 'black',
    fontSize: 20,
    marginTop: 20,
  },
  sem2: {
    marginLeft: 220,
    color: 'black',
    fontSize: 20,
    marginTop: -25,
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
  se: {
    marginLeft: 26,
    borderWidth: 1,
    width: 340,
    borderRadius: 2,
  },
  title: {
    fontSize: 15,
    marginLeft: 10,
    color: '#190D68',
  },
  dt: {
    marginTop: 20,
  },
  ket: {
    marginTop: -20,
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
});
export default LihatNilai;
