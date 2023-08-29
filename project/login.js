import React from "react";
import {
  HStack,
  Center,
  Heading,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Stack,
  Input,
  Box,
  Button,
  FormControl,
  WarningOutlineIcon,
} from "native-base";
import {NavigationContainer} from '@react-navigation/native';
import { SignUpModal } from "./sign-up";

import { useState } from "react";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export const LoginPage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <Heading size="lg">Welcome to Cost Splitter</Heading>
          <HStack space={2} alignItems="center">
          </HStack>
          <FormControl isRequired>
          <VStack mx="4">
            <FormControl.Label>Username</FormControl.Label>
            <Input type="username" placeholder="username"  onChangeText={newUsername => setUsername(newUsername)}/>
            <FormControl.HelperText>
              Enter in username or email.
            </FormControl.HelperText>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" placeholder="password"  onChangeText={newPassword => setPassword(newPassword)}/>
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </VStack>
        </FormControl>
        <Button onPress={() => getUserInfo(username, password, navigation)} >Login</Button>
        <SignUpModal></SignUpModal> 
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

function getUserInfo(username, password, navigation) {
  // TO DO
  navigation.navigate('Home', {name: 'Dummy User'})
  
}
