import { useState, useRef } from 'react';
import Registrierung from './registrierung';
import './loggin.css'

const API = import.meta.env.VITE_API_URL;

export default function LogginFormular({ onDaten }) {
    const [fehlerMeldung, setFehlerMeldung] = useState(false);
    const [registrieren, setRegistrieren] = useState(false);
    const [loggin, setLoggin] = useState(true);
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        const response = await fetch(`${API}/api/todo/loggin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();

        if (data.success) {
            onDaten(username);
        } else {
            setFehlerMeldung(true);
            formRef.current?.reset();
        }
    };

    return (
        <div className="loggin-container">
            {loggin && (
                <>
                    <form onSubmit={handleSubmit} ref={formRef}>
                        <input type="text" name="username" placeholder="Benutzernamen eingeben" />
                        <input type="text" name="password" placeholder="Passwort eingeben" />
                        <button className="btn" type="submit">Einloggen</button>
                    </form>
                    {fehlerMeldung && <p className="fehlermeldung">Ungültige Anmeldedaten. Bitte versuchen Sie es erneut.</p>}
                    <hr />
                </>
            )}

            <button style={{
                marginTop: '10px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}
                className='btn'
                onClick={() => {
                    setRegistrieren(!registrieren);
                    setLoggin(false);
                }}>
                Registrieren
            </button>

            {registrieren && <Registrierung onErfolg={() => {
                setRegistrieren(false);  // Registrierung ausblenden
                setLoggin(true);         // Login anzeigen
            }} />}
        </div>
    );
}