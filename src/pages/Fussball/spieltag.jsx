import {spieltagFormat} from "./openligaHelper.js";
import './CSS/spieltag.css'


export default function Spieltag({ spieltag }) {
 
  const spieltagArray = spieltagFormat(spieltag);

  return (
    <div className="spieltag-container">
      {spieltagArray.map((spiel, index) => (
        <pre key={index} className="spieltag-item">
          {spiel}
        </pre>
      ))}
    </div>
  );
}
  
    
