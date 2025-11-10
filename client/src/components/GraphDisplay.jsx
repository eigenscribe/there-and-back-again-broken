import React from 'react';
import { Line, Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function GraphDisplay({ graphType }) {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#14b5ff',
          font: {
            family: 'Aclonica, sans-serif',
            size: 12
          }
        }
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#8b949e',
          font: {
            family: 'Fira Code, monospace',
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        }
      },
      y: {
        ticks: {
          color: '#8b949e',
          font: {
            family: 'Fira Code, monospace',
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        }
      }
    }
  };

  if (graphType === 'function') {
    const xValues = [];
    const yValues = [];
    for (let x = -5; x <= 5; x += 0.1) {
      xValues.push(x.toFixed(2));
      yValues.push(Math.sin(x));
    }

    const data = {
      labels: xValues,
      datasets: [
        {
          label: 'f(x) = sin(x)',
          data: yValues,
          borderColor: '#14b5ff',
          backgroundColor: 'rgba(20, 181, 255, 0.1)',
          borderWidth: 2,
          pointRadius: 0,
          tension: 0.4,
        },
      ],
    };

    return (
      <div className="graph-container">
        <Line options={chartOptions} data={data} />
      </div>
    );
  }

  if (graphType === 'metric') {
    const points = [
      { x: 0, y: 0 },
      { x: 3, y: 4 },
      { x: 1, y: 2 },
      { x: 4, y: 1 },
      { x: 2, y: 3 },
    ];

    const data = {
      datasets: [
        {
          label: 'Points in Metric Space',
          data: points,
          backgroundColor: '#14b5ff',
          borderColor: '#00e8ff',
          pointRadius: 6,
          pointHoverRadius: 8,
        },
      ],
    };

    return (
      <div className="graph-container">
        <Scatter options={chartOptions} data={data} />
      </div>
    );
  }

  if (graphType === 'sequence') {
    const n = Array.from({ length: 20 }, (_, i) => i + 1);
    const sequence = n.map(i => 1 / i);

    const data = {
      labels: n,
      datasets: [
        {
          label: 'aₙ = 1/n',
          data: sequence,
          borderColor: '#7952f5',
          backgroundColor: 'rgba(121, 82, 245, 0.2)',
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: '#14b5ff',
        },
      ],
    };

    return (
      <div className="graph-container">
        <Line options={chartOptions} data={data} />
      </div>
    );
  }

  return null;
}

export default GraphDisplay;
