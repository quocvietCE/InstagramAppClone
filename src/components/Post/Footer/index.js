import React, {useState, useEffect} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

AntDesign.loadFont();
Ionicons.loadFont();
Fontisto.loadFont();
FontAwesome.loadFont();

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {
  const [isLike, setIsLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    setIsLike(!isLike);
    const amount = isLike ? -1 : 1;
    setLikesCount(likesCount + amount);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            <AntDesign
              size={25}
              name={isLike ? 'heart' : 'hearto'}
              color={isLike ? '#c30000' : '#545454'}
            />
          </TouchableWithoutFeedback>
          <Fontisto size={25} name="comment" color={'#545454'} />
          <Ionicons size={25} name="paper-plane-outline" color={'#545454'} />
        </View>
        <FontAwesome size={25} name="bookmark-o" color={'#545454'} />
      </View>

      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption} </Text>
      <Text style={styles.postedAt}>{postedAt} </Text>
    </View>
  );
};

export default Footer;
