export default function PortfolioCard({ daten }) {
    return (
        <div>
            <div className="portfolio-card">
                {daten.portfolio?.map((item, index) => (
                    <div key={index} className="portfolio-item">
                        <h3>{item.name}</h3>
                        
                        <div className="info-row">
                            <span className="label">Anzahl:</span>
                            <span className="value">{item.anzahl} </span>
                        </div>
                        <hr />
                        <div className="info-row">
                            <span className="label">Kurs:</span>
                            <span className="value">{item.kurs} €</span>
                        </div>
                        <hr />
                        <div className="info-row">
                            <span className="label">Gesamtwert:</span>
                            <span className="value">{item.wertGesamt} €</span>
                        </div>
                        <hr />
                        <div className="info-row">
                            <span className="label">Einstand:</span>
                            <span className="value">{item.einstand} €</span>
                        </div>
                        <hr />
                        <div className="info-row">
                            <span className="label">Differenz:</span>
                            <span className="value">{item.differenz} €</span>
                        </div>
                        <hr />
                        <div className="info-row">
                            <span className="label">Prozent:</span>
                            <span className="value">{item.differenzProzent}%</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="statistik">
    
    <div className="info-row">
        <span className="label">Depotwert </span>
        <span className="value">{daten.statistik?.depotwert} €</span>
    </div>
    <div className="info-row">
        <span className="label">Gewinn / Verlust </span>
        <span className="value">{daten.statistik?.gewinnVerlust} €</span>
    </div>
    <hr />
    <div className="info-row">
        <span className="label">Cash </span>
        <span className="value">{daten.statistik?.cash} €</span>
    </div>
    <hr />
    <div className="info-row">
        <span className="label">Gesamtkapital </span>
        <span className="value">{daten.statistik?.gesamtKapital} €</span>
    </div>
</div>
        </div>
    );
}