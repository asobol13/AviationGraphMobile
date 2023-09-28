import React, { useEffect, useRef } from 'react';
import { createCanvas } from 'canvas'; // Import canvas library

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create a canvas using node-canvas
    const canvas = createCanvas(1200, 900); // Specify width and height
    const ctx = canvas.getContext('2d');

    // Define your data
    const data = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
    1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200,
    2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400,
    3500, 3600, 3700, 3800, 3900, 4000, 4100, 4200, 4300, 4400, 4500, 4600,
    4700, 4800, 4900, 5000, 5100, 5200, 5300, 5400, 5500, 5600, 5700, 5800,
    5900, 6000];
    // const xdata = [-40, -38, -36, -34, -32, -30, -28, -26, -24, -22, -20,
    // -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 12, 14, 16,
    // 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52,
    // 54, 56, 58, 60, 62, 64, 66, 68, 3800, 3750, 3700, 3650, 3600, 3550,
    // 3500, 3450, 3400, 3350, 3300, 3250, 3200, 3150, 3100, 3050, 3000, 2950,
    // 2900, 2850, 2800, 2750, 2700, 2650, 2600, 2550, 2500, 2450, 2400, 2350,
    // 2300, 2250, 2200, 2150, 2100, 2050, 2000, 1950, 1900, 1850, 1800, 1750,
    // 1700, 1650, 1600, 1550, 1500, 1450, 1400, 1350, 1300, 1250, 1200, 1150,
    // 1100, 1050, 1000, 950, 900, 850, 800, 750, 700, 650, 600, 550, 500, 450,
    // 400, 350, 300, 250, 200, 150, 100, 50, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18,
    // 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]
    const labels = ['0', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000',
      '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000', '2100', '2200',
      '2300', '2400', '2500', '2600', '2700', '2800', '2900', '3000', '3100', '3200', '3300', '3400',
      '3500', '3600', '3700', '3800', '3900', '4000', '4100', '4200', '4300', '4400', '4500', '4600',
      '4700', '4800', '4900', '5000', '5100', '5200', '5300', '5400', '5500', '5600', '5700', '5800',
      '5900', '6000'];

    // Set chart properties
    const chartWidth = canvas.width;
    const chartHeight = canvas.height;
    const dataPoints = data.length;
    const barSpacing = chartWidth / (dataPoints + 1);

    // Set background color
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, chartWidth, chartHeight);

    // Define the number of horizontal and vertical grid lines
    const numVerticalLines = 10;
    const numHorizontalLines = 15;

    // Calculate the spacing between lines
    const verticalSpacing = canvas.width / numVerticalLines;
    const horizontalSpacing = canvas.height / numHorizontalLines;

    // Draw vertical grid lines
    ctx.strokeStyle = 'lightgray';
    ctx.lineWidth = 1;
    
    for (let i = 1; i <= dataPoints; i++) {
      const x = i * barSpacing;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, chartHeight);
      ctx.stroke();
    }

    // Draw grid lines (horizontal)
    ctx.strokeStyle = 'lightgray';
    ctx.lineWidth = 1;

    for (let i = 1; i <= 152; i++) {
      const y = (chartHeight / 152) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(chartWidth, y);
      ctx.stroke();
    }

    // Draw X and Y axes
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, chartHeight);
    ctx.lineTo(chartWidth, chartHeight);
    ctx.stroke();

    // Calculate the scale for the Y-axis
    const maxDataValue = Math.max(...data);
    const scale = chartHeight / maxDataValue;

    // Draw data points as dots
    ctx.fillStyle = 'blue';
    data.forEach((value, index) => {
      const x = (index + 1) * barSpacing;
      const y = chartHeight - value * scale;

      // Draw a dot at each data point
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();

      // Draw labels on the side of the chart
      ctx.fillStyle = 'black';
      ctx.fillText(labels[index], chartWidth + 20, y);
    });

    // Convert canvas to a data URL
    const chartImageDataURL = canvas.toDataURL();

    // Set the data URL as the source for an image element
    chartRef.current.src = chartImageDataURL;
  }, []);

  return (
    <div id="chart-container">
      {/* Display the chart as an image */}
      <img ref={chartRef} alt="Line Chart" height="600" width="1200"/>
    </div>
  );
};

export default ChartComponent;
