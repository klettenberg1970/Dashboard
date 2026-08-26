import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


const parteiFarben = {
    "CDU": "#000000",
    "CSU": "#000000",
    "CDU/CSU": "#000000",
    "SPD": "#E3000F",
    "Grüne": "#1AA037",
    "FDP": "#FFED00",
    "Linke": "#BE3075",
    "AfD": "#009EE0",
    "BSW": "#7A4B9A",
    "Freie Wähler": "#FF6600",
    "Sonstige": "#808080"
    // ... weitere
};



export default function UmfrageTorte({ parteien, prozente }) {

    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (!parteien?.length || !prozente?.length) return;

        // Altes Chart löschen
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        // Farben-Array aus den Parteinamen erstellen
        const farben = parteien.map(partei => {
            // Fallback-Farbe falls Partei nicht im Objekt ist
            return parteiFarben[partei] || '#808080'; // Grau als Fallback
        });

        // Neues Chart erstellen
        chartInstance.current = new Chart(chartRef.current, {
            type: 'pie',
            data: {
                labels: parteien,
                datasets: [{
                    data: prozente,
                    backgroundColor: farben,  // 👈 Dynamische Farben
                    borderColor: 'white',
                    borderWidth: 2
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            generateLabels: (chart) => {
                                const labels = chart.data.labels.map((label, index) => ({
                                    text: label,
                                    fillStyle: parteiFarben[label] || '#808080',
                                    strokeStyle: 'white',
                                    index: index
                                }));
                                return labels;
                            }
                        }
                    }
                }
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [parteien, prozente]);




    return (
        <div className="tortencontainer">
            <canvas ref={chartRef} ></canvas>
        </div>
    );
}