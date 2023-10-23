import React, {useEffect, useState} from 'react';
import {Container, SafeAreaView, Text} from '../../../components/common/common';
import {Input as SearchInput} from '@ui-kitten/components';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import SearchIcon from '../../../assets/images/search.svg';
import {StyleSheet} from 'react-native';
import {colors} from '../../../constants';
import SearchFeeds from '../../../components/common/common/SearchFeeds';
const SearchPage = () => {
  const [value, setValue] = React.useState('');
  const renderIcon = (): any => (
    <TouchableWithoutFeedback>
      <SearchIcon width={20} height={20} />
    </TouchableWithoutFeedback>
  );
  return (
    <SafeAreaView>
      <Container>
        <SearchInput
          value={value}
          placeholder="Search"
          style={styles.input}
          accessoryLeft={renderIcon}
          onChangeText={nextValue => setValue(nextValue)}
        />
        <SearchFeeds />
      </Container>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#262626',
    borderWidth: 0,
    marginVertical: 15,
  },
});

export default SearchPage;
