import React from 'react';
import {FlatList} from 'react-native';
import {postData} from '../../assets/hardData';
import Post from '../Post';
import Stories from '../UserStoriesPreview';

const Feed = () => {
  return (
    <FlatList
      data={postData}
      renderItem={({item}) => <Post post={item} />}
      keyExtractor={({id}) => id}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
