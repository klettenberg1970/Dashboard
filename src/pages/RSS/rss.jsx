import { useState, useEffect } from 'react';
import Auswahl from '../../components/Dropdown/auswahl';
import Feedsausgeben from './feedsausgeben';

import './rss.css';

const API = import.meta.env.VITE_API_URL;

export default function RSS() {
  const [feedsnamen, setFeedsnamen] = useState([]);
   const [feeds, setFeeds] = useState({});

useEffect(() => {
  const fetchRSS = async () => {
    const response = await fetch(`${API}/api/v1/rss/namen`);
    const data = await response.json();
    console.log(data) 
    
   
    setFeedsnamen(data.map(feed => feed.name) || []); 
           
  };
  fetchRSS();
}, []);



const handleselection = async (name) => {

  const response = await fetch(`${API}/api/v1/rss/ausgeben`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
  const data = await response.json();
  
  // NEU: 'feed' könnte undefined sein, wenn kein Feed gefunden wird
  setFeeds(data.feed?.items || []); // ✅ Sicherer Zugriff mit Optional Chaining
};

  return (
    <div className='rsscontainer app-container'>
      
      <Auswahl
        daten={feedsnamen}
        onAuswahl={handleselection}
      />

      <Feedsausgeben 
      feeds ={feeds}/>


    </div>
  )
}