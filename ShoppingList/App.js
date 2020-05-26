import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/header';
import ListItem from './components/ListItem';
import AddItem from './components/addItem';
import {v4 as uuidv4} from 'uuid';
// View supports layout with flexbox, style, & some touch handling.

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Change U'},
    {id: uuidv4(), text: 'Its A Dark World'},
    {id: uuidv4(), text: 'Buttta'}]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter a track', {text: 'Ok'});
    } else {
      setItems(prevItems => {
        return [{id: uuidv4(), text}, ...prevItems];
      });

    }

  };

return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    fontSize: 20,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 28,
    fontFamily: 'Arial',
  },
  img: {
    width: 280,
    height: 280,
    padding: 10,
  },
});

export default App;
