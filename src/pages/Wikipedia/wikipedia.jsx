import { useState } from "react"
import WikiSummary from "./WikiSummary"
import "./WikiSummary.css"


const API = import.meta.env.VITE_API_URL;

export default function Wikipedia() {
    const [summary, setSummary] = useState(null);

    const handleSummary = async (searchTerm) => {
    
const response = await fetch(`${API}/api/wikipedia?search=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
        setSummary(data);
         
        // nutze console.log(data), wenn du das Ergebnis sofort sehen willst.
    };

    return (
        <div className="app-container">
            <WikiSummary onSummary={handleSummary} summary={summary} />
            
         
        </div>
    )
}