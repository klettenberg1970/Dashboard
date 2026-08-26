import { useState } from 'react';

export default function FotoEdit({ selectedFoto, editMode, onToggleEdit ,onDelete,ordner, onVerschieben}) {
  const [verschieben, setVerschieben] = useState(false);
  const[zielOrdner, setZielOrdner] = useState(null);
  
  const erstelleOrdnerArray = [];

for (const ordnerItem of ordner) {
    erstelleOrdnerArray.push({ name: ordnerItem.name, id: ordnerItem.id });
    
    if (ordnerItem.unterordner && ordnerItem.unterordner.length > 0) {
        for (const unterordner of ordnerItem.unterordner) {
            erstelleOrdnerArray.push({ name: unterordner.name, id: unterordner.id });
        }
    }
}

  
  return (
    <div className="foto-edit-container ">   
      <img 
        src={selectedFoto.url} 
        alt={selectedFoto.name} 
        className="foto-edit-img "
        onClick={onToggleEdit}  // ← Klick schließt das vergrößerte Bild
      /> 
      <div className="foto-edit-buttoncontainer">
      
       <button onClick={() => onDelete(selectedFoto)}> 
        Löschen</button>
      <button onClick={() => setVerschieben(!verschieben)}>Verschieben</button>
      </div>
      {verschieben && <div className="verschieben-container">
        
  <select value={zielOrdner} onChange={(e) => onVerschieben(selectedFoto, e.target.value)}>
  {erstelleOrdnerArray.map((ordner) => (
    <option key={ordner.id} value={ordner.id}>
      {ordner.name}
    </option>
  ))}
</select>
      
      </div>  }
    </div>
  );
}