import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Main({ navigation }) {
  return (
    <View>
      <Text>Main</Text>
      <Button
        title="Go to Profile... again"
        onPress={ () => navigation.push('Profile') }
      />
    </View>
  );
}

export default Main;
