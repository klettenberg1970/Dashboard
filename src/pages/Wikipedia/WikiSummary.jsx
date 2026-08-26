export default function WikiSummary({ onSummary, summary }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = e.target.search.value;
        onSummary(searchTerm);
    }
    
    return (
        <div className="wiki-summary-container">
           
            <form onSubmit={handleSubmit}>
                
                <input type="text" id="search" name="search" placeholder="Suche eingeben" />
                <button type="submit">Senden</button>
            </form>

        
            {summary && (
                <div className="wiki-ausgabe-container">
                    <p >{summary.title} : {summary.description}</p>
                   
                    <img 
                        src={summary.originalimage?.source} 
                        alt="Wikipedia" 
                    />
                    <p>{summary.extract}</p>
                    <a 
                        href={summary.content_urls?.desktop?.page} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Zur Wikipedia-Seite
                    </a>
                </div>
            )}
        </div>
    )
}