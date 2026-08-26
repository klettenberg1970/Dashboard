// in auswahl.jsx
import './auswahl.css';

export default function Auswahl({ onAuswahl, daten }) {
    return (
        <div className="selectcontainer">  
            <select onChange={(e) => onAuswahl(e.target.value, daten.indexOf(e.target.value))}>
                <option value="">-- Bitte wählen --</option>
                {daten.map((item) => ( 
                    <option key={item} value={item}>
                        {item}
                    </option>   
                ))}
            </select>
        </div>
    );
}