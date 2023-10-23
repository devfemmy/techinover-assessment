import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalStyles} from '../../../styles';
import IgLogo from '../../../assets/images/ig_logo.svg';
import LikeIcon from '../../../assets/images/like1.svg';
import AddIcon from '../../../assets/images/add.svg';
import MessageIcon from '../../../assets/images/icon2.svg';

const Header = () => {
  return (
    <View style={{marginBottom: 10}}>
      <View style={globalStyles.rowBetween}>
        <TouchableOpacity>
          <IgLogo width={120} height={40} />
        </TouchableOpacity>
        <View style={[globalStyles.rowBetween, styles.headerContainer]}>
          <LikeIcon width={30} height={20} />
          <MessageIcon width={30} height={20} />
          <AddIcon width={30} height={20} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    width: '30%',
  },
});
export default Header;
