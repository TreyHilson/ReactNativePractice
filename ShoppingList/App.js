import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native';
// View supports layout with flexbox, style, & some touch handling.

const App = () => {
return (
    <View style={styles.container}>
      <Text style={styles.text}> 28 </Text>
      <Image
        source={{
          uri: 'https://media.giphy.com/media/fWR4y5UdCty4E/200w_d.gif',
        }}
        style={styles.img}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
    fontFamily: 'Arial',
  },
  img: {
    width: 280,
    height: 280,
  },
});

export default App;
