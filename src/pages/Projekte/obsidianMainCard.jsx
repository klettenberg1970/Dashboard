import { useState } from 'react';
import ObsidianInhalt from "./obsidianInhalt";

export default function ObsidianMainCard({ alleDateien, mdDatei }) {
    console.log("Alle Dateien:", alleDateien);
    const OrdnerArray = Object.values(alleDateien.ordner);

    const [geöffnet, setGeöffnet] = useState(null);

    return (
        <div className="obsidian-maincard">
            {OrdnerArray.map((ordner) => (
                ordner.name !== ".obsidian" && (  // <-- Bedingung HIER, vor dem <div>
                    <div key={ordner.id} className="ordner-card">
                        <button
                            style={{ backgroundColor: 'blue' }}

                            onClick={() => {
                                if (geöffnet === ordner.id) {
                                    setGeöffnet(null);
                                } else {
                                    setGeöffnet(ordner.id);
                                }
                            }}
                        >
                            {ordner.name}
                        </button>
                       

                        {geöffnet === ordner.id && (
                            <ObsidianInhalt ordner={ordner} mdDatei={mdDatei} />
                        )}
                    </div>
                )
            ))}
        </div>
    )
}