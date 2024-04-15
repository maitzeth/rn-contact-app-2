import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Navigation} from './src/navigation';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/lib/theme';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <SafeAreaView style={styles.root}>
      <ThemeProvider theme={theme.theme}>
        <QueryClientProvider client={queryClient}>
          <Navigation />
        </QueryClientProvider>
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
