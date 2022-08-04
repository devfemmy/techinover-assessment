/* eslint-disable react-native/no-inline-styles */
import React, {memo, ComponentProps} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Button as BaseButton} from '@ui-kitten/components';

import {hp} from '../../../utils/responsiveDesign';
import {colors} from '../../../constants';

type ButtonProps = ComponentProps<typeof BaseButton> & {
  title: string;
  isLoading?: boolean;
  loaderColor?: string;
  outlined?: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Button = memo(
  ({
    title,
    loaderColor = '#fff',
    isLoading = false,
    outlined,
    style,
    containerStyle,
    ...rest
  }: ButtonProps) => {
    return (
      <View style={containerStyle}>
        <BaseButton
          disabled={isLoading}
          status={outlined ? 'control' : 'primary'}
          style={[
            styles.btn,
            {
              backgroundColor: outlined ? 'transparent' : colors.secondaryBg,
              borderWidth: outlined ? 1 : 0,
              borderColor: outlined ? '#7D97C0' : 'transparent',
            },
            style,
          ]}
          accessoryRight={() =>
            isLoading ? (
              <ActivityIndicator animating size="small" color={loaderColor} />
            ) : (
              <View />
            )
          }
          {...rest}>
          {title}
        </BaseButton>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  btn: {
    borderRadius: hp(15),
    height: hp(50),
  },
});
