import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Story = (props) => {
  const {
    story: {
      user: {id, uri, name},
    },
  } = props;
  const navigation = useNavigation();
  // console.log('story: ', props);
  const onPress = () => {
    navigation.navigate('StoryScreen', {userId: id});
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ProfilePicture uri={uri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
