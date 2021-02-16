import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Post = ({post}) => {
  //   console.log('post: ', post);
  return (
    <View>
      <Header name={post.user.name} imageUri={post.user.uri} />
      <Body imageUri={post.imageUri} />
      <Footer
        likesCount={post.likesCount}
        caption={post.caption}
        postedAt={post.postedAt}
      />
    </View>
  );
};

export default Post;
