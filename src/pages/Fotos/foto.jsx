import { useState, useEffect } from 'react';
import FotoOrdnerShow from './fotoOrdnerShow';
import FotoShow from './fotoShow';
import './foto.css';

const API = import.meta.env.VITE_API_URL;

export default function Fotos () {
  const [ordner, setOrdner] = useState([]);
  const [aktuellerOrdner, setAktuellerOrdner] = useState(null);
  const [fotos, setFotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFoto, setSelectedFoto] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchOrdner = async () => {
      setLoading(true);
      const response = await fetch(`${API}/api/fotos/ordner`);
      const data = await response.json();
      setOrdner(data.ordner);
    };
    fetchOrdner();
  }, []);

  const handleOrdnerAuswahl = async (id) => {
    const response = await fetch(`${API}/api/fotos/fotosholen/${id}`);
    const data = await response.json();
    setFotos(data.fotos);
    setAktuellerOrdner(id);
  }

  const handleDelete = async (foto) => {
    const response = await fetch(`${API}/api/fotos/delete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: foto.id })
    });
    const data = await response.json();
    if (data.message === 'Erfolg'){
      setFotos(fotos.filter(f => f.id !== foto.id));
      setEditMode(false);
      setSelectedFoto(null);
      handleOrdnerAuswahl(aktuellerOrdner);
    }
  }

  const handleVerschieben = async (selectedFoto, zielOrdner) => {
    const response = await fetch(`${API}/api/fotos/move`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: selectedFoto.id, zielOrdner: zielOrdner })
    });
    const data = await response.json();
    if (data.message === 'Erfolg'){
      setFotos(fotos.filter(f => f.id !== selectedFoto.id));
      setEditMode(false);
      setSelectedFoto(null);
      handleOrdnerAuswahl(aktuellerOrdner);
    }
  }

  if (loading && ordner.length === 0) {
    return <div className="loading app-container">Lade Fotoordner...</div>;
  }

  return (
    <div className="foto-container app-container">
      <FotoOrdnerShow ordner={ordner} onOrdner={handleOrdnerAuswahl}/>
      <FotoShow
        fotos={fotos}
        onDelete={handleDelete}
        ordner={ordner}
        onVerschieben={handleVerschieben}
        selectedFoto={selectedFoto}
        setSelectedFoto={setSelectedFoto}
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </div>
  )
}