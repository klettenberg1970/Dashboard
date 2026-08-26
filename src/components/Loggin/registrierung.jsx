import { useState, useRef } from 'react';

const API = import.meta.env.VITE_API_URL;

export default function Registrierung({ onErfolg }) {
    const [fehlerMeldung, setFehlerMeldung] = useState('');
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFehlerMeldung('');
        
        const username = e.target.username.value;
        const password = e.target.password.value;

        const response = await fetch(`${API}/api/todo/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        
        if (data.success) {
            formRef.current?.reset();
            onErfolg();
        } else {
            setFehlerMeldung(data.message);
            formRef.current?.reset();  // ← Hier zurücksetzen
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} ref={formRef}>
                <input type="text" name="username" placeholder="Benutzernamen eingeben" />
                <input type="text" name="password" placeholder="Passwort eingeben" />
                <button className="btn" type="submit">Registrieren</button>
            </form>
            {fehlerMeldung && <p className="fehlermeldung">{fehlerMeldung}</p>}
        </div>
    );
}