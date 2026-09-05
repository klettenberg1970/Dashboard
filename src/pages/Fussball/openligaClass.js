

export class OpenLiga {
  constructor() {
    this.url = 'https://api.openligadb.de';

  }

  async alleLigen() {
    const response = await fetch(`${this.url}/getavailableleagues`);
    const daten = await response.json();
    return daten;
  }

  async ligaTabelle(liga, jahr) {
    const response = await fetch(`${this.url}/getbltable/${liga}/${jahr}`);
    const daten = await response.json();

    const tabelle = daten.map((team, index) => {
      return {
        Platz: index + 1,
        teamName: team.teamName,
        Spiele: team.matches,
        Punkte: team.points,
        Tore: team.goals,
        Gegentore: team.opponentGoals,
        Tordifferenz: team.goalDiff,
        S: team.won,
        U: team.draw,
        N: team.lost,
      };
    });

    return tabelle;
  }

  async torschuetzen(liga, jahr) {
    const response = await fetch(`${this.url}/getgoalgetters/${liga}/${jahr}`);
    const daten = await response.json();
    return daten;
  }

  async spieltag(liga, jahr, spieltagNummer) {
    const response = await fetch(`${this.url}/getmatchdata/${liga}/${jahr}/${spieltagNummer}`);
    const daten = await response.json();
    return daten;
  }

  async aktuellerSpieltagId(liga){
     const response = await fetch(`${this.url}/getcurrentgroup/${liga}`);
    const daten = await response.json();
    
    return daten.groupOrderID;
  }

}
