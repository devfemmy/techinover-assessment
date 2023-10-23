import React, {useEffect, useState} from 'react';
import {Container, SafeAreaView, Text} from '../../../components/common/common';
import {View} from 'react-native';
import Header from '../../../components/common/common/Header';
import UserStories from '../../../components/common/common/UserStories';
import UserFeeds from '../../../components/common/common/UserFeeds';
import {dummyData} from '../../../../dummy';
const Home = () => {
  const [feeds, setUserFeeds] = useState([]);
  useEffect(() => {
    fetchJsonData();
  }, []);
  const fetchJsonData = () => {
    setTimeout(() => {
      const userFeeds = dummyData?.data.slice(0, 10);
      setUserFeeds(userFeeds);
    }, 1000);
  };
  return (
    <SafeAreaView>
      <Container>
        <Header />
        <UserStories />
        <UserFeeds feeds={feeds} />
      </Container>
    </SafeAreaView>
  );
};

export default Home;
