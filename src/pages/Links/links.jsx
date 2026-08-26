import { useState, useEffect } from 'react';

import './links.css';
import './linkformular.css'
import LinksShow from './linksShow';
import LinksAdd from './linksAdd';

const API = import.meta.env.VITE_API_URL;

export default function Links() {
  const [links, setLinks] = useState({});
  const [addsichtbar, setAddSichtbar] = useState(false);
  const [deletesichtbar, setDeleteSichtbar] = useState(false);

  const kategorien = Object.keys(links);

  useEffect(() => {
    const fetchLinks = async () => {
      const response = await fetch(`${API}/api/v1/links`);
      const data = await response.json();
      console.log(data)
     
      setLinks(data);
    };

    fetchLinks();
  }, []);

  const handleAdd = async (name, url, category) => {
    console.log('Neuer Link:', { name, url, category });
    const response = await fetch(`${API}/api/v1/links/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, url, category })
    });

    if (response.ok) {
      // Daten neu laden statt reload()
      const newResponse = await fetch(`${API}/api/v1/links`);
      const newData = await newResponse.json();
      setAddSichtbar(false)
      setLinks(newData);
    }
  }

  const handleDelete = async (name, url, category) => {
    
    const response = await fetch(`${API}/api/v1/links/deleteold`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, url, category })
    });

    if (response.ok) {
      // Daten neu laden statt reload()
      const newResponse = await fetch(`${API}/api/v1/links`);
      const newData = await newResponse.json();
      setDeleteSichtbar(false)
      setLinks(newData);
    }
  }

  return (
    <div className='linkcontainer app-container'>
      <LinksShow
        links={links}
        deletesichtbar={deletesichtbar}
        onDelete={handleDelete}
      />
      <hr />
      <div className='linkbuttons'>
        <button className='btn' onClick={() => setAddSichtbar(!addsichtbar)}>
          {addsichtbar ? 'Zuklappen' : 'Hinzufügen'}
        </button>

        <button 
        className='btn'
        onClick={() => setDeleteSichtbar(!deletesichtbar)}>
          {deletesichtbar ? 'Zuklappen' : 'Löschen'}
        </button>
      </div>

      <hr />

      <LinksAdd
        kategorien={kategorien}
        onAdd={handleAdd}
        addsichtbar={addsichtbar}
      />
    </div>
  )
}