import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ScrollView,
} from 'react-native';
import BottomNavigation from '../../components/molecules/BottomNavigation';
import {Home, User} from '../../assets/icon';
import QRCode from 'react-native-qrcode-svg';
import firebase from '../../config/Firebase';
const Nilai = ({route, navigation}) => {
  const {uid, angkatan} = route.params;
  const [users, setUsers] = useState({});
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [show5, setShow5] = useState(true);
  const [show6, setShow6] = useState(true);
  useEffect(() => {
    firebase
      .database()
      .ref(`/${angkatan}/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setUsers(res.val());
        }
      });
  }, [angkatan, uid]);

  const back = () => {
    navigation.navigate('Menu', {uid: uid, angkatan: angkatan});
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <TouchableOpacity onPress={back}>
            <Text style={styles.butt}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.titled}>Dokumen Nilai</Text>
          <Text style={styles.title}>Semester I</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(users.linkkelas1semsterganjil)}>
            <Text style={styles.textt}>Buka</Text>
          </TouchableOpacity>
          <View style={styles.qr}>
            {!show ? (
              <QRCode value={users.linkkelas1semesterganjil} size={200} />
            ) : null}
            <TouchableOpacity style={styles.btn} onPress={() => setShow(!show)}>
              <Text style={styles.textt}>QR Code</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Semester II</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(users.linkkelas1semestergenap)}>
            <Text style={styles.textt}>Buka</Text>
          </TouchableOpacity>
          <View style={styles.qr}>
            {!show2 ? (
              <QRCode value={users.linkkelas1semstergenap} size={200} />
            ) : null}
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setShow2(!show2)}>
              <Text style={styles.textt}>QR Code</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Semester III</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(users.linkkelas2semsterganjil)}>
            <Text style={styles.textt}>Buka</Text>
          </TouchableOpacity>
          <View style={styles.qr}>
            {!show3 ? <QRCode value={users.linksem3} size={200} /> : null}
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setShow3(!show3)}>
              <Text style={styles.textt}>QR Code</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Semester IV</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(users.linkkelas2semstergenap)}>
            <Text style={styles.textt}>Buka</Text>
          </TouchableOpacity>
          <View style={styles.qr}>
            {!show4 ? (
              <QRCode value={users.linkkelas2semestergenap} size={200} />
            ) : null}
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setShow4(!show4)}>
              <Text style={styles.textt}>QR Code</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Semester V</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(users.linkkelas3semsterganjil)}>
            <Text style={styles.textt}>Buka</Text>
          </TouchableOpacity>
          <View style={styles.qr}>
            {!show5 ? (
              <QRCode value={users.linkkelas3semesterganjil} size={200} />
            ) : null}
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setShow5(!show5)}>
              <Text style={styles.textt}>QR Code</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Semester VI</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(users.linkkelas3semstergenap)}>
            <Text style={styles.textt}>Buka</Text>
          </TouchableOpacity>
          <View style={styles.qr}>
            {!show6 ? (
              <QRCode value={users.linkkelas3semstergenap} size={200} />
            ) : null}
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setShow6(!show6)}>
              <Text style={styles.textt}>QR Code</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gap}>
            <BottomNavigation
              Homes={<Home />}
              onPressHome={() =>
                navigation.navigate('Menu', {uid: uid, angkatan: angkatan})
              }
              Profiles={<User />}
              onPressProfile={() =>
                navigation.navigate('Profile', {uid: uid, angkatan: angkatan})
              }
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Nilai;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    marginTop: 35,
    marginLeft: 17,
  },
  gap: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#7897c0',
    width: 80,
    paddingTop: 2,
    paddingBottom: 5,
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 10,
  },
  textt: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: 'Alegreya-Medium',
  },
  title: {
    fontSize: 20,
    marginLeft: 20,
    fontFamily: 'Alegreya-Medium',
  },
  titled: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
    fontFamily: 'Alegreya-Medium',
  },
  btn: {
    backgroundColor: '#7897c0',
    width: 100,
    paddingTop: 2,
    paddingBottom: 5,
    marginTop: 5,
    marginLeft: -50,
    borderRadius: 10,
  },
  qr: {
    marginLeft: 70,
    marginTop: 10,
  },
  butt: {
    marginLeft: 300,
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
