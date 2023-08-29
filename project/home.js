import React from "react";
import {
  Center,
  Heading,
  NativeBaseProvider,
} from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BillsPage } from "./bills";
import { AddBillPage } from "./add-bill";

const Tab = createBottomTabNavigator();

export const HomePage = ({navigation, route}) => {

    return (
        <Tab.Navigator 
        initialRouteName="Bills"
        screenOptions={{
            tabBarActiveTintColor: '#e91e63',
         }}>
            <Tab.Screen name="Bills" component={BillsPage} options={{
          tabBarLabel: 'Bills',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="alpha-b-box" color={color} size={size} />
          
          ),
        }}/>
        <Tab.Screen name="Add New Bill" component={AddBillPage} options={{
          tabBarLabel: 'Add Bill',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="alpha-a-box" color={color} size={size} />
          ),
        }}/>

        </Tab.Navigator>
    );
  }