import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {KeyboardAwareScrollView as BaseKeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {globalStyles} from '../../../styles/globalStyles';

type KeyboardAwareScrollViewProps = BaseKeyboardAwareScrollView['props'] & {
  children: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export const KeyboardAwareScrollView = ({
  children,
  contentContainerStyle,
  ...rest
}: KeyboardAwareScrollViewProps) => {
  return (
    <BaseKeyboardAwareScrollView
      contentContainerStyle={[globalStyles.container, contentContainerStyle]}
      showsVerticalScrollIndicator={false}
      {...rest}>
      {children}
    </BaseKeyboardAwareScrollView>
  );
};
