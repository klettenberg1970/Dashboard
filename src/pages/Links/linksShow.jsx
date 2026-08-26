export default function LinksShow({ links, deletesichtbar, onDelete }) {
    return (
        <div className="linkcard">
            {Object.entries(links).map(([kategorie, subLinks]) => (
                <div key={kategorie}>
                    <h3>{kategorie}</h3>

                    {Object.entries(subLinks).map(([name, url]) => (
                        <div key={name}className="linkname">
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                {name}
                            </a>
                            {deletesichtbar && (
                                <button
                                    onClick={() => onDelete(name, url, kategorie)} 
                                >
                                    x
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}