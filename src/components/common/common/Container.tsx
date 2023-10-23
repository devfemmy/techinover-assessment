import React, {ComponentProps, memo} from 'react';
import {StyleSheet, ViewStyle, StyleProp} from 'react-native';
import {globalStyles} from '../../../styles/globalStyles';
import {ScrollView as BaseScrollView} from 'react-native-gesture-handler';

type Props = ComponentProps<typeof BaseScrollView> & {
  children: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export const Container = memo(
  ({children, contentContainerStyle, ...rest}: Props) => {
    return (
      <BaseScrollView
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          styles.container,
          globalStyles.container,
          contentContainerStyle,
        ]}
        {...rest}>
        {children}
      </BaseScrollView>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
