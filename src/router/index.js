import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn';
import Menu from '../pages/Menu';
import Profile from '../pages/Profile';
import LihatNilai from '../pages/LihatNilai';
import ForgotPass from '../pages/ForgotPass';
import Nilai from '../pages/Nilai';
import Current from '../pages/Current';
const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{headerShown: false, animationEnabled: false}}
      />
      <Stack.Screen
        name="Current"
        component={Current}
        options={{headerShown: false, animationEnabled: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false, animationEnabled: false}}
      />
      <Stack.Screen
        name="Scan"
        component={Nilai}
        options={{headerShown: false, animationEnabled: false}}
      />
      <Stack.Screen
        name="Lihat"
        component={LihatNilai}
        options={{headerShown: false, animationEnabled: false}}
      />
      <Stack.Screen
        name="ForgotPass"
        component={ForgotPass}
        options={{headerShown: false, animationEnabled: false}}
      />
    </Stack.Navigator>
  );
}
export default Router;
