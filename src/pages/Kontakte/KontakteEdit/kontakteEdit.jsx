import { useState } from 'react';

import KontakteEditFormular from './kontakteEditFormular';
import Erfolgsmeldung from '../../../components/Erfolgsmeldung/erfolgsmeldung';

import "../kontakteFormular.css";
import "./kontakteEdit.css";
const API = import.meta.env.VITE_API_URL;

export default function KontakteEdit() {
    const [kontakt, setKontakt] = useState(null);
    const [erfolgsmeldung, setErfolgsmeldung] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const gewaehlteID = formData.get("id");
        console.log(`Gewählte ID: ${gewaehlteID}`);
        
        const response = await fetch(`${API}/api/kontakte/${gewaehlteID}`);
        const data = await response.json();
        
        if (data && data.id) {
            setKontakt(data);
        } else {
            alert("Kontakt mit dieser ID wurde nicht gefunden");
            setKontakt(null);
        }
    }

   const handleUpdate = async (updatedKontakt) => {
    console.log("Aktualisierte Kontaktdaten:", updatedKontakt);
    const response = await fetch(`${API}/api/kontakte/${updatedKontakt.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedKontakt)
    });
    const data = await response.json();
    if (data === "Erfolg") {
        setErfolgsmeldung(true);
        setTimeout(() => {
            setErfolgsmeldung(false);
        }, 3000);
        setKontakt(null); // ← DAS MUSS REIN, damit das Formular zurückgesetzt wird
    } else {
        alert("Fehler beim Bearbeiten des Kontakts: " + data.message);
    }
};

    const handleDelete = async () => {
        const response = await fetch(`${API}/api/kontakte/${kontakt.id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log("Antwort vom Server:", data);
        
        if (data === "Erfolg") {
            setErfolgsmeldung(true);
            setTimeout(() => {
                setErfolgsmeldung(false);
            }, 3000);
            setKontakt(null);
        } else {
            alert("Fehler beim Löschen des Kontakts: " + data.message);
        }
    };

    return (
        <div className="app-container">
            <div className=" edit-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        name="id"
                        placeholder="Id eingeben"
                    />
                    <button
                    className='btn' type="submit">Senden</button>
                </form>
            </div>

            <KontakteEditFormular kontakt={kontakt} onSubmit={handleUpdate} />

            <div className='edit-container'>
                <button className='btn'
                onClick={handleDelete}> Kontakt Löschen</button>
            </div>

            {erfolgsmeldung && <Erfolgsmeldung message="Kontakt erfolgreich bearbeitet!" />}
        </div>
    )
}