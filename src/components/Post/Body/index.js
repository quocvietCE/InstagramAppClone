import React from 'react';
import {Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const Body = ({imageUri}) => {
  console.log('Body imageUri: ', imageUri);
  return <FastImage source={{uri: imageUri}} style={styles.image} />;
};

export default Body;
