import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { getCurrentPositionAsync, requestPermissionsAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../services/api';

function Main({ navigation }) {

  const [devs, setDevs] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [techs, setTechs] = useState('');

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({ enableHighAccuracy: true });
        const { latitude, longitude } = coords;
        setCurrentRegion({ latitude, longitude, latitudeDelta: 0.04, longitudeDelta: 0.04 });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) { // só mostra o mapa quando carrega o currentRegion
    return null;
  }

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;
    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs
      }
    });
    setDevs(response.data);
  }

  return (
    <>
      <MapView
        style={ styles.map }
        initialRegion={ currentRegion }
        onRegionChangeComplete={ handleRegionChanged }
      >
        {
          devs.map(dev => (
            <Marker
              key={ dev._id }
              coordinate={ {
                latitude: dev.location.coordinates[1],
                longitude: dev.location.coordinates[0]
              } }
            >
              <Image
                style={ styles.avatar }
                source={ { uri: dev.avatar_url } }/>

              <Callout
                onPress={ () => {
                  navigation.navigate('Profile', { github_username: dev.github_username });
                } }>
                <View style={ styles.callout }>
                  <Text style={ styles.devName }>{ dev.name }</Text>
                  <Text style={ styles.devBio }>{ dev.bio }</Text>
                  <Text style={ styles.devTechs }>{ dev.techs.join(', ') }</Text>
                </View>
              </Callout>

            </Marker>
          ))
        }
      </MapView>

      <View style={ styles.searchForm }>
        <TextInput
          style={ styles.searchInput }
          placeholder="Search for devs by techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={ false }
          value={ techs }
          onChangeText={ setTechs }
        />
        <TouchableOpacity style={ styles.loadButton } onPress={ loadDevs }>
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
    shadowOffset: {
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
