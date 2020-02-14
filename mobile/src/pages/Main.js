import React, { useState, useEffect } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

function Main({ navigation }) {

  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({ enableHighAccuracy: true });
        const { latitude, longitude } = coords;

        console.log('coords: ', coords);

        setCurrentRegion({ latitude, longitude, latitudeDelta: 0.04, longitudeDelta: 0.04 });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) { // só mostra o mapa quando carrega o currentRegion
    return null;
  }

  return (
    <>
      <MapView style={ styles.map } initialRegion={ currentRegion }>
        <Marker coordinate={ { latitude: -19.911111, longitude: -44.1111111 } }>
          <Image style={ styles.avatar }
                 source={ { uri: 'https://avatars1.githubusercontent.com/u/2046970?s=460&v=4' } }/>

          <Callout onPress={ () => {
            navigation.navigate('Profile', { github_username: 'gilvam' });
          } }>
            <View style={ styles.callout }>
              <Text style={ styles.devName }>Gilvam Mourão</Text>
              <Text style={ styles.devBio }>bio....</Text>
              <Text style={ styles.devTechs }>reactJS, ...</Text>
            </View>
          </Callout>

        </Marker>
      </MapView>

      <View style={ styles.searchForm }>
        <TextInput
          style={ styles.searchInput }
          placeholder="Search for devs by techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={ false }
        />
        <TouchableOpacity style={ styles.loadButton } onPress={ () => {
        } }>
          <MaterialIcons name="my-location" size={ 20 } color="#fff"/>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#fff'
  },

  callout: {
    width: 260,
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  devBio: {
    color: '#666',
    marginTop: 5,
  },
  devTechs: {
    marginTop: 5,
  },
  searchForm: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,

    // shadow ios
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset:{
      width: 4,
      heigth: 4,
    },
    // shadow android
    elevation: 2,
  },
  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#8E4DFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  }
});

export default Main;
