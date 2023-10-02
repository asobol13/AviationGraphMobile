import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ChartComponent from './src/components/Graph.js';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.topRow}>
      <Text style={styles.leftText}>PA-44-180, SEMINOLE</Text>
      <View style={styles.rightContainer}>
        <Text style={styles.rightText}>SECTION 5</Text>
        <Text style={styles.rightBottomText}>PERFORMANCE</Text>
      </View>
    </View>
    <View style={styles.divider} />
    <Text style={styles.title}>TAKEOFF DISTANCE OVER 50 FT OBSTACLE - SHORT FIELD EFFORT</Text>
    <View style={styles.conditionsContainer}>
    <View style={styles.conditionsLC}> {/*beginning of boxes */}
      <View style={styles.conditionsLT}>
        <Text>Associated Conditions</Text>
      </View>
    </View>
    <View style={styles.conditionsMC}>
      <Text>This is where the boxes will go</Text>
    </View>
    <View style={styles.conditionsRC}>
    <View style={styles.conditionsRT}>
        <Text>EXAMPLE:</Text>
      </View>
    </View>
    </View>
    <View style={styles.graphContainer}>
      <ChartComponent />
    </View>
    <StatusBar style="auto" />
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: 20,
},
topRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  paddingHorizontal: 20,
},
leftText: {
  fontSize: 16,
},
rightContainer: {
  flexDirection: 'column',
  alignItems: 'flex-end',
},
rightText: {
  fontSize: 16,
},
rightBottomText: {
  fontSize: 16,
},
title: {
  fontSize: 16,
  fontWeight: 'bold',
  marginTop: 10,
},
graphContainer: {
  paddingTop: 30,
},
divider: {
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  width: '100%',
  marginTop: 10,
  marginBottom: 10,
},
conditionsContainer: {
  flexDirection: 'row',
  marginHorizontal: 5,
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 20,
  width: '100%',
  paddingHorizontal: 20,
},
conditionsLC: {
  flexDirection: 'column',
  alignItems: 'flex-start',
},
conditionsLT: {

},
conditionsMC: {
  flexDirection: 'column',
  alignItems: 'flex-middle',
},
conditionsRC: {
  flexDirection: 'column',
  alignItems: 'flex-end',
},
conditionsRT: {

},
});
