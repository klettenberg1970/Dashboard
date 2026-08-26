import { useState } from 'react';

export default function Feedsnamen({ feedsnamen, onName }) {
  const [selectedName, setSelectedName] = useState(''); // State für den ausgewählten Namen

  return (
    <div className='selectcontainer'>
     
      <select 
        value={selectedName} // Aktueller Wert der Select-Box
        onChange={(e) => {
          const selectedName = e.target.value;
          setSelectedName(selectedName); // State aktualisieren
          onName(selectedName); // Callback aufrufen
        }}
      >
        <option value="">-- Bitte wählen --</option> {/* Leere Option als Platzhalter */}
        {feedsnamen.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
