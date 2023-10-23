import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {Text} from './Text';
import {globalStyles} from '../../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import OptionIcon from '../../../assets/images/icon3.svg';
import SaveIcon from '../../../assets/images/save.svg';
import LikeIcon from '../../../assets/images/like.svg';
import CommentIcon from '../../../assets/images/comment.svg';
import ShareIcon from '../../../assets/images/share_.svg';

const UserFeeds = ({feeds}: any) => {
  const userStoriesObject = [
    {
      id: 1,
      name: 'instablog9ja and instablog9jamedia',
      image: require('../../../assets/images/avatar4.png'),
      banner: require('../../../assets/images/banner.png'),
    },
    {
      id: 2,
      name: 'Sabanok',
      image: require('../../../assets/images/avatar2.png'),
      banner: require('../../../assets/images/banner.png'),
    },
    {
      id: 3,
      name: 'Adeogo',
      image: require('../../../assets/images/avatar3.png'),
      banner: require('../../../assets/images/banner.png'),
    },
    {
      id: 4,
      name: 'Eternal',
      image: require('../../../assets/images/avatar1.png'),
      banner: require('../../../assets/images/banner.png'),
    },
    {
      id: 5,
      name: 'Adeogo',
      image: require('../../../assets/images/avatar2.png'),
      banner: require('../../../assets/images/banner.png'),
    },
    {
      id: 6,
      name: 'Eternal',
      image: require('../../../assets/images/avatar1.png'),
      banner: require('../../../assets/images/banner.png'),
    },
    {
      id: 44,
      name: 'Eternal',
      image: require('../../../assets/images/avatar1.png'),
      banner: require('../../../assets/images/banner.png'),
    },
    {
      id: 54,
      name: 'Adeogo',
      image: require('../../../assets/images/avatar2.png'),
      banner: require('../../../assets/images/banner.png'),
    },
    {
      id: 64,
      name: 'Eternal',
      image: require('../../../assets/images/avatar1.png'),
      banner: require('../../../assets/images/banner.png'),
    },
  ];

  const repeatedData = Array.from({length: 10}, () => userStoriesObject).flat();
  const Item = ({name, image, banner}: any) => {
    return (
      <View style={styles.item}>
        <View style={globalStyles.rowBetween}>
          <TouchableOpacity>
            <Image source={image} style={styles.image} />
          </TouchableOpacity>
          <Text text={name} style={styles.name} />
          <TouchableOpacity>
            <OptionIcon width={40} height={40} />
          </TouchableOpacity>
        </View>
        <View>
          <Image source={banner} style={styles.banner} />
        </View>
        <View style={globalStyles.rowBetween}>
          <View style={[globalStyles.rowBetween, styles.iconContainer]}>
            <TouchableOpacity>
              <LikeIcon width={25} height={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CommentIcon width={25} height={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <ShareIcon width={25} height={30} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <SaveIcon width={35} height={30} />
          </TouchableOpacity>
        </View>
        <View>
          <Text text="100 Likes" />
          <Text text="Username Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... more " />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      horizontal={false}
      data={repeatedData}
      keyExtractor={() => Math.random().toString(36).substring(2)}
      renderItem={({item}) => (
        <Item name={item.name} banner={item.banner} image={item.image} />
      )}
    />
  );
};
const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  name: {
    textAlign: 'left',
    fontSize: 14,
    width: '75%',
    fontWeight: '300',
  },
  banner: {
    width: '100%',
    resizeMode: 'cover',
  },
  item: {
    marginVertical: 10,
  },
  iconContainer: {
    width: '25%',
  },
});

export default UserFeeds;
