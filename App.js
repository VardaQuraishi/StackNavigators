import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage';
import Home from './src/screens/Home/Home';
import Product from './src/screens/Product/Product';
import Chocolate from './src/screens/Product/Chocolate';
import Employee from './src/screens/Employee';
import EmployeeDetail from './src/screens/Employee/EmployeeDetail'
import Order from './src/screens/Order';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home Page', //Set Header Title
            headerStyle: {
              backgroundColor: 'lightpink', //Set Header color
            },
            headerTintColor: 'cornflowerblue', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            title: 'Products', //Set Header Title
            headerStyle: {
              backgroundColor: 'lightpink', //Set Header color
            },
            headerTintColor: 'cornflowerblue', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Chocolate"
          component={Chocolate}
          options={{
            title: 'Products', //Set Header Title
            headerStyle: {
              backgroundColor: 'lightpink', //Set Header color
            },
            headerTintColor: 'cornflowerblue', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Employee"
          component={Employee}
          options={{
            title: 'Employees', //Set Header Title
            headerStyle: {
              backgroundColor: 'lightpink', //Set Header color
            },
            headerTintColor: 'cornflowerblue', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="EmployeeDetail"
          component={EmployeeDetail}
          options={{
            title: 'Employee Data', //Set Header Title
            headerStyle: {
              backgroundColor: 'lightpink', //Set Header color
            },
            headerTintColor: 'cornflowerblue', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{
            title: 'Orders', //Set Header Title
            headerStyle: {
              backgroundColor: 'lightpink', //Set Header color
            },
            headerTintColor: 'cornflowerblue', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;