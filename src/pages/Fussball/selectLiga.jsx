import Auswahl from '../../components/Dropdown/auswahl';

export default function SelectLiga({ onSelect }) {

    const handleselection = (eingabe) => {
 const kuerzel = ligen[eingabe];
        onSelect(kuerzel);
        
    }

    

    const ligen = {
        'Bundesliga': 'bl1',
        '2. Bundesliga': 'bl2',
        '3. Bundesliga': 'bl3',
        
    }

     const ligenNamen = Object.keys(ligen);

    return (
        <div>
            <Auswahl
                daten={ligenNamen}
                onAuswahl={handleselection}
            />
        </div>
    )
}