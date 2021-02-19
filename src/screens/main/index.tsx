import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';

import { navBarStyle } from '../../utils/help';

import MainScreen from './main';

const ExampleNavigator: React.FC<NavigatorProps> = ({
  theme,
}) => {
  const Stack = createNativeStackNavigator();
  // const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={navBarStyle(theme)}>
      <Stack.Screen
        name={'Main'}
        component={MainScreen}
        options={{
          title: 'Main',
        }}
      />
    </Stack.Navigator>
  )
};

export default ExampleNavigator;