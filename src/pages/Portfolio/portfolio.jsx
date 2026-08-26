// pages/Portfolio/portfolio.jsx
import { useEffect, useState } from "react";
import PasswortAbfrage from "../../components/Passwort/passwortAbfrage";
import PortfolioCard from "./portfolioCard";
import PortfolioEdit from "./portfolioEdit";
import PortfolioCanvas from "./portfolioCanvas";
import './portfolio.css';

const API = import.meta.env.VITE_API_URL;

export default function Portfolio() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("portfolio_token"));
    const [portfolio, setPortfolio] = useState({});
    const [loading, setLoading] = useState(false);
    const [editsichtbar, setEditSichtbar] = useState(false);

    // pages/Portfolio/portfolio.jsx

    const fetchPortfolio = async () => {
        const token = localStorage.getItem("portfolio_token"); // Token holen

        setLoading(true);
        const response = await fetch(`${API}/api/v1/portfolio`, {
            headers: {
                'Authorization': `Bearer ${token}` // <--- DAS IST ENTSCHEIDEND
            }
        });

        if (response.status === 401) {
            // Token abgelaufen!
            localStorage.removeItem("portfolio_token");
            setIsAuthenticated(false);
            return;
        }

        const data = await response.json();
        setPortfolio(data);
        setLoading(false);
    };

    // 2. Initiales Laden
    useEffect(() => {
        if (isAuthenticated) {
            fetchPortfolio();
        }
    }, [isAuthenticated]);

  // pages/Portfolio/portfolio.jsx - handleSave Funktion anpassen
const handleSave = async ({ name, anzahl, einstand }) => {
    let token = localStorage.getItem("portfolio_token");
    
    let response = await fetch(`${API}/api/v1/portfolio/edit`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, anzahl, einstand }),
    });

    // Wenn Token-Fehler, aber Token existiert → einen Moment warten und wiederholen
    if ((response.status === 401 || response.status === 403) && token) {
        await new Promise(resolve => setTimeout(resolve, 100));
        
        response = await fetch(`${API}/api/v1/portfolio/edit`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ name, anzahl, einstand }),
        });
    }

    if (response.ok) {
        setEditSichtbar(false);
        await fetchPortfolio();
    } else if (response.status === 401 || response.status === 403) {
        localStorage.removeItem("portfolio_token");
        setIsAuthenticated(false);
    }
};

    if (!isAuthenticated) {
        return <PasswortAbfrage onAbfrage={() => setIsAuthenticated(true)} />;
    }

    if (loading && !portfolio.portfolio) {
        return <div className="loading app-container">Lade Portfoliodaten...</div>;
    }

    return (
        <div className="app-container">
            <PortfolioCard daten={portfolio} />

            <PortfolioCanvas daten={portfolio} />

            <button className='portfolio-edit-button'
                onClick={() => setEditSichtbar(!editsichtbar)}>
                {editsichtbar ? 'Zuklappen' : 'Bearbeiten'}
            </button>

            <PortfolioEdit
                daten={portfolio}
                editsichtbar={editsichtbar}
                onSave={handleSave}
            />



        </div>
    );
}