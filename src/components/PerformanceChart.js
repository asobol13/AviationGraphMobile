import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { Col, Row } from 'react-native-flexbox-grid';

const PerformanceChart = () => {

    const styles = StyleSheet.create({
        chart: {
            flex: 2,
            alignSelf: 'center', // Center the chart horizontally
        },
        labelText: {
            fontSize: 14,
            fontWeight: 'bold',
        },
    });

    const data = {
        labels: ["-40", "-20", "0", "20", "40", "3500", "3000", "2500", "0", "10", "20", "30"],
        datasets: [
            {
                data: [1000, 2000, 3000, 4000, 5000, 6000],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                strokeWidth: 3,
            }
        ],
    };

    const yLabels = ["1000", "2000", "3000", "4000", "5000", "6000"];

    return (
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
                }}
                fromZero
                segments={6}
                yLabels={yLabels}
            />
            <Text style={styles.labelText}>TAKEOFF DISTANCE OVER 50 FT. OBSTACLE - FEET</Text>
            <View style={styles.row}>
                <Text style={styles.labelText}>OUTSIDE AIR TEMPERATURE - °C</Text>
                <Text style={styles.labelText}>WEIGHT - POUNDS</Text>
                <Text style={styles.labelText}>WIND - KNOTS</Text>
            </View>
        </View>
    );
};

export default PerformanceChart;
