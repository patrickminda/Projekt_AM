import React from 'react';
import {StyleSheet, SafeAreaView } from 'react-native';

import AppNavigation from './src/navigation/AppNavigator';

const App = ( ) => {

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

export default App;
