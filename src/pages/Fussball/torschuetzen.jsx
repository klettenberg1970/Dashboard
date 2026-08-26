export default function Torschuetzen({ goalgetter }) {

    return (
        <div className='torschuetzen-container'>
            <h3 style={{ textAlign: 'center' }}>Torschützenliste</h3>
            <hr />

            {goalgetter.slice(0, 10).map((player, index) => (
                <div key={player.goalGetterId} >
                    <p className="spieler">{index + 1}. <span>{player.goalGetterName}</span> <span>{player.goalCount}</span></p>
                    <hr />
                </div>
            ))}

            {/* {<pre>{JSON.stringify(goalgetter, null, 2)}</pre>} */}
        </div>
    );
}