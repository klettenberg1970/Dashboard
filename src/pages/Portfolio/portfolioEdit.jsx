import { useState, useEffect } from "react";
import Auswahl from '../../components/Dropdown/auswahl';
import PortfolioFormular from "./portfolioFormular";

export default function PortfolioEdit({ daten, editsichtbar, onSave }) {
    const [selectedName, setSelectedName] = useState("");
    const [selectedAnzahl, setSelectedAnzahl] = useState(0);
    const [selectedEinstand, setSelectedEinstand] = useState(0);
    const [formularsichtbar, setFormularSichtbar] = useState(false);

    useEffect(() => {
        if (!editsichtbar) {
            setFormularSichtbar(false);
        }
    }, [editsichtbar]);

    if (!editsichtbar) {
        return null;
    }

    const array = daten.portfolio?.map((item) => item.name) || [];

    const handleAuswahl = (name, id) => {
        const item = daten.portfolio.find(i => i.name === name);
        if (item) {
            setSelectedName(name);
            setSelectedAnzahl(item.anzahl || 0);
            setSelectedEinstand(item.einstand || 0);
            setFormularSichtbar(true);
        }
    };

    return (
        <div>
            <div className="portfolio-dropdown">
                <Auswahl
                    daten={array}
                    onAuswahl={handleAuswahl}
                />
            </div>
            <PortfolioFormular 
                name={selectedName}
                anzahl={selectedAnzahl} 
                einstand={selectedEinstand} 
                formularsichtbar={formularsichtbar} 
                onSave={onSave}
            />
        </div>
    );
}