import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main"
                       screenOptions={ {
                         headerStyle: {
                           backgroundColor: '#7D40E7',
                         },
                         headerTintColor: '#fff',
                         headerBackTitleVisible: false,
                         headerTitleStyle: {
                           fontSize: 16,
                         },
                       } }

      >
        <Stack.Screen name="Main" options={ { title: 'devRadar' } }>
          { props => <Main { ...props }/> }
        </Stack.Screen>
        <Stack.Screen name="Profile" options={ { title: 'github profile' } }>
          { props => <Profile { ...props }/> }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
