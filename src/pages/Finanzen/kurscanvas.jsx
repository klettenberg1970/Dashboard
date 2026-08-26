import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

export default function Kurscanvas({ chartData }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let myChart;

    const renderChart = () => {
      if (!chartData || chartData.length === 0) {
        return;
      }

      const label = chartData.map(item => {
        const date = new Date(item.date);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${month}/${year}`;
      });

      const data = chartData.map(item => item.close);

      const uniqueLabels = [];
      const uniqueData = [];

      label.forEach((currentLabel, index) => {
        if (!uniqueLabels.includes(currentLabel)) {
          uniqueLabels.push(currentLabel);
          uniqueData.push(data[index]);
        }
      });

      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');

        if (myChart) {
          myChart.destroy();
        }

        myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: uniqueLabels,
            datasets: [{
              data: uniqueData,
              backgroundColor: 'white',
              borderColor: 'white',
              fill: false,
              borderWidth: 2
            }]
          },

          options: {
            responsive: true,
            scales: {
              x: {
                ticks: {
                  color: 'white',
                },
                grid: {
                  display:false,
                },
              },
              y: {
                ticks: {
                  color:'white',
                },
                grid: {
                  display:false,
                },
              },
            },
            plugins: {
              legend: {
                display: false
              }
            }
          }
        }); // Hier fehlte die schließende Klammer
      }
    };

    renderChart();

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [chartData]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{
          backgroundColor: 'var(--color-secondary)',
          padding: 0,
          margin: 0,
          border: 'none',
          display: 'block'
        }}
      ></canvas>
    </div>
  );
}
