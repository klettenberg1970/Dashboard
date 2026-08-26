

export const spieltagFormat = (spielDaten) => {
  
  let spieltagArray =[]
  // Maximale Länge für linken Team-Namen finden
  let maxLeft = 0;
  for (let match of spielDaten) {
    maxLeft = Math.max(maxLeft, match.team1.teamName.length);
  }
  
  // Maximale Länge für rechten Team-Namen finden
  let maxRight = 0;
  for (let match of spielDaten) {
    maxRight = Math.max(maxRight, match.team2.teamName.length);
  }

  for (let match of spielDaten) {
    let team1 = match.team1.teamName.padEnd(maxLeft);
    let team2 = match.team2.teamName.padEnd(maxRight);
    
    if (match.matchIsFinished) {
      let tore1 = match.matchResults[1].pointsTeam1;
      let tore2 = match.matchResults[1].pointsTeam2;
      let spiel = `${team1} - ${team2}    ${tore1} : ${tore2}`;
      spieltagArray.push(spiel);
    
    } else {
       let spiel = `${team1} - ${team2} `;
       spieltagArray.push(spiel);
    
    }
  
  }
    
   return spieltagArray
}