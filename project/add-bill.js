import React from "react";
import {
  Center,
  Heading,
  NativeBaseProvider,
} from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export const AddBillPage = ({navigation, route}) => {

    return (
      <NativeBaseProvider>
        <Center
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "blueGray.50" }}
          px={4}
          flex={1}
        >
        <Heading>Add New Bill</Heading>

        </Center>

    
       
      </NativeBaseProvider>
    );
  }