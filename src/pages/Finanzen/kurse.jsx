import { useState, useEffect } from 'react';
import './kurse.css';
import Kursbutton from './kursbutton';

const API = import.meta.env.VITE_API_URL;

export default function Kurse() {
    const [kurse, setKurse] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [chartsCache, setChartsCache] = useState({});
    const [geoeffnetesAsset, setGeoeffnetesAsset] = useState(null);

    useEffect(() => {
        const fetchkurse = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`${API}/api/v1/kurse`);

                if (!response.ok) {
                    throw new Error(`Server-Fehler: ${response.status}`);
                }

                const data = await response.json();
                setKurse(data.kurse || {});
            } catch (err) {
                console.error("Fetch-Fehler:", err);
                setError("Kurse konnten nicht geladen werden.");
            } finally {
                setLoading(false);
            }
        };
        fetchkurse();
    }, []);

    const handleCharts = async (assetname) => {
        if (chartsCache[assetname]) {
            return;
        }

        const controller = new AbortController();
        const signal = controller.signal;

        try {
            const response = await fetch(`${API}/api/v1/kurse/charts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ assetname }),
                signal,
            });
            const data = await response.json();

            setChartsCache(prev => ({
                ...prev,
                [assetname]: data.charts
            }));
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error(`Fehler beim Laden der Charts für ${assetname}:`, error);
            }
        }
    };

    const handleToggle = (assetname) => {
        if (geoeffnetesAsset === assetname) {
            setGeoeffnetesAsset(null);
        } else {
            setGeoeffnetesAsset(assetname);
        }
    };

    if (loading) return <div className="loading app-container">Lade Marktdaten...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className='kurscontainer app-container'>
            {Object.entries(kurse).map(([kategorie, assets]) => (
                <div key={kategorie} className="kategorie-block">
                    <div className='kurskategorie'>
                        <h3>{kategorie}</h3>
                    </div>
                    {Object.entries(assets).map(([assetname, preis]) => (
                        <Kursbutton
                            key={`${kategorie}-${assetname}`}
                            assetname={assetname}
                            preis={preis}
                            charts={chartsCache[assetname] || []}
                            istGeoeffnet={geoeffnetesAsset === assetname}
                            onToggle={() => handleToggle(assetname)}
                            onCharts={handleCharts}
                            kategorie={kategorie}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
