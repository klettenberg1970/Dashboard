export default function PortfolioFormular({ name, anzahl, einstand, formularsichtbar, onSave }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        // Wir lassen die Werte als String
        const updatedData = {
            name: name,
            anzahl: formData.get("anzahl"),   // Bleibt String
            einstand: formData.get("einstand") // Bleibt String
        };

        onSave(updatedData);
    };

    return (
        <div className="portfolio-input">
            {formularsichtbar && (
                <form onSubmit={handleSubmit}
                    className="portfolio-eingabe">

                    <hr />

                    <div  >
                        <label htmlFor="anzahl">Anzahl:</label>
                        <input
                            type="text"
                            id="anzahl"
                            name="anzahl"
                            defaultValue={anzahl}
                            key={`anzahl-${name}`}
                        />
                    </div>
                    <hr />
                    <div    >
                        <label htmlFor="einstand">Einstand:</label>
                        <input
                            type="text"
                            id="einstand"
                            name="einstand"
                            defaultValue={einstand}
                            key={`einstand-${name}`}
                        />

                    </div>
                    <hr />

                    <button type="submit" className='portfolio-edit-button'>Speichern</button>

                </form>
            )}
        </div>
    );
}