import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const Scan = ({navigation, route}) => {
  const scanner = useRef(null);
  const {uid, angkatan} = route.params;
  const [scan, setScan] = useState(false);
  const onSuccess = e => {
    Linking.openURL(e.data);
  };
  return !scan ? (
    <View>
      <>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => setScan(true)}>
          <Text style={styles.buttonText}>Start scan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => navigation.navigate('Menu', {uid, angkatan})}>
          <Text style={styles.buttonText}>Kembali</Text>
        </TouchableOpacity>
      </>
    </View>
  ) : (
    <QRCodeScanner
      onRead={onSuccess}
      showMarker={true}
      ref={scanner}
      reactivate={true}
      bottomContent={
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => setScan(false)}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
    marginTop: 40,
  },
  buttonTouchable: {
    padding: 16,
  },
  vie: {
    marginTop: 80,
  },
  sc: {
    marginTop: 100,
    flex: 1,
  },
});

export default Scan;
