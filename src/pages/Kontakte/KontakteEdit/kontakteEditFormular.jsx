import { useState, useEffect } from 'react';

export default function KontakteEditFormular({ kontakt, onSubmit }) {
    const [formData, setFormData] = useState({
        id: "",
        vorname: "",
        nachname: "",
        strasse: "",
        hausnummer: "",
        postleitzahl: "",
        wohnort: "",
        geburtstag: "",
        geburtsjahr: "",
        herkunft: "",
        telefonnummer: "",
        email: "",
        interessen: "",
        bemerkungen: ""
    });

    // Aktualisiert das Formular, wenn sich kontakt ändert
    useEffect(() => {
        if (kontakt) {
            setFormData({
                id: kontakt.id || "",
                vorname: kontakt.vorname || "",
                nachname: kontakt.nachname || "",
                strasse: kontakt.strasse || "",
                hausnummer: kontakt.hausnummer || "",
                postleitzahl: kontakt.postleitzahl || "",
                wohnort: kontakt.wohnort || "",
                geburtstag: kontakt.geburtstag || "",
                geburtsjahr: kontakt.geburtsjahr || "",
                herkunft: kontakt.herkunft || "",
                telefonnummer: kontakt.telefonnummer || "",
                email: kontakt.email || "",
                interessen: kontakt.interessen || "",
                bemerkungen: kontakt.bemerkungen || ""
            });
        } else {
            // Formular leeren, wenn kontakt null ist
            setFormData({
                id: "",
                vorname: "",
                nachname: "",
                strasse: "",
                hausnummer: "",
                postleitzahl: "",
                wohnort: "",
                geburtstag: "",
                geburtsjahr: "",
                herkunft: "",
                telefonnummer: "",
                email: "",
                interessen: "",
                bemerkungen: ""
            });
        }
    }, [kontakt]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="input-container">
            <form onSubmit={handleSubmit}>
                <h1>Kontakt bearbeiten</h1>

                <input
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    placeholder="ID"
                />

                <input
                    type="text"
                    name="vorname"
                    value={formData.vorname}
                    onChange={handleChange}
                    placeholder="Vorname"
                />
                <input
                    type="text"
                    name="nachname"
                    value={formData.nachname}
                    onChange={handleChange}
                    placeholder="Nachname"
                />
                <input
                    type="text"
                    name="strasse"
                    value={formData.strasse}
                    onChange={handleChange}
                    placeholder="Straße"
                />
                <input
                    type="text"
                    name="hausnummer"
                    value={formData.hausnummer}
                    onChange={handleChange}
                    placeholder="Hausnummer"
                />
                <input
                    type="text"
                    name="postleitzahl"
                    value={formData.postleitzahl}
                    onChange={handleChange}
                    placeholder="Postleitzahl"
                />
                <input
                    type="text"
                    name="wohnort"
                    value={formData.wohnort}
                    onChange={handleChange}
                    placeholder="Wohnort"
                />
                <input
                    type="text"
                    name="geburtstag"
                    value={formData.geburtstag}
                    onChange={handleChange}
                    placeholder="Geburtstag"
                />
                <input
                    type="text"
                    name="geburtsjahr"
                    value={formData.geburtsjahr}
                    onChange={handleChange}
                    placeholder="Geburtsjahr"
                />
                <input
                    type="text"
                    name="herkunft"
                    value={formData.herkunft}
                    onChange={handleChange}
                    placeholder="Herkunft"
                />
                <input
                    type="tel"
                    name="telefonnummer"
                    value={formData.telefonnummer}
                    onChange={handleChange}
                    placeholder="Telefonnummer"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-Mail"
                />
                <input
                    type="text"
                    name="interessen"
                    value={formData.interessen}
                    onChange={handleChange}
                    placeholder="Interessen"
                />
                <textarea
                    name="bemerkungen"
                    value={formData.bemerkungen}
                    onChange={handleChange}
                    placeholder="Bemerkungen"
                />

                <button className='btn' type="submit">Änderungen speichern</button>
            </form>
        </div>
    );
}