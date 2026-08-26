import Auswahl from '../../components/Dropdown/auswahl';

export default function FotoOrdnerShow({ ordner, onOrdner }) {

    const erstelleOrdnerArray = [];

    for (const ordnerItem of ordner) {
        erstelleOrdnerArray.push(ordnerItem.name);
        
        if (ordnerItem.unterordner && ordnerItem.unterordner.length > 0) {
            for (const unterordner of ordnerItem.unterordner) {
                erstelleOrdnerArray.push(unterordner.name);
            }
        }
    }

    const handleselection = (selectedName) => {
        const selectedOrdner = ordner.find(o => o.name === selectedName) || 
                               ordner.flatMap(o => o.unterordner || []).find(u => u.name === selectedName);
        if (selectedOrdner) {
            onOrdner(selectedOrdner.id);
        }
    };

   

    return (
        <div>
            <Auswahl
                daten={erstelleOrdnerArray}
                onAuswahl={handleselection}
            />   
        </div>
    );
}