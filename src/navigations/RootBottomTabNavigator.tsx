import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoIcon from '../assets/images/icon1.svg';
import HomeIcon from '../assets/images/icon4.svg';
import AddIcon from '../assets/images/add.svg';
import SearchIcon from '../assets/images/search.svg';
import ProfileIcon from '../assets/images/profile.svg';

import {hp} from '../utils';
import Home from '../screens/main/Home';
import {colors} from '../constants';
import SearchPage from '../screens/main/Search';

const RootBottomTab = createBottomTabNavigator();

export const RootBottomTabNavigator = (): JSX.Element => {
  return (
    <RootBottomTab.Navigator
      screenOptions={({route}) => ({
        headerTitleStyle: {
          fontWeight: '500',
          fontSize: hp(12),
        },
        tabBarLabel: '',
        tabBarStyle: {
          backgroundColor: colors.black,
          borderTopWidth: 0,
        },
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';
          if (route.name === 'Home') {
            return <HomeIcon width={25} height={25} />;
          } else if (route.name === 'Profile') {
            return <ProfileIcon width={25} height={25} />;
          } else if (route.name === 'Search') {
            return <SearchIcon width={25} height={25} />;
          } else if (route.name === 'Messages') {
            return <AddIcon width={25} height={25} />;
          } else if (route.name === 'Teachers') {
            return <VideoIcon width={25} height={25} />;
            // iconName = focused ? 'ios-videocam' : 'ios-videocam-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primaryBg,
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
      })}>
      <RootBottomTab.Screen name="Home" component={Home} />
      <RootBottomTab.Screen name="Search" component={SearchPage} />
      <RootBottomTab.Screen name="Teachers" component={Home} />
      <RootBottomTab.Screen name="Messages" component={Home} />
      <RootBottomTab.Screen name="Profile" component={Home} />
    </RootBottomTab.Navigator>
  );
};
