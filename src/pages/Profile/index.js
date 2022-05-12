import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import BottomNavigation from '../../components/molecules/BottomNavigation';
import {Home, User} from '../../assets/icon';
import firebase from '../../config/Firebase';
const Profile = ({navigation, route}) => {
  const [users, setUsers] = useState({});
  const {uid, angkatan} = route.params;
  const getUser = () => {
    firebase
      .database()
      .ref(`/${angkatan}/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setUsers(res.val());
        }
        console.log(users);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const handle = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate('SignIn');
      });
  };
  return (
    <>
      <View style={styles.page}>
        <Text style={styles.profText}>Profile</Text>
        <Text style={styles.text}>Nama Lengkap</Text>
        <Text style={styles.i}>{users.namaLengkap}</Text>
        <Text style={styles.text}>NISN</Text>
        <Text style={styles.i}>{users.nomorInduk}</Text>
        <Text style={styles.text}>Email</Text>
        <Text style={styles.i}>{users.email}</Text>
        <Text style={styles.text}>Nama Ayah</Text>
        <Text style={styles.i}>{users.ayah}</Text>
        <Text style={styles.text}>Nama Ibu</Text>
        <Text style={styles.i}>{users.ibu}</Text>
        <View style={styles.gap}>
          <BottomNavigation
            Homes={<Home />}
            Profiles={<User />}
            onPressHome={() => navigation.navigate('Menu', {uid, angkatan})}
          />
        </View>
        <View style={styles.vie}>
          <TouchableOpacity style={styles.log} onPress={handle}>
            <Text style={styles.loguot}>Keluar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    fontSize: 18,
    marginTop: 35,
    marginLeft: 17,
  },
  profText: {
    fontSize: 30,
    color: '#000000',
    marginTop: 44,
    marginLeft: 160,
    fontFamily: 'Alegreya-Medium',
  },
  gap: {
    marginTop: 10,
  },
  i: {
    color: '#000000',
    fontSize: 18,
    marginLeft: 17,
    marginTop: 10,
  },
  log: {
    alignItems: 'center',
    borderRadius: 10,
    width: 321,
    height: 61,
    borderWidth: 2,
    alignContent: 'center',
    borderColor: 'hijau',
  },
  loguot: {
    marginTop: 12,
    fontSize: 20,
    color: '#61B15A',
  },
  vie: {
    alignItems: 'center',
  },
});
