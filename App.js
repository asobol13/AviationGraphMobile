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
      <Text style={styles.conditionsTxt}>
        ASSOCIATED CONDITIONS:{'\n'}    Wing Flaps:  0{'\n'}    Cowl Flaps:  OPEN
        {'\n'}    Power:          2700 RPM & FULL THROTTLE
        {'\n'}                         BEFORE BRAKE RELEASE
        {'\n'}    Runway:        PAVED, LEVEL & DRY
      </Text>
    </View>
    <View style={styles.conditionsMC}>
      <View style={styles.conditionsMLB}>
        <View style={styles.section1}>
          <Text style={styles.sectionHeading}>WEIGHT{'\n'}POUNDS</Text>
          <Text style={styles.sectionTxt}>3800{'\n'}3400{'\n'}3000{'\n'}2600</Text>
        </View>
        <View style={styles.section2}>
          <Text style={styles.sectionHeading}>ROTATE{'\n'}SPEED KIAS</Text>
          <Text style={styles.sectionTxt}>70{'\n'}66{'\n'}62{'\n'}57</Text>
        </View>
        <View style={styles.section3}>
          <Text style={styles.sectionHeading}>OBSTACLE{'\n'}SPEED KIAS</Text>
          <Text style={styles.sectionTxt}>82{'\n'}77{'\n'}72{'\n'}67</Text>
        </View>
      </View>
      <View style={styles.conditionsMRB}>
        <View style={styles.cautionBoxTxt}>
          <Text style={styles.cautionTxt}>CAUTION</Text>
          <Text style={styles.cautionSubTxt}>BEST ONE ENGINE OPERATIVE RATE OF CLIMB IS LESS THAN 50 FPM IF T.O.WT. IS IN THE SHADED
            AREA.
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.conditionsRC}>
      <Text style={styles.conditionsTxt}>
        EXAMPLE:{'\n'}    O.A.T.:                               8C
        {'\n'}    Airport Pressure Altitude: 1250 FT
        {'\n'}    Weight:                             3430 LBS
        {'\n'}    Wind Component:            6 KT HEADWIND{'\n'}    Takeoff 
        Distance{'\n'}      Over 50 FT Obstacle:      1520 FT
      </Text>
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
  fontSize: 24,
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
  paddingHorizontal: 10,
},
conditionsLC: {
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingRight: 15,
},
conditionsMC: {
  flexDirection: 'row',
},
conditionsMLB: {
  flexDirection: 'row',
  width: 300,
  height: 100,
  borderColor: 'black',
  borderWidth: 1,
  alignItems: 'stretch',
  marginRight: 10,
},
section1: {
  flex: 3,
  justifyContent: 'center',
  alignItems: 'center',
  borderRightColor: 'black',
  borderRightWidth: 1,
},
section2: {
  flex: 3,
  justifyContent: 'center',
  alignItems: 'center',
  borderRightColor: 'black',
  borderRightWidth: 1,
},
section3: {
  flex: 3,
  justifyContent: 'center',
  alignItems: 'center',
  borderRightColor: 'black',
},
sectionHeading: {
  fontSize: 12,
  fontWeight: 'bold',
  textAlign: 'center',
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  paddingBottom: 5,
  width: 100,
},
sectionTxt: {
  fontSize: 10,
  marginTop: 5,
  textAlign: 'center',
},
conditionsMRB: {
  flexDirection: 'row',
  width: 200,
  height: 100,
  backgroundColor: 'transparent',
  borderColor: 'black',
  borderWidth: 5,
  alignItems: 'center',
  justifyContent: 'center',
},
cautionBoxTxt: {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 180,
},
cautionTxt: {
  fontSize: 12,
  fontWeight: 'bold',
  marginBottom: 5,
},
cautionSubTxt: {
  fontSize: 10,
},
conditionsRC: {
  flexDirection: 'column',
  alignItems: 'flex-end',
  paddingLeft: 15,
},
conditionsTxt: {
  fontSize: 12,
},
});
