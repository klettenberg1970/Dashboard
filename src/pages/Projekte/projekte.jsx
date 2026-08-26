import { useEffect, useState } from "react";
import ObisidianMainCard from "./obsidianMainCard";
import ShowMD from "./showMD";
import UnderConstruction from "../../components/underconstruction";
import './obsidian.css';

const API = import.meta.env.VITE_API_URL;
const obsidianID = '1yDIjIArVucBW_f_MRiVu3C1aEUq71_Sr';
const baustelle = false;

export default function Projekte() {

    const [alleDateien, setAlleDateien] = useState({});
    const [datei, setDatei] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mdSichtbar, setMdSichtbar] = useState(false);

    if (baustelle) {
        return <UnderConstruction />;
    }

    useEffect(() => {
        const fetchAlleDateien = async () => {
            const response = await fetch(`${API}/api/obsidian/komplett/${obsidianID}`);
            const daten = await response.json();
            setAlleDateien(daten);
            setLoading(false);
        }
        fetchAlleDateien();
    }, []);

    const handleDateiOeffnen = async (datei) => {
        const response = await fetch(`${API}/api/obsidian/datei/${datei.id}`);
        const data = await response.json();
        setDatei(data.singleDatei);
        setMdSichtbar(true);
    }

    const handleClose = () => {
        setMdSichtbar(false);
        setDatei(null); // ← Datei zurücksetzen
    }

    if (loading) return <div className="loading app-container">Daten werden geladen...</div>;

    return (
        <div className="obsidian-container app-container">
            <h1>Obsidian</h1>

            <ObisidianMainCard alleDateien={alleDateien} mdDatei={handleDateiOeffnen} />

            {datei && (
                <ShowMD 
                    markdown={datei} 
                    mdSichtbar={mdSichtbar} 
                    onClose={handleClose}  // ← Funktion übergeben
                />
            )}
        </div>
    )
}