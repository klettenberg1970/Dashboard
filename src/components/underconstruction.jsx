export default function UnderConstruction() {
    return (
        <div 
            className="app-container"
            style={{ textAlign: 'center', padding: '50px' }}
        >
            <h1>Seite im Aufbau</h1>
            <p>Diese Seite befindet sich derzeit im Aufbau. Bitte schauen Sie später wieder vorbei!</p>
            <img 
                src="images.png" 
                alt="Seite im Aufbau" 
                style={{
                    marginTop: '3rem',
                    width: '250px',        // ← Feste Breite
                    height: 'auto',
                    margin:'auto',       // ← Seitenverhältnis beibehalten
                    maxWidth: '90%'         // ← Falls Bildschirm kleiner ist
                }}
            />
        </div>
    );
}