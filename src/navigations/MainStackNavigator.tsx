import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {colors} from '../constants';
import {hp} from '../utils';
import {RootBottomTabNavigator} from './RootBottomTabNavigator';

const MainStack = createStackNavigator();

export const MainStackNavigator = (): JSX.Element => {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: true,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: '500',
          fontSize: hp(12),
        },
        headerBackTitleVisible: false,
        headerTitleAlign: 'left',
        headerTintColor: colors.primaryBg,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}>
      <MainStack.Screen
        name="HomeTab"
        component={RootBottomTabNavigator}
        options={() => ({
          headerShown: false,
        })}
      />
      {/* <MainStack.Screen
        name="Chat"
        component={Chat}
        options={() => ({
          title: '',
          headerShown: true,
          headerShadowVisible: true,
          headerStyle: {
            height: hp(100),
          },
          headerLeft: () => <ChatHeaderLeft />,
          presentation: 'modal',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          transitionSpec: {
            open: TransitionSpecs.BottomSheetSlideInSpec,
            close: TransitionSpecs.BottomSheetSlideOutSpec,
          },
        })}
      /> */}
    </MainStack.Navigator>
  );
};
