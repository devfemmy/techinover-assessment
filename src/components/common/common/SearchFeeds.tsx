import React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import {Text} from './Text';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const SearchFeeds = () => {
  const userStoriesObject = [
    {
      id: 1,
      name: 'Ruffles',
      image: require('../../../assets/images/banner1.png'),
    },
    {
      id: 2,
      name: 'Sabanok',
      image: require('../../../assets/images/banner2.png'),
    },
    {
      id: 3,
      name: 'Adeogo',
      image: require('../../../assets/images/banner3.png'),
    },
    {
      id: 4,
      name: 'Eternal',
      image: require('../../../assets/images/banner4.png'),
    },
    {
      id: 5,
      name: 'Adeogo',
      image: require('../../../assets/images/banner5.png'),
    },
    {
      id: 6,
      name: 'Eternal',
      image: require('../../../assets/images/banner1.png'),
    },
    {
      id: 5,
      name: 'Adeogo',
      image: require('../../../assets/images/banner5.png'),
    },
    {
      id: 6,
      name: 'Eternal',
      image: require('../../../assets/images/banner1.png'),
    },
  ];
  const numColumns = 3;
  const totalItems = 100;
  const repeatedData = [];
  for (let i = 0; i < totalItems; i += userStoriesObject.length) {
    repeatedData.push(...userStoriesObject);
  }
  const rows = [];
  for (let i = 0; i < repeatedData.length; i += numColumns) {
    rows.push(repeatedData.slice(i, i + numColumns));
  }
  return (
    <ScrollView contentContainerStyle={styles.container} horizontal={true}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map(item => (
            <TouchableOpacity
              key={Math.random().toString(36).substring(2)}
              style={styles.item}>
              <Image source={item.image} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width / 3,
    // height: 100,
    resizeMode: 'cover',
  },
  name: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 8,
  },
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
});

export default SearchFeeds;
