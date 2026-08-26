import { useState, useEffect } from 'react';
import LigaTabelle from './tabelle';
import Torschuetzen from './torschuetzen.jsx';
import Spieltag from './spieltag.jsx';
import SelectLiga from './selectLiga';
import UnderConstruction from "../../components/underconstruction";
import { OpenLiga } from "./openligaClass.js";
import './CSS/fussball.css'

const baustelle = false;
const API = import.meta.env.VITE_API_URL;
const jahr = 2026;

export default function Fussball() {
    const [tabelle, setTabelle] = useState([]);
    const [goalgetter, setGoalgetter] = useState([]);
    const [spieltag, setSpieltag] = useState([]);
    

   const fetchLigaDaten = async (ligaKuerzel,spieltagNummer=1) => {
    const openLiga = new OpenLiga();
    const [tabellenData, goalgetterData,spieltagData] = await Promise.all([
        openLiga.ligaTabelle(ligaKuerzel, jahr),
        openLiga.torschuetzen(ligaKuerzel, jahr),
        openLiga.spieltag(ligaKuerzel, jahr, spieltagNummer)
        
    ]);
    setTabelle(tabellenData);
    setGoalgetter(goalgetterData);
    setSpieltag(spieltagData);
    
};

    if (baustelle) {
        return <UnderConstruction />;
    }

   useEffect(() => {
    fetchLigaDaten("bl1",1);
    
}, []);

    const handleLigaAuswahl = (eingabe) => {
        fetchLigaDaten(eingabe);
    };

    return (
        <div className='fussball-container app-container'>
            <SelectLiga onSelect={handleLigaAuswahl} />
            <LigaTabelle tabelle={tabelle} />
            <Torschuetzen goalgetter={goalgetter} />
            <Spieltag spieltag={spieltag} />
        </div>
    );
}