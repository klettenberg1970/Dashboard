
import UmfrageTorte from "./umfragenTorte";
import './CSS/umfrageergebnis.css';

export default function Umfrageergebnisse({ ergebnisse }) {


    const sortierteErgebnisse = Object.values(ergebnisse || {}).sort((a, b) => {
        if (a.kurzform === "Sonstige") return 1;
        if (b.kurzform === "Sonstige") return -1;
        return b.prozent - a.prozent;
    });

    // Moderne Methode mit map
    const parteien = sortierteErgebnisse.map(value => value.kurzform);
    const prozente = sortierteErgebnisse.map(value => value.prozent);


    return (
        <div className="ergebnisse">

            <div className="ergebnistext">
                {sortierteErgebnisse.map((value) => (
                    <div key={value.kurzform}>
                        <p>{value.kurzform}: {value.prozent}%</p>
                    </div>
                ))}

            </div>

            <UmfrageTorte parteien={parteien} prozente={prozente} />
        </div>
    );
}