import React, { useEffect, useRef } from 'react';
import { createCanvas } from 'canvas'; // Import canvas library

// Zoom in and scroll feature?

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create a canvas using node-canvas
    const canvas = createCanvas(1200, 600); // Specify width and height for three graphs
    const ctx = canvas.getContext('2d');

    // Define your data for three graphs
    const data1 = [0, 100, 200, 300, /* ... */];
    const data2 = [/* ... */];
    const data3 = [/* ... */];
    // Define x-axis data and labels (assuming it's the same for all three graphs)
    const xdata = [-40, -38, -36, -34, /* ... */];
    const labels = ['0', '100', '200', '300', /* ... */];

    // Set chart properties
    const chartWidth = canvas.width / 3; // Divide canvas into three sections
    const chartHeight = canvas.height;
    const dataPoints = data1.length;
    const xDataPoints = xdata.length;
    const barSpacing = chartWidth / (dataPoints + 1);

    // Function to check if a line should be bold
    const isBoldLine = (lineIndex) => {
      // Add line indices that you want to make bold to this array
      const boldLineIndices = [10, 54, 90];
      return boldLineIndices.includes(lineIndex);
    };

    // Loop through each section of the canvas for the three graphs
    for (let graphIndex = 0; graphIndex < 3; graphIndex++) {
      // Calculate the starting and ending indices for the data
      const startIndex = graphIndex * dataPoints;
      const endIndex = (graphIndex + 1) * dataPoints;

      // Draw vertical grid lines
      ctx.strokeStyle = 'lightgray';
      ctx.lineWidth = 1;

      for (let i = startIndex + 1; i <= endIndex; i++) {
        const x = (i - startIndex) * barSpacing + graphIndex * chartWidth;
        // Make a specific line bold
        if (isBoldLine(i)) {
          ctx.lineWidth = 1; // Set the line width to make it bold
          ctx.strokeStyle = 'black'; // Set the line color
        } else {
          ctx.lineWidth = 1; // Reset line width to normal
          ctx.strokeStyle = 'lightgray'; // Reset line color to normal
        }
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, chartHeight);
        ctx.stroke();
      }

      // Draw grid lines (horizontal)
      ctx.strokeStyle = 'lightgray';
      ctx.lineWidth = 1;

      for (let i = 1; i <= xDataPoints; i++) {
        const y = (chartHeight / xDataPoints) * i;
        ctx.beginPath();
        ctx.moveTo(graphIndex * chartWidth, y);
        ctx.lineTo((graphIndex + 1) * chartWidth, y);
        ctx.stroke();
      }

      // Draw X and Y axes
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(graphIndex * chartWidth, 0);
      ctx.lineTo(graphIndex * chartWidth, chartHeight);
      ctx.lineTo((graphIndex + 1) * chartWidth, chartHeight);
      ctx.stroke();

      // Calculate the scale for the Y-axis
      const maxDataValue = Math.max(
        ...data1.slice(startIndex, endIndex),
        ...data2.slice(startIndex, endIndex),
        ...data3.slice(startIndex, endIndex)
      );
      const scale = chartHeight / maxDataValue;

      // Draw data points as dots
      const dataToDraw = graphIndex === 0 ? data1 : graphIndex === 1 ? data2 : data3;
      dataToDraw.slice(startIndex, endIndex).forEach((value, index) => {
        const x = (index + 1) * barSpacing + graphIndex * chartWidth;
        const y = chartHeight - value * scale;

        // Draw a dot at each data point
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();

        // Draw labels on the side of the chart
        ctx.fillStyle = 'black';
        ctx.fillText(labels[startIndex + index], (graphIndex + 1) * chartWidth + 20, y);
      });
    }

    // Convert canvas to a data URL
    const chartImageDataURL = canvas.toDataURL();

    // Set the data URL as the source for an image element
    chartRef.current.src = chartImageDataURL;
  }, []);

  return (
    <div id="chart-container">
      {/* Display the chart as an image */}
      <img ref={chartRef} alt="Line Chart" height="100%" width="100%" />
    </div>
  );
};

export default ChartComponent;

