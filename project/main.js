import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { LoginPage } from './login';
import { HomePage } from './home';

const Stack = createNativeStackNavigator();

export const MainPage = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{title: 'Login'}}
        />
         <Stack.Screen
          name="Home"
          component={HomePage}
          options={{title: 'Home'}}
        />
        
      </Stack.Navigator>
  );
};