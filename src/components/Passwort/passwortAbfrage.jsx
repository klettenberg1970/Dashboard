import { useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function PasswortAbfrage({ onAbfrage }) {
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Anfrage an das Backend
        const response = await fetch(`${API}/api/passwort`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password }),
        });
        
        const data = await response.json();

        // 2. Wir prüfen die Antwort vom Server
        // Wir nutzen 'data.message' (deine Variable) und das neue 'data.token'
        if (data.token) {
            
            // SPEICHERN: Das Token wird im Browser abgelegt
            // Das ist der "Ausweis", der 5 Minuten gültig bleibt
            localStorage.setItem("portfolio_token", data.token);

            // WEITERLEITEN: Die Funktion aus den Props aufrufen
            onAbfrage(); 
            
        } else {
            // FEHLER: Feld leeren bei falscher Eingabe
            setPassword("");
            alert("Passwort nicht korrekt.");
        }
    };

    return (
        <div style={{
            minHeight: 'calc(100vh - 120px)',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{
                width: '80%',
                margin: 'auto',
                marginTop: '25vh',
                padding: '20px',
                border: '2px solid white',
                borderRadius: '8px',
                textAlign: 'center',
            }}>
                <p style={{
                    fontSize: "1.5rem",
                    marginBottom: "20px",
                }}>Geschützter Bereich - Bitte Passwort eingeben</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Passwort eingeben"
                        autoFocus
                        style={{
                            width: '80%',
                            height: '40px',
                            fontSize: '1.2rem',
                            padding: '5px 10px',
                            marginBottom: '20px',
                        }}
                    />
                    <button 
                        type="submit"
                        style={{
                            padding: '10px 20px',
                            fontSize: '1rem',
                            backgroundColor: '#007BFF',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}