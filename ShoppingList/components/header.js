import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
// View supports layout with flexbox, style, & some touch handling.

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>28</Text>
      <Image
        source={{
          uri: 'https://media.giphy.com/media/Mp3uwtx0qLOGA/giphy.gif',
        }}
        style={styles.img}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 10,
    backgroundColor: '#89b8ce',
    width: 420,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    textShadowColor: '#000',
  },
  img: {
    width: 330,
    height: 330,
    padding: 10,
    marginTop: 300,
  },
});

export default Header;
