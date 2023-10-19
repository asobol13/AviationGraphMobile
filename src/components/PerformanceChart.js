import React from 'react';
import { View } from 'react-native';
import { LineChart } from "react-native-chart-kit";

const PerformanceChart = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        // legend: ["Rainy Days"] // optional
    };
    
    return (
        <View>
            <LineChart
                data={data}
                width={1300}
                height={600}
                chartConfig={{
                    backgroundGradientFrom: 'white',
                    backgroundGradientTo: 'white',
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Axis and labels color
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
                }}
            />
        </View>
    );
};

export default PerformanceChart;