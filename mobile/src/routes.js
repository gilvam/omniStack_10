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
                         headerTitleStyle: {
                           fontSize: 16,
                         },
                       } }

      >
        <Stack.Screen name="Main" options={ { title: 'Main - Início' } }>
          { props => <Main { ...props }/> }
        </Stack.Screen>
        <Stack.Screen name="Profile" options={ { title: 'Profile - Perfil' } }>
          { props => <Profile { ...props }/> }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
