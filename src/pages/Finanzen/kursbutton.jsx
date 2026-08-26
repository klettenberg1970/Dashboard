import { useEffect } from 'react';
import Kurscanvas from './kurscanvas';

export default function Kursbutton({ assetname, preis, onCharts, charts, istGeoeffnet, onToggle,kategorie }) {
  useEffect(() => {
    if (istGeoeffnet && (!charts || charts.length === 0)) {
      onCharts(assetname);
    }
  }, [istGeoeffnet, assetname, onCharts, charts]);

     const getSymbol = () => {
    // Prüfe auf die KATEGORIE, nicht den Assetnamen
    if (kategorie && kategorie.toLowerCase() === 'anleihen') {
      return '%';
    }
    return '€';
  };

  return (
    <div className="kursausgabe">
      <button onClick={onToggle}>
        {assetname} <span className='preis'>{preis !== null ? `${preis}  ${getSymbol()}` : 'N/A'}</span> 
        </button>

      <div style={{
        display: istGeoeffnet ? 'block' : 'none',
        width: "100%",
       
        padding: "5px",
        borderRadius: "5px",
      }}>
        <Kurscanvas chartData={charts} assetName={assetname} />
      </div>
    </div>
  );
}
