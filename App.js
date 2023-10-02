import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ChartComponent from './src/components/Graph.js';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.topRow}>
      <Text style={styles.topText}>PA-44-180, SEMINOLE</Text>
      <View style={styles.rightContainer}>
        <Text style={styles.topText}>SECTION 5{'\n'}PERFORMANCE</Text>
      </View>
    </View>
    <View style={styles.divider} />
    <Text style={styles.title}>TAKEOFF DISTANCE OVER 50 FT OBSTACLE - SHORT FIELD EFFORT</Text>
    <View style={styles.conditionsContainer}>
    <View style={styles.conditionsLC}> {/*beginning of boxes */}
      <View style={styles.conditionsLT}>
        <Text style={styles.conditionsTxt}>
          ASSOCIATED CONDITIONS:{'\n'}    Wing Flaps:  0{'\n'}    Cowl Flaps:  OPEN
          {'\n'}    Power:          2700 RPM & FULL THROTTLE
          {'\n'}                         BEFORE BRAKE RELEASE
          {'\n'}    Runway:        PAVED, LEVEL & DRY
        </Text>
      </View>
    </View>
    <View style={styles.conditionsMC}>
      <Text style={styles.conditionsTxt}>This is where the boxes will go</Text>
    </View>
    <View style={styles.conditionsRC}>
    <View style={styles.conditionsRT}>
        <Text style={styles.conditionsTxt}>
          EXAMPLE:{'\n'}    O.A.T.:                               8C
          {'\n'}    Airport Pressure Altitude: 1250 FT
          {'\n'}    Weight:                             3430 LBS
          {'\n'}    Wind Component:            6 KT HEADWIND{'\n'}    Takeoff 
          Distance{'\n'}      Over 50 FT Obstacle:      1520 FT
        </Text>
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
topText: {
  fontSize: 16,
},
rightContainer: {
  flexDirection: 'column',
  alignItems: 'flex-end',
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
conditionsTxt: {
  fontSize: 12,
},
});
