import React, { FunctionComponent, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store';
import { Card } from '../../components/Card';
import { FeedPageStyle } from './FeedPage.style';

const FeedPage: FunctionComponent = observer(() => {
  const feedModel = useStore('feedModel');

  const renderCards = observer(() => (
    <>
      {feedModel.posts.map(({isLoaded}) => (
        <Card isLoaded={isLoaded} />
      ))}
    </>
  ));

  useEffect(() => {
  }, []);

  return (
    <View>
      <ScrollView style={FeedPageStyle.listView}>
        {renderCards()}
      </ScrollView>
    </View>
  );
});

export {
  FeedPage
};
