import { useEffect, useState } from "react";
import ShowMD from "./showMD";
import { useParams, useNavigate } from "react-router-dom";
import UnderConstruction from "../../components/underconstruction";
import './projekte.css';

const API = import.meta.env.VITE_API_URL;
const baustelle = false;



export default function Projekte() {

    if (baustelle) {
            return <UnderConstruction />;
        }

    const [datei, setDatei] = useState(null);
    const { dateiname } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (dateiname) {
            // URL hat einen Dateinamen → Datei laden
            const fetchDatei = async () => {
                const response = await fetch(`${API}/api/obsidian/dateiname/${dateiname}`);
                const daten = await response.json();
                setDatei(daten.datei);
            };
            fetchDatei();
        } else {
            // Keine URL → Startdatei laden
            const fetchStartDatei = async () => {
                const response = await fetch(`${API}/api/obsidian`);
                const daten = await response.json();
                setDatei(daten.start);
            };
            fetchStartDatei();
        }
    }, [dateiname]);

    const handleDateiOeffnen = (dateiName) => {
        navigate(`/projekte/${dateiName}`);
    }

    return (
        <div className="projekte-container app-container">
            {datei && <ShowMD markdown={datei} onDateiOeffnen={handleDateiOeffnen} />}
        </div>
    )
}