import React from 'react';
import {View} from 'react-native';
import {Container, SafeAreaView, Text} from '../../../components/common/common';
import {globalStyles} from '../../../styles';

const Login = () => {
  return (
    <SafeAreaView>
      <Container>
        <View style={globalStyles.rowBetween}>
          <Text text="Login" />
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default Login;
