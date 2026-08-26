import { useState, useEffect } from 'react';

import { kontaktKategorien } from "../kontaktKategorien";

import "../kontakteFormular.css";
import Erfolgsmeldung from '../../../components/Erfolgsmeldung/erfolgsmeldung';
const API = import.meta.env.VITE_API_URL;

export default function KontakteInput() {
    const [neueId, setNeueId] = useState("");
    const [erfolgsmeldung, setErfolgsmeldung] = useState(false);


    useEffect(() => {
        const fetchNextId = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/kontakte/next-id`);
            const data = await response.json();
            setNeueId(data.neueId);
        };
        fetchNextId();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);


        const kontaktData = {};
        for (const [key, value] of formData.entries()) {
            kontaktData[key] = value;  // Auch leere Werte werden übernommen
        }

        const response = await fetch(`${API}/api/kontakte/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(kontaktData),
        });
        const data = await response.json();
        if(data === "Erfolg") {
                setErfolgsmeldung(true); 
    
    setTimeout(() => {
        setErfolgsmeldung(false);  
    }, 3000);
            e.target.reset();   
           
        } else {
            alert("Fehler beim Erstellen des Kontakts: " + data.message);
        }       
    };
 
  return (
        <div className=" app-container input-container">


            <form onSubmit={handleSubmit}>
                <h1>Neuer Kontakt </h1>

                <input
                    type="text"
                    name="id"
                    defaultValue={neueId}
                />

                <input
                    type="text"
                    name="vorname"
                    placeholder={kontaktKategorien.vorname}
                />
                <input
                    type="text"
                    name="nachname"
                    placeholder={kontaktKategorien.nachname}
                />
                <input
                    type="text"
                    name="strasse"
                    placeholder={kontaktKategorien.strasse}
                />
                <input
                    type="text"
                    name="hausnummer"
                    placeholder={kontaktKategorien.hausnummer}
                />
                <input
                    type="text"
                    name="postleitzahl"
                    placeholder={kontaktKategorien.postleitzahl}
                />
                <input
                    type="text"
                    name="wohnort"
                    placeholder={kontaktKategorien.wohnort}
                />
                <input
                    type="text"
                    name="geburtstag"
                    placeholder={kontaktKategorien.geburtstag}
                />
                <input
                    type="text"
                    name="geburtsjahr"
                    placeholder={kontaktKategorien.geburtsjahr}
                />
                <input
                    type="text"
                    name="herkunft"
                    placeholder={kontaktKategorien.herkunft}
                />
                <input
                    type="tel"
                    name="telefonnummer"
                    placeholder={kontaktKategorien.telefonnummer}
                />
                <input
                    type="email"
                    name="email"
                    placeholder={kontaktKategorien.email}
                />
                <input
                    type="text"
                    name="interessen"
                    placeholder={kontaktKategorien.interessen}
                />
                <textarea
                    name="bemerkungen"
                    placeholder={kontaktKategorien.bemerkungen}
                />

                <button className= "btn" type="submit">Kontakt speichern</button>
            </form>
            
            {erfolgsmeldung && <Erfolgsmeldung message="Kontakt erfolgreich erstellt!" />}

        </div>
    );
}