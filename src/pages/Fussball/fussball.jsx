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

  if (baustelle) {
        return <UnderConstruction />;
    }
    const [tabelle, setTabelle] = useState([]);
    const [goalgetter, setGoalgetter] = useState([]);
    const [spieltag, setSpieltag] = useState([]);
    const [aktuellerSpieltag, setAktuellerSpieltag] = useState([]);

    const fetchAktuellerSpieltag = async (ligaKuerzel) => {
        const openLiga = new OpenLiga();
        const aktuelleID = await openLiga.aktuellerSpieltagId(ligaKuerzel);
        setAktuellerSpieltag(aktuelleID);
        return aktuelleID;
    };

    const fetchLigaDaten = async (ligaKuerzel) => {
        
        const openLiga = new OpenLiga();

        // aktuelle Spieltag-ID für die ausgewählte Liga holen
        const spieltagNummer = await fetchAktuellerSpieltag(ligaKuerzel);
        

        const [tabellenData, goalgetterData, spieltagData] = await Promise.all([
            openLiga.ligaTabelle(ligaKuerzel, jahr),
            openLiga.torschuetzen(ligaKuerzel, jahr),
            openLiga.spieltag(ligaKuerzel, jahr, spieltagNummer),
        ]);

        setTabelle(tabellenData);
        setGoalgetter(goalgetterData);
        setSpieltag(spieltagData);
    };

  
    useEffect(() => {
        fetchLigaDaten("bl1");
    }, []);

    const handleLigaAuswahl = (eingabe) => {
        fetchLigaDaten(eingabe);
    };

    return (
        <div className='fussball-container app-container'>
            <SelectLiga onSelect={handleLigaAuswahl} />
             <Spieltag spieltag={spieltag} />
            <LigaTabelle tabelle={tabelle} />
            <Torschuetzen goalgetter={goalgetter} />
           
        </div>
    );
}