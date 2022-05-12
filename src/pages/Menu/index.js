import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import BottomNavigation from '../../components/molecules/BottomNavigation';
import {Home, User} from '../../assets/icon';
const Menu = ({navigation, route}) => {
  const {uid, angkatan} = route.params;
  const scanHandel = () => {
    navigation.navigate('Scan', {uid: uid, angkatan: angkatan});
  };
  const lihatHandel = () => {
    navigation.navigate('Current', {uid: uid, angkatan: angkatan});
  };
  return (
    <>
      <View style={styles.page}>
        <Text style={styles.menu}>Menu</Text>
        <TouchableOpacity style={styles.button} onPress={scanHandel}>
          <Text style={styles.text}>Lihat Dokumen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={lihatHandel}>
          <Text style={styles.text}>Lihat Nilai</Text>
        </TouchableOpacity>
        <View style={styles.gap}>
          <BottomNavigation
            Homes={<Home />}
            Profiles={<User />}
            onPressProfile={() =>
              navigation.navigate('Profile', {uid: uid, angkatan: angkatan})
            }
          />
        </View>
      </View>
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    width: 500,
    height: 10,
    flex: 1,
  },
  button: {
    backgroundColor: '#61B15A',
    width: 153,
    height: 115,
    borderRadius: 20,
    marginTop: 34,
    marginLeft: 125,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginTop: 45,
    textAlign: 'center',
    fontFamily: 'AlegreyaSans-Medium',
  },
  menu: {
    marginTop: 41,
    marginBottom: 99,
    marginLeft: 158,
    fontSize: 35,
    color: '#42484A',
    fontFamily: 'Alegreya-Medium',
  },
  gap: {
    marginTop: 80,
  },
});
