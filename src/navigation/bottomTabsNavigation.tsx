import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeStackContainer} from './stackHomeNavigation';
import {SettingStackContainer} from './stackSettingNavigation';
import {NotificationStackContainer} from './stackNotification';
import {RouteName} from 'constant';
import {Image} from 'react-native';
import {TabIcon} from 'assets';
import { sizes } from 'utils/sizes';
const Tab = createMaterialBottomTabNavigator();

type Props = {};
export const TabContainer = (props: Props) => {
  return (
    <Tab.Navigator
      initialRouteName={RouteName.HOME}
      activeColor="#FFF"
      inactiveColor="#17202A"
      shifting={true}
      barStyle={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name={RouteName.HOME}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarColor: '#2ECC71',
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Image
                style={{width: sizes._22sdp, height: sizes._22sdp, tintColor: color}}
                source={TabIcon.home}
              />
            ) : (
              <Image
                style={{width: sizes._18sdp, height: sizes._18sdp, tintColor: color}}
                source={TabIcon.home}
              />
            ),
        }}
        component={HomeStackContainer}
      />
      <Tab.Screen
        name={RouteName.SETTING}
        options={({route, navigation}) => ({
          tabBarLabel: 'Cài đặt',
          tabBarColor: '#FF7F50',
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Image
                style={{width: sizes._22sdp, height: sizes._22sdp, tintColor: color}}
                source={TabIcon.setting}
              />
            ) : (
              <Image
                style={{width: sizes._18sdp, height: sizes._18sdp, tintColor: color}}
                source={TabIcon.setting}
              />
            ),
        })}
        component={SettingStackContainer}
      />
      <Tab.Screen
        name={RouteName.NOTIFICATION}
        options={({route, navigation}) => ({
          tabBarLabel: 'Thông báo',
          tabBarColor: '#3498DB',
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Image
                style={{width: sizes._22sdp, height: sizes._22sdp, tintColor: color}}
                source={TabIcon.notification}
              />
            ) : (
              <Image
                style={{width: sizes._18sdp, height: sizes._18sdp, tintColor: color}}
                source={TabIcon.notification}
              />
            ),
        })}
        component={NotificationStackContainer}
      />
    </Tab.Navigator>
  );
};
