import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

const BottomNavigation = ({Homes, Profiles, onPressHome, onPressProfile}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navMenu} onPress={onPressHome}>
        {Homes}
      </TouchableOpacity>
      <TouchableOpacity style={styles.nav} onPress={onPressProfile}>
        {Profiles}
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -174,
    right: 0,
    left: 0,
    flexDirection: 'row',
    paddingLeft: 37,
    paddingBottom: 15,
    paddingTop: 16,
    flex: 1,
  },
  navMenu: {
    marginLeft: 48,
  },
  nav: {
    marginTop: 5,
    marginLeft: 180,
  },
});
