import { useState } from 'react';

export default function ObsidianInhalt({ ordner, mdDatei }) {
    const [unterOrdnerGeöffnet, setUnterOrdnerGeöffnet] = useState(null);
  

    console.log('Ordner:', ordner)
    console.log("Name:", ordner.name);
    console.log("ID:", ordner.id);
    console.log('Inhalt: ', ordner.inhalt);

    const handleDateiOeffnen = (datei) => {
        mdDatei(datei);
    }

    return (
        <div className="obsidian-inhalt">
            {ordner.inhalt.ordner.map((unterOrdner) => (
                <div key={unterOrdner.id} className="unterordner-card">
                    <button
                        style={{ backgroundColor: 'red' }}
                        onClick={() => {
                            if (unterOrdnerGeöffnet === unterOrdner.id) {
                                setUnterOrdnerGeöffnet(null);
                            } else {
                                setUnterOrdnerGeöffnet(unterOrdner.id);
                            }
                        }}
                    >
                        {unterOrdner.name}
                    </button>

                    {unterOrdnerGeöffnet === unterOrdner.id && (
                        <div className="unterordner-inhalt">
                            {unterOrdner.inhalt.dateien.map((datei) => (
                                <div key={datei.id} className="datei-card">
                                    <button
                                        style={{ backgroundColor: 'green' }}
                                        onClick={() => handleDateiOeffnen(datei)}  // ← Hier die Änderung
                                    >
                                        {datei.name}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            {ordner.inhalt.dateien.map((datei) => (
                <div key={datei.id} className="datei-card">
                    <button
                        style={{ backgroundColor: 'green' }}
                        onClick={() => handleDateiOeffnen(datei)}  // ← Hier die Änderung
                    >
                        {datei.name}
                    </button>
                </div>
            ))}
        </div>
    )
}