import React from 'react';
import {Text, View} from 'react-native';
import ProfilePicture from '../../ProfilePicture';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';
Icon.loadFont();
const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.right}>
        <Icon name="dots-three-vertical" size={18} />
      </View>
    </View>
  );
};

export default Header;
