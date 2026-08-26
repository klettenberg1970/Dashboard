import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function PortfolioCanvas({daten}) {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    // Farben definieren (gleiche Farben für Diagramm und Legende)
    const colors = [
        'rgba(255, 99, 132, 0.8)',    // Rot
        'rgba(54, 162, 235, 0.8)',    // Blau
        'rgba(255, 205, 86, 0.8)',    // Gelb
        'rgba(75, 192, 192, 0.8)',    // Türkis
        'rgba(153, 102, 255, 0.8)',   // Lila
        'rgba(255, 159, 64, 0.8)'     // Orange
    ];

    useEffect(() => {
        // Alten Chart löschen, falls vorhanden
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        // Namen und Werte sammeln
        const namen = daten?.portfolio?.map(item => item.name) || [];
        namen.push('Cash');
        
        const werte = daten?.portfolio?.map(item => item.wertGesamt) || [];
        werte.push(daten?.statistik?.cash || 0);

        // Neuen Chart erstellen
        if (chartRef.current && werte.length > 0) {
            chartInstance.current = new Chart(chartRef.current, {
                type: 'pie',
                data: {
                    labels: namen,
                    datasets: [{
                        data: werte,
                        backgroundColor: colors,
                        borderColor: colors.map(c => c.replace('0.8', '1')),
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false // Eigene Legende verwenden
                        }
                    }
                },
            });
        }

        // Aufräumen beim Unmount
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
                chartInstance.current = null;
            }
        };
    }, [daten]);

    // Legenden-Einträge mit den gleichen Farben wie im Diagramm
    const legendItems = [
        ...(daten?.portfolio?.map((item, index) => ({
            name: item.name,
            color: colors[index % colors.length] // Gleiche Farbe wie im Diagramm
        })) || []),
        {
            name: 'Cash',
            color: colors[colors.length - 1] // Letzte Farbe für Cash (Orange)
        }
    ];

    return (
        <div className='portfolio-canvas'>
            <canvas ref={chartRef}></canvas>
            
            {/* Einfache Legende nur mit Namen und Farben */}
            <div className="custom-legend">
                {legendItems.map((item, index) => (
                    <div key={index} className="legend-item">
                        <div className="legend-color" style={{ backgroundColor: item.color }}></div>
                        <span className="legend-name">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}