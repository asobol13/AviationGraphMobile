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
            alignItems: 'center',
            marginLeft: 200,
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
            marginLeft: -100,
            marginRight: -100,
            justifyContent: 'center',
        },
        yAxisLabelsCell: {
            marginRight: -10,
        },
        yAxisLabels: {
            padding: 50,
            justifyContent: 'center',
            marginTop: -43.5,
            marginRight: -150,
            marginLeft: 50,
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
                            segments={60}
                            yLabelsOffset={-2000}
                        />
                    </View>
                </View>
                <View style={styles.yAxisLabelsCell}>
                    <Text style={styles.yAxisLabels}>6000</Text>
                    <Text style={styles.yAxisLabels}>5000</Text>
                    <Text style={styles.yAxisLabels}>4000</Text>
                    <Text style={styles.yAxisLabels}>3000</Text>
                    <Text style={styles.yAxisLabels}>2000</Text>
                    <Text style={styles.yAxisLabels}>1000</Text>
                    <Text style={styles.yAxisLabels}>0</Text>
                </View>
                <View style={styles.cell1}>
                    <Text style={styles.labelTextR1} numberOfLines={1}>TAKEOFF DISTANCE OVER 50 FT. OBSTACLE - FEET</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.cell}>
                    <Text style={[styles.labelText, {marginRight: 400}]} numberOfLines={1}>OUTSIDE AIR TEMPERATURE - °C</Text>
                </View>
                <View style={styles.cell}>
                    <Text style={[styles.labelText, {marginRight: 280}]} numberOfLines={1}>WEIGHT - POUNDS</Text>
                </View>
                <View style={styles.cell}>
                    <Text style={styles.labelText} numberOfLines={1}>WIND - KNOTS</Text>
                </View>
            </View>
        </View>
    );
};

export default PerformanceChart;
