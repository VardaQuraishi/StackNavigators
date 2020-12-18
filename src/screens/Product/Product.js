//React Native FlatList
//https://aboutreact.com/react-native-flatlist/

//import React in our code
import React, {useState} from 'react';

//import all the components we are going to use
import {
    FlatList,
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image
} from 'react-native';

const productList = [
    {id: '1', value: 'Chocolate',price: '$ 10', image: { uri: 'https://en.wikipedia.org/wiki/Chocolate#/media/File:Chocolate_(blue_background).jpg'}},
    {id: '2', value: 'Chips', price: '$ 10', image: { uri: 'https://en.wikipedia.org/wiki/Chocolate#/media/File:Chocolate_(blue_background).jpg'}},
    {id: '3', value: 'Biscuits', price: '$ 10', image: { uri: 'https://en.wikipedia.org/wiki/Chocolate#/media/File:Chocolate_(blue_background).jpg'}},
    {id: '4', value: 'Banana', price: '$ 10', image: { uri: 'https://en.wikipedia.org/wiki/Chocolate#/media/File:Chocolate_(blue_background).jpg'}},
  
];

const Product = ({navigation}) => {
  const [listItems, setListItems] = useState(productList);

  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <View  style={styles.item}>
        <Image style={{width: 50, height: 30, marginHorizontal: 10}}
        source={require('../../assets/aldebaran-s-uXchDIKs4qI-unsplash.jpg')} />
        <Text
          onPress={() => {navigation.navigate('Chocolate')}}>
          {item.value}
        </Text>
        <Text style={{justifyContent: 'space-between'}}>{item.price}</Text>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
          style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8'
          }}
      />
    );
  };

//   const getItem = (item, navigation) => {
//     //Function for click on an item
//     alert('Id: ' + item.id + ' Value: ' + item.value);
//   };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={listItems}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
export default Product

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    flexDirection: 'row',
  },
});