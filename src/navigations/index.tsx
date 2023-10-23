import React, {useMemo, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthStackNavigator} from './AuthStackNavigator';
import {MainStackNavigator} from './MainStackNavigator';
import {useNavigationContainerHelper, PERSISTENCE_KEY} from '../hooks';
import {globalStyles} from '../styles';
import {AuthContext} from '../context/context';

export const NavigationContainerComponent = (): JSX.Element => {
  // const { initialState, isReady } = useNavigationContainerHelper();
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  // if (!isReady) {
  //   return (
  //     <View style={[{ flex: 1 }, globalStyles.rowCenter]}>
  //       <ActivityIndicator />
  //     </View>
  //   );
  // }
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const authContext = useMemo(
    () => ({
      signIn: (token: string) => {
        setUserToken(token);
        setIsLoading(false);
      },
      signOut: () => {
        setUserToken(null);
        setIsLoading(false);
      },
    }),
    [],
  );
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? <AuthStackNavigator /> : <MainStackNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
