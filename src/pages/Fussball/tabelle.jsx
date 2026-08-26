// tabelle.jsx
import './CSS/tabellen.css'

export default function LigaTabelle({ tabelle = [] }) {
    return (
        <div className='tabellen-container'>
            <table>
                <thead>
                    <tr>
                        <th>Platz</th>
                        <th>Verein</th>
                        <th>Punkte</th>
                        <th className="hide-mobile">Spiele</th>
                        <th className="hide-mobile">Tore</th>
                        <th className="hide-mobile">Gegentore</th>
                        <th>Tordifferenz</th>
                        <th className="hide-mobile">Siege</th>
                        <th className="hide-mobile">Unentschieden</th>
                        <th className="hide-mobile">Niederlagen</th>
                    </tr>
                </thead>
                <tbody>
                    {tabelle.map((team, index) => (
                        <tr key={index}>
                            <td>{team.Platz}</td>
                            <td>{team.teamName}</td>
                            <td>{team.Punkte}</td>
                            <td className="hide-mobile">{team.Spiele}</td>
                            <td className="hide-mobile">{team.Tore}</td>
                            <td className="hide-mobile">{team.Gegentore}</td>
                            <td>{team.Tordifferenz}</td>
                            <td className="hide-mobile">{team.S}</td>
                            <td className="hide-mobile">{team.U}</td>
                            <td className="hide-mobile">{team.N}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}