import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Navigation} from './src/navigation';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/utils/theme';
import { NavigationContainer } from '@react-navigation/native';
function App() {
  return (
    <SafeAreaView style={styles.root}>
      <ThemeProvider theme={theme.theme}>
        <Navigation />
      </ThemeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
