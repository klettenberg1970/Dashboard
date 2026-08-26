import { useState } from 'react';

export default function KontakteShowDetails({ kontakt, showDetails, setShowDetails }) {

    return (
        <div className="details-container">
            <button key={kontakt.id}
                onClick={() => setShowDetails(showDetails === kontakt.id ? null : kontakt.id)}
            > {kontakt.vorname} {kontakt.nachname}</button>

            {showDetails === kontakt.id && (
                <div className="details">

                    <div className='item'>
                        <p><strong>ID:</strong> {kontakt.id}</p>
                    </div>


                    <div className='item'>
                        <p><strong>Name:</strong> {kontakt.vorname}  {kontakt.nachname}</p>

                    </div>

                    <div className='item'>
                        <p><strong>Adresse:</strong> {kontakt.strasse}  {kontakt.hausnummer} /  {kontakt.postleitzahl}  {kontakt.wohnort}  </p>

                    </div>

                    <div className='item'>
                        <p><strong>Geburtsdatum :</strong> {kontakt.geburtstag}{kontakt.geburtsjahr}</p>
                    </div>

                    <div className='item'>

                        <p><strong>Herkunft:</strong> {kontakt.herkunft}</p>
                    </div>

                    <div className='item'>
                        <p><strong>Telefonnummer:</strong> {kontakt.telefonnummer}    </p>

                    </div>

                    <div className='item'>
                        <p><strong>E-Mail:</strong> {kontakt.email}</p>

                    </div>

                    <div className='item'>
                        <p><strong>Interessen:</strong> {kontakt.interessen}</p>
                    </div>
                    <div className='item'>
                        <p><strong>Bemerkungen:</strong> {kontakt.bemerkungen}</p>

                    </div>

                </div>
            )}
        </div>
    );
}