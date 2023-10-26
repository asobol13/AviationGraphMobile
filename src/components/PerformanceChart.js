import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from "react-native-chart-kit";

const PerformanceChart = () => {

    const styles = StyleSheet.create({
        chart: {
            flex: 2,
            alignSelf: 'center',
        },
        labelText: {
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 50,
        },
        labelTextR1: {
            flex: 1,
            fontSize: 14,
            fontWeight: 'bold',
            transform: [{ rotate: '270deg' }],
            marginTop: 200,
        },
        grid: {
            flex: 1,
        },
        row: {
            flex: 1,
            flexDirection: 'row',
        },
        cell: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        cell1: {
            justifyContent: 'center',
            alignSelf: 'center',
        },
        graphcell: {
            marginLeft: 250,
            marginRight: -100,
            justifyContent: 'center',
        },
    });

    const data = {
        labels: ["-40", "-20", "0", "20", "40", "3500", "3000", "2500", "0", "10", "20", "30"],
        datasets: [
            {
                data: [0, 1000, 2000, 3000, 4000, 5000, 6000],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                strokeWidth: 3,
            }
        ],
    };

    const yLabels = ["1000", "2000", "3000", "4000", "5000", "6000"];

    return (
        <View style={styles.grid}>
            <View style={styles.row}>
                <View style={styles.graphcell}>
                    <View style={styles.chart}>
                        <LineChart
                            data={data}
                            width={1300}
                            height={600}
                            chartConfig={{
                                backgroundGradientFrom: 'white',
                                backgroundGradientTo: 'white',
                                decimalPlaces: 0,
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                propsForBackgroundLines: {
                                    strokeDasharray: "",
                                },
                            }}
                            fromZero={true}
                            gridMin={0}
                            gridMax={110}
                            segments={6}
                            yLabels={yLabels}
                        />
                    </View>
                </View>
                <View style={styles.cell1}>
                    <Text style={styles.labelTextR1} numberOfLines={1}>TAKEOFF DISTANCE OVER 50 FT. OBSTACLE - FEET</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.cell}>
                    <Text style={[styles.labelText, { marginLeft: 350 }]}>OUTSIDE AIR TEMPERATURE - °C</Text>
                </View>
                <View style={styles.cell}>
                    <Text style={[styles.labelText, { marginLeft: 100 }]}>WEIGHT - POUNDS</Text>
                </View>
                <View style={styles.cell}>
                    <Text style={[styles.labelText, { marginRight: 350 }]}>WIND - KNOTS</Text>
                </View>
            </View>
        </View>
    );
};

export default PerformanceChart;
