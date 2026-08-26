import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFinanzenDropdownOpen, setIsFinanzenDropdownOpen] = useState(false);
    const [isSonstigesDropdownOpen, setIsSonstigesDropdownOpen] = useState(false);
    const [isKontakteDropdownOpen, setIsKontakteDropdownOpen] = useState(false);
    const location = useLocation();

    // Refs für Dropdown-Container
    const finanzenRef = useRef(null);
    const kontakteRef = useRef(null);
    const sonstigesRef = useRef(null);

    // Funktion, um den Seitennamen aus dem Pfad zu extrahieren
    const getPageName = (path) => {
        switch (path) {
            case '/': return 'Startseite';
            case '/rss': return 'Nachrichten';
            case '/portfolio': return 'Portfolio';
            case '/kurse': return 'Kurse';
            case '/projekte': return 'Projekte';
            case '/umfragen': return 'Wahlumfragen';
            case '/wikipedia': return 'Wikipedia';
            case '/fotos': return 'Fotos';
            case '/fussball' : return 'Fußball';

            case '/kontakteShow': return 'Anzeigen';
            case '/kontakteInput': return 'Erstellen';
            case '/kontakteEdit': return 'Bearbeiten';

            case '/links': return 'Links';
            
            default: return '';
        }
    };

    // Schließe alle Dropdowns
    const closeAllDropdowns = () => {
        setIsFinanzenDropdownOpen(false);
        setIsKontakteDropdownOpen(false);
        setIsSonstigesDropdownOpen(false);
    };

    // Schließe Dropdowns wenn außerhalb geklickt wird (nur Desktop)
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Prüfen ob der Klick außerhalb aller Dropdowns war
            const isFinanzenClick = finanzenRef.current?.contains(event.target);
            const isKontakteClick = kontakteRef.current?.contains(event.target);
            const isSonstigesClick = sonstigesRef.current?.contains(event.target);

            // Wenn außerhalb aller Dropdowns geklickt wurde, alle schließen
            if (!isFinanzenClick && !isKontakteClick && !isSonstigesClick) {
                closeAllDropdowns();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Menü schließen wenn geöffnet
        if (isOpen) {
            closeAllDropdowns();
        }
    };

    const toggleFinanzenDropdown = (e) => {
        e.stopPropagation();
        // Schließe andere Dropdowns
        setIsKontakteDropdownOpen(false);
        setIsSonstigesDropdownOpen(false);
        // Öffne/schließe Finanzen
        setIsFinanzenDropdownOpen(!isFinanzenDropdownOpen);
    };

    const toggleKontakteDropdown = (e) => {
        e.stopPropagation();
        // Schließe andere Dropdowns
        setIsFinanzenDropdownOpen(false);
        setIsSonstigesDropdownOpen(false);
        // Öffne/schließe Kontakte
        setIsKontakteDropdownOpen(!isKontakteDropdownOpen);
    };

    const toggleSonstigesDropdown = (e) => {
        e.stopPropagation();
        // Schließe andere Dropdowns
        setIsFinanzenDropdownOpen(false);
        setIsKontakteDropdownOpen(false);
        // Öffne/schließe Sonstiges
        setIsSonstigesDropdownOpen(!isSonstigesDropdownOpen);
    };

    return (
        <nav className='navigation'>
            {/* Hamburger Button */}
            <button
                className={isOpen ? 'hamburger active' : 'hamburger'}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Titel der aktuellen Seite (nur mobil sichtbar, in der Nav-Leiste) */}
            <div className="mobile-nav-title">
                {getPageName(location.pathname)}
            </div>

            {/* Navigation Links */}
            <div className={isOpen ? 'nav-menu active' : 'nav-menu'}>

                <Link to="/" onClick={() => { setIsOpen(false); closeAllDropdowns(); }}>Startseite</Link>
                <Link to="/rss" onClick={() => { setIsOpen(false); closeAllDropdowns(); }}>Nachrichten</Link>

                {/* Dropdown für "Finanzen" */}
                <div className="dropdown" ref={finanzenRef}>
                    <button
                        className="dropdown-button"
                        onClick={toggleFinanzenDropdown}
                    >
                        Finanzen
                    </button>
                    <div className={`dropdown-content ${isFinanzenDropdownOpen ? 'active' : ''}`}>
                        <Link to="/portfolio" onClick={() => { setIsOpen(false); setIsFinanzenDropdownOpen(false); closeAllDropdowns(); }}>Portfolio</Link>
                        <Link to="/kurse" onClick={() => { setIsOpen(false); setIsFinanzenDropdownOpen(false); closeAllDropdowns(); }}>Kurse</Link>
                    </div>
                </div>

                {/* Dropdown für "Kontakte" */}
                <div className="dropdown" ref={kontakteRef}>
                    <button
                        className="dropdown-button"
                        onClick={toggleKontakteDropdown}
                    >
                        Kontakte
                    </button>
                    <div className={`dropdown-content ${isKontakteDropdownOpen ? 'active' : ''}`}>

                        <Link to="/kontakteShow" onClick={() => { setIsOpen(false); setIsKontakteDropdownOpen(false); closeAllDropdowns(); }}> Anzeigen</Link>
                        <Link to="/kontakteInput" onClick={() => { setIsOpen(false); setIsKontakteDropdownOpen(false); closeAllDropdowns(); }}>Erstellen</Link>
                        <Link to="/kontakteEdit" onClick={() => { setIsOpen(false); setIsKontakteDropdownOpen(false); closeAllDropdowns(); }}>Bearbeiten</Link>
                    </div>
                </div>

                <Link to="/projekte" onClick={() => { setIsOpen(false); closeAllDropdowns(); }}>Projekte</Link>
                <Link to="/links" onClick={() => { setIsOpen(false); closeAllDropdowns(); }}>Links</Link>

                {/* Dropdown für "Sonstiges" */}
                <div className="dropdown" ref={sonstigesRef}>
                    <button
                        className="dropdown-button"
                        onClick={toggleSonstigesDropdown}
                    >
                        Sonstiges
                    </button>
                    <div className={`dropdown-content ${isSonstigesDropdownOpen ? 'active' : ''}`}>
                       
                        <Link to="/umfragen" onClick={() => { setIsOpen(false); setIsSonstigesDropdownOpen(false); closeAllDropdowns(); }}>Wahlumfragen</Link>
                        <Link to="/wikipedia" onClick={() => { setIsOpen(false); setIsSonstigesDropdownOpen(false); closeAllDropdowns(); }}>Wikipedia</Link>
                        <Link to="/fotos" onClick={() => { setIsOpen(false); setIsSonstigesDropdownOpen(false); closeAllDropdowns(); }}>Fotos</Link>
                         <Link to="/fussball" onClick={() => { setIsOpen(false); setIsSonstigesDropdownOpen(false); closeAllDropdowns(); }}>Fußball</Link>
                    </div>
                </div>
            </div>

            {/* Overlay zum Schließen */}
            {isOpen && (
                <div className="overlay" onClick={() => { setIsOpen(false); closeAllDropdowns(); }}></div>
            )}
        </nav>
    );
}