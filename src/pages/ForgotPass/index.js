import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import firebase from '../../config/Firebase';
const ForgotPass = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handel = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(res => {
        console.log(res);
        showMessage({
          message: 'Silahkan Periksa Email Anda',
          color: 'white',
          type: 'info',
        });
        navigation.navigate('SignIn');
      })
      .catch(error => {
        console.log(error);
        showMessage({
          message: error.message,
          color: 'white',
          type: 'danger',
        });
      });
  };
  return (
    <View style={styles.page}>
      <Text style={styles.judul}>Masukkan Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TouchableOpacity style={styles.button} onPress={handel}>
        <Text style={styles.text}>Kirim Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    marginTop: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    marginLeft: 12,
    marginRight: 12,
    fontSize: 18,
  },
  judul: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
  },
  button: {
    borderRadius: 10,
    marginTop: 35,
    width: 200,
    height: 40,
    left: 20,
    paddingTop: 8,
    backgroundColor: '#1377AF',
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
