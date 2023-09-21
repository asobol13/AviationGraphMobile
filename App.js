import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ChartComponent from './src/components/Graph.js';

export default function App() {
  return (
    <View style={styles.container}>
      <div className="App">
        <h1>Chart.js in React!</h1>
        <ChartComponent />
      </div>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
