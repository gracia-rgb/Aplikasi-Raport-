import React, {useState} from 'react';
import firebase from '../../config/Firebase';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Logo} from '../../assets/icon';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [angkatan, setAngkatan] = useState('');

  const handelSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        navigation.navigate('Menu', {uid: res.user.uid, angkatan: angkatan});
      })
      .catch(error => {
        console.log(error);
        showMessage({
          message: error.message,
          color: 'white',
          type: 'danger',
        });
      });
    setEmail('');
    setPassword('');
    setAngkatan('');
  };

  const handel = () => {
    navigation.navigate('ForgotPass');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Logo style={styles.logo} />
        <Text style={styles.judul}>E-Raport</Text>
        <Text style={styles.judull}>SMP Advent Makassar</Text>
        <View style={styles.pad}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Kata Sandi"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Angkatan"
            value={angkatan}
            onChangeText={value => setAngkatan(value)}
          />
          <TouchableOpacity style={styles.submit} onPress={handelSubmit}>
            <Text style={styles.label}>Masuk</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.passbutton} onPress={handel}>
          <Text style={styles.pass}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    height: 800,
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    marginTop: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    fontSize: 18,
  },
  pad: {
    padding: 28,
  },
  submit: {
    borderRadius: 10,
    marginTop: 30,
    width: 321,
    height: 61,
    alignItems: 'center',
    backgroundColor: '#61B15A',
  },
  label: {
    color: 'white',
    fontSize: 25,
    fontStyle: 'normal',
    letterSpacing: 0.08,
    alignItems: 'center',
    marginTop: 10,
    fontFamily: 'AlegreyaSans-Medium',
  },
  judul: {
    fontSize: 25,
    color: 'black',
    marginLeft: 165,
    marginTop: 20,
  },
  judull: {
    fontSize: 25,
    color: 'black',
    marginTop: 10,
    marginLeft: 82,
  },
  logo: {
    marginTop: 110,
    marginLeft: 160,
  },
  pass: {
    fontSize: 20,
    color: 'gray',
    marginLeft: -10,
  },
  passbutton: {
    marginTop: -15,
    marginLeft: 132,
  },
});
