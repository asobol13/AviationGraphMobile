import React, { useEffect, useRef } from 'react';
import { createCanvas } from 'canvas'; // Import canvas library

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create a canvas using node-canvas
    const canvas = createCanvas(800, 400); // Specify width and height
    const ctx = canvas.getContext('2d');

    // Define your data
    const data = [10, 25, 13, 30, 15];
    const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'];

    // Set chart properties
    const chartWidth = canvas.width;
    const chartHeight = canvas.height;
    const dataPoints = data.length;
    const barSpacing = chartWidth / (dataPoints + 1);

    // Set background color
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, chartWidth, chartHeight);

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

    for (let i = 1; i <= 5; i++) {
      const y = (chartHeight / 5) * i;
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
      <img ref={chartRef} alt="Line Chart" height="400" width="800"/>
    </div>
  );
};

export default ChartComponent;
