import { useState, useEffect } from 'react';
import KontakteShowDetails from "./kontakteShowDetails";
import "./kontakteShow.css";


const API = import.meta.env.VITE_API_URL;



export default function KontakteShow() {

     
     const [kontakte, setKontakte] = useState([]);
     const [showDetails, setShowDetails] = useState(null); // ← NEU

     useEffect(() => {
    const fetchKontakte = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/kontakte`);
      const data = await response.json();
      setKontakte(data.kontakte);
      
    };
    fetchKontakte();
  }, []);

    return (
        <div className="app-container show-container">
            { kontakte.length > 0 && (  
                <div className=" kontakte-liste">
                    {kontakte.map(kontakt => (
                     <KontakteShowDetails 
                        key={kontakt.id} 
                        kontakt={kontakt}
                        showDetails={showDetails}       
                        setShowDetails={setShowDetails} 
                     />  
                    ))}
                </div>
            )}
        </div>
    );
}