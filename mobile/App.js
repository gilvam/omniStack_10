import * as React from 'react';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import { StatusBar } from 'react-native-web';

function App() {
  return (
    <>
      <StatusBar barSyle="light-content" backgroundColor="#7D40E7"/>
      <Routes/>
    </>
  );
}

export default App;
