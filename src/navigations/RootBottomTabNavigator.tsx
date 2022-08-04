import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {hp} from '../utils';
import Home from '../screens/main/Home';
import {colors} from '../constants';

const RootBottomTab = createBottomTabNavigator();

export const RootBottomTabNavigator = (): JSX.Element => {
  return (
    <RootBottomTab.Navigator
      screenOptions={({route}) => ({
        headerTitleStyle: {
          fontWeight: '500',
          fontSize: hp(12),
        },
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          } else if (route.name === 'Subjects') {
            iconName = focused ? 'ios-book' : 'ios-book-outline';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'ios-mail' : 'ios-mail-outline';
          } else if (route.name === 'Teachers') {
            iconName = focused ? 'ios-people' : 'ios-people-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primaryBg,
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
      })}>
      <RootBottomTab.Screen name="Home" component={Home} />
      <RootBottomTab.Screen name="Subjects" component={Home} />
      <RootBottomTab.Screen name="Teachers" component={Home} />
      <RootBottomTab.Screen name="Messages" component={Home} />
      <RootBottomTab.Screen name="Profile" component={Home} />
    </RootBottomTab.Navigator>
  );
};
