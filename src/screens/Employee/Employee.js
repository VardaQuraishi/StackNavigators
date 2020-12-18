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
    {id: '1', value: 'Abdul Hadi =>',designation: 'President' },
    {id: '2', value: 'Moqeet =>', designation: 'Vice President' },
    {id: '3', value: 'Varda =>', designation: 'HR'},
    {id: '4', value: 'Asad =>', designation: 'Treasurer' },
  
];

const Employee = ({navigation}) => {
  const [listItems, setListItems] = useState(productList);

  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <View style={{flexDirection: 'row'}}>
        <Text

          style={styles.item}
          onPress={() => {navigation.navigate('EmployeeDetail')}}>
          {item.value}
        </Text>
        <Text style={[styles.item]}>
          {item.designation}
        </Text>
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
export default Employee

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
    justifyContent: 'space-evenly'
  },
});