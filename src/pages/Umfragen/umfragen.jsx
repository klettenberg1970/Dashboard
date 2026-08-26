import { useState, useEffect, use } from 'react';

import Umfragentext from './umfragenText';
import Umfrageergebnisse from './umfrageergebnis';
import Auswahl from '../../components/Dropdown/auswahl';

const wahlen = ["Bundestag","Baden-Württemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thüringen", "Europaparlament"];


const API = import.meta.env.VITE_API_URL;

export default function Umfragen() {
    const [umfragen, setUmfragen] = useState({});


      // Bundestag (ID 0) beim ersten Laden automatisch abrufen
    useEffect(() => {
        handleAuswahl("Bundestag", 0);
    }, []); // Leeres Array = nur beim ersten Render

    const handleAuswahl = async (wahl, id) => {

        try {
            const response = await fetch(`${API}/api/umfragen/${id}`);
            const data = await response.json();
            setUmfragen(data || {});
        } catch (error) {
            console.error("Fehler beim Abrufen der Umfragen:", error);
        }

    }
    return (
    <div className = 'app-container' style={{width:"90%",margin:"auto"}}>

        <Auswahl onAuswahl={(handleAuswahl)} daten={wahlen}/>
          <Umfrageergebnisse ergebnisse={umfragen.ergebnisse} />
        <Umfragentext umfragen={umfragen} />
      
        {/* <pre>{JSON.stringify(umfragen, null, 2)}</pre> */}

    </div>
    )
}