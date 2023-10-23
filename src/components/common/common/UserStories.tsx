import React from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';
import {Text} from './Text';
import {TouchableOpacity} from 'react-native-gesture-handler';

const UserStories = () => {
  const userStoriesObject = [
    {
      id: 1,
      name: 'Ruffles',
      image: require('../../../assets/images/avatar4.png'),
    },
    {
      id: 2,
      name: 'Sabanok',
      image: require('../../../assets/images/avatar2.png'),
    },
    {
      id: 3,
      name: 'Adeogo',
      image: require('../../../assets/images/avatar3.png'),
    },
    {
      id: 4,
      name: 'Eternal',
      image: require('../../../assets/images/avatar1.png'),
    },
    {
      id: 5,
      name: 'Adeogo',
      image: require('../../../assets/images/avatar2.png'),
    },
    {
      id: 6,
      name: 'Eternal',
      image: require('../../../assets/images/avatar1.png'),
    },
  ];
  const Item = ({name, image}: any) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Image source={image} style={styles.image} />
        <Text text={name} style={styles.name} />
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={userStoriesObject}
      horizontal={true}
      keyExtractor={(item: any) => item?.id}
      renderItem={({item}) => <Item name={item.name} image={item.image} />}
    />
  );
};
const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  name: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 8,
  },
  item: {},
});

export default UserStories;
