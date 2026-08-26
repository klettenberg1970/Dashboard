import FotoEdit from "./fotoEdit";

export default function FotoShow({ fotos, onDelete, ordner, onVerschieben, selectedFoto, setSelectedFoto, editMode, setEditMode }) {

  const handleFotoClick = (foto) => {
    setSelectedFoto(foto);
    setEditMode(true);
  };

  const handleCloseEdit = () => {
    setEditMode(false);
    setSelectedFoto(null);
  };

  return (
    <div className="show-container">
      {fotos.map(foto => (
        <div key={foto.id}>
          <img
            src={foto.url}
            alt={foto.name}
            className="foto-img"
            onClick={() => handleFotoClick(foto)}
          />
          {selectedFoto?.id === foto.id && editMode &&
            <FotoEdit
              selectedFoto={selectedFoto}
              editMode={editMode}
              onToggleEdit={handleCloseEdit}
              onDelete={onDelete}
              ordner={ordner}
              onVerschieben={onVerschieben}
            />
          }
        </div>
      ))}
    </div>
  );
}