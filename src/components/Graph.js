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
    const data1 = [-40, -38, -36, -34, -32, -30, -28, -26, -24, -22, -20,
    -18, -16, -14, -12, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 12, 14, 16,
    18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40];
    const data2 = [3750, 3700, 3650, 3600, 3550, 3500, 3450, 3400, 3350, 3300, 3250, 3200, 3150, 3100, 3050, 3000, 2900, 2850, 2800, 2750, 2700, 2650, 2600, 2550, 2500, 2250, 2000, 1750,
      1500, 1250, 1000, 750, 500, 250, 0];
    const data3 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40];
    // Define x-axis data and labels (assuming it's the same for all three graphs)
    const xdata = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
      1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000,
      2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000,
      3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000,
      4100, 4200, 4300, 4400, 4500, 4600, 4700, 4800, 4900, 5000,
      5100, 5200, 5300, 5400, 5500, 5600, 5700, 5800, 5900, 6000];
    // const ylabels = ['0', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000',
    //   '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000',
    //   '2100', '2200', '2300', '2400', '2500', '2600', '2700', '2800', '2900', '3000',
    //   '3100', '3200', '3300', '3400', '3500', '3600', '3700', '3800', '3900', '4000',
    //   '4100', '4200', '4300', '4400', '4500', '4600', '4700', '4800', '4900', '5000',
    //   '5100', '5200', '5300', '5400', '5500', '5600', '5700', '5800', '5900', '6000'];
    const ylabels = ['6000', '5000', '4000', '3000', '2000', '1000', '0'];
    // const xlabels = ['-40', '-38', '-36', '-34', '-32', '-30', '-28', '-26', '-24', '-22', '-20',
    //   '-18', '-16', '-14', '-12', '-10', '-8', '-6', '-4', '-2', '0', '2', '4', '6', '8', '10', '12', '14', '16',
    //   '18', '20', '22', '24', '26', '28', '30', '32', '34', '36', '38', '40', '3750', '3700', '3650', '3600',
    //   '3550', '3500', '3450', '3400', '3350', '3300', '3250', '3200', '3150', '3100', '3050', '3000', '2900', '2850', '2800', '2750',
    //   '2700', '2650', '2600', '2550', '2500', '2250', '2000', '1750', '1500', '1250', '1000', '750', '500', '250',
    //   '0', '0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36', '38', '40'];
    const xlabels1 = ['-40', '-20', '0', '20', '40'];
    const xlabels2 = ['3500', '3000', '2500'];
    const xlabels3 = ['0', '10', '20', '30'];

    // Set chart properties
    const chartWidth = canvas.width / 3; // Divide canvas into three sections
    const chartHeight = canvas.height;
    const dataPoints = data1.length;
    const xDataPoints = xdata.length;
    const barSpacing = chartWidth / (dataPoints + 1);

    // Function to check if a line should be bold
    // const isBoldLine = (lineIndex) => {
    //   // Add line indices that you want to make bold to this array
    //   const boldLineIndices = [10, 54, 90];
    //   return boldLineIndices.includes(lineIndex);
    // };

    // Loop through each section of the canvas for the three graphs
    for (let graphIndex = 0; graphIndex < 4; graphIndex++) {
      // Calculate the starting and ending indices for the data
      const startIndex = graphIndex * dataPoints;
      const endIndex = (graphIndex + 1) * dataPoints;

      // Draw vertical grid lines
      ctx.strokeStyle = 'lightgray';
      ctx.lineWidth = 1;

      // for (let i = startIndex + 1; i <= endIndex; i++) {
      //   const x = (i - startIndex) * barSpacing + graphIndex * chartWidth;
      //   // Make a specific line bold
      //   if (isBoldLine(i)) {
      //     ctx.lineWidth = 1; // Set the line width to make it bold
      //     ctx.strokeStyle = 'black'; // Set the line color
      //   } else {
      //     ctx.lineWidth = 1; // Reset line width to normal
      //     ctx.strokeStyle = 'lightgray'; // Reset line color to normal
      //   }
      //   ctx.beginPath();
      //   ctx.moveTo(x, 0);
      //   ctx.lineTo(x, chartHeight);
      //   ctx.stroke();
      // }

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
        // ctx.fillStyle = 'black';
        // for(let index = 0; index < labels.length; index += 10) {
        //   ctx.fillText(labels[startIndex + index], (graphIndex + 1) * chartWidth + 10, y);
        // }

        // ctx.fillText(ylabels[startIndex + index], (graphIndex + 2.9) * chartWidth + 10, y);
        // ctx.fillText(xlabels[startIndex + index], (graphIndex + 2.9) * chartWidth + 10, x);

        // Customize the position and styling of the labels
        ctx.font = '12px Arial';
        ctx.fillStyle = 'black';

        // Add x-axis labels
        xlabels1.forEach(function (label, index) {
          var x = (index + 0) * (chartWidth / (xlabels1.length + 1));
          var y = chartHeight - 10;
          ctx.fillText(label, x, y);
        });

        xlabels2.forEach(function (label, index) {
          var x = (index + 4.75) * (chartWidth / (xlabels2.length + 1));
          var y = chartHeight - 20;
          ctx.fillText(label, x, y);
        });

        xlabels3.forEach(function (label, index) {
          var x = (index + 10) * (chartWidth / (xlabels3.length + 1));
          var y = chartHeight - 30;
          ctx.fillText(label, x, y);
        });

        // Customize x-axis labels for the current graph
        // const xlabels =
        //   graphIndex === 0 ? xlabels1 : graphIndex === 1 ? xlabels2 : xlabels3;
        // const label = xlabels[index];
        // const xLabelX = (index + 1) * (chartWidth / (xlabels.length + 1));
        // const xLabelY = chartHeight - 10;
        // ctx.fillText(label, xLabelX, xLabelY);

        // Add y-axis labels
        ylabels.forEach(function (label, index) {
          var x = 10;
          var y = (index + 2) * (chartHeight / (ylabels.length + 1));
          ctx.save();
          ctx.translate(x, y);
          ctx.fillText(label, 0, 0);
          ctx.restore();
        });
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
