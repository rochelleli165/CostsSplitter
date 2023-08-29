import React from "react";
import {
  extendTheme,
} from "native-base";
import {NavigationContainer} from '@react-navigation/native';

import { MainPage } from "./main";


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};


// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NavigationContainer>
      <MainPage></MainPage>
    </NavigationContainer>
  );
}