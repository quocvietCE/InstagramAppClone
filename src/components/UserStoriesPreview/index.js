import React from 'react';
import {FlatList} from 'react-native';
import {data} from '../../assets/hardData';
import UserStoryPreview from '../UserStoryPreview';
import styles from './styles';

const Stories = () => {
  return (
    <FlatList
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={({id}) => id}
      horizontal
      renderItem={({item}) => <UserStoryPreview story={item} />}
    />
  );
};

export default Stories;
