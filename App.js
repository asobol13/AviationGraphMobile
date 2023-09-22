import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ChartComponent from './src/components/Graph.js';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftText}>
          <Text><h3>PA-44-180, SEMINOLE</h3></Text>
        </View>
        <View style={styles.rightText}>
          <Text><h3>SECTION 5</h3></Text>
          <Text><h3>PERFORMANCE</h3></Text>
        </View>
      </View>
      <View style={styles.line}></View> 
      <View style={styles.bottomContainer}>
        <Text><h4>TAKEOFF DISTANCE OVER 50 FT OBSTACLE - SHORT FIELD EFFORT</h4></Text>
        <Text>The thingy here</Text>
        <ChartComponent />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftText: {
    flex: -1,
    alignItems: 'flex-start',
  },
  rightText: {
    flex: 1,
    alignItems: 'flex-end',
  },
  line: {
    borderBottomWidth: 25,
    borderBottomColor: 'black',
    marginVertical: 10,
  },
});




