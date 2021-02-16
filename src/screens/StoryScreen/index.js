import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
  View,
  TextInput,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

Feather.loadFont();
Ionicons.loadFont();

import {useRoute, useNavigation} from '@react-navigation/native';
import {data} from '../../assets/hardData';

import styles from './styles';
import ProfilePicture from '../../components/ProfilePicture';

const StoryScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params.userId;
  //   console.log('route: ', route);
  //   const userId = route.params.userId;
  //   console.log('userId: ', userId);
  //   const userStories = data.find((item) => item.user.id === userId);
  //   console.log('userStories: ', userStories);

  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  //   const [activeStory, setActiveStory] = useState(null);

  useEffect(() => {
    const userStories = data.find((item) => item.user.id === userId);
    // console.log('userStories: ', userStories);
    setUserStories(userStories);
    setActiveStoryIndex(0);
  }, []);

  useEffect(() => {
    if (!userStories) {
      return;
    }
    if (activeStoryIndex < 0) {
      setActiveStoryIndex(0);
      return;
    }

    if (activeStoryIndex >= userStories.stories.length) {
      setActiveStoryIndex(userStories.stories.length - 1);
    }
  }, [activeStoryIndex]);

  const navigateToNextUser = () => {
    navigation.push('StoryScreen', {userId: `${parseInt(userId) + 1}`});
  };

  const navigateToPrevUser = () => {
    navigation.push('StoryScreen', {userId: `${parseInt(userId) - 1}`});
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPrevUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;
    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  if (!userStories) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = userStories.stories[activeStoryIndex];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground
          source={{uri: activeStory.imageUri}}
          style={styles.image}>
          <View style={styles.userInfo}>
            <ProfilePicture uri={userStories.user.uri} />
            <Text style={styles.userName}>{userStories.user.name}</Text>
            <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color={'#ffffff'} />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Send message"
                placeholderTextColor={'white'}
              />
            </View>
            <View style={styles.messageButton}>
              <Ionicons
                name="paper-plane-outline"
                size={35}
                color={'#ffffff'}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
