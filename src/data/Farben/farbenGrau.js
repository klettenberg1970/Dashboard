const weissTöne = {
  // Reinweiß und fast Weiß
  "Reinweiss": "#FFFFFF",
  "Schneeweiss": "#FDFDFD",
  "Milchweiss": "#FDFBF5",
  "Elfenbein": "#FFFFF0",
  "Perlweiss": "#F9F9F9",

  // Warme Weiß-Töne (leicht gelblich/beige)
  "Vanilleweiss": "#F7F3E9",
  "Cremeweiss": "#F5F5DC",
  "Champagnerweiss": "#F7EED6",
  "Beigeweiss": "#F5F5E8",
  "Warmweiss": "#F4F1E8",

  // Kalte Weiß-Töne (leicht bläulich)
  "Eisweiss": "#F0FFFF",
  "Blauweiss": "#F0F8FF",
  "Frostweiss": "#EFF5F9",
  "Polarweiss": "#F0F4F8",
  "Kühlweiss": "#F2F7FF"
};

const grauTöne = {
  // Sehr helle Grautöne
  "Geistergrau": "#F8F8F8",
  "NebelgrauHell": "#F0F0F0",
  "Silbergrau": "#E8E8E8",
  "Morgengrau": "#E0E0E0",
  "Wolkengrau": "#DCDCDC",

  // Helle Grautöne (neutral)
  "SteingrauHell": "#C0C0C0",
  "MausgrauHell": "#B8B8B8",
  "BetongrauHell": "#A8A8A8",
  "StahlgrauHell": "#9E9E9E",

  // Mittlere Grautöne (neutral)
  "Mittelgrau": "#808080",
  "Schiefergrau": "#707070",
  "Graphitgrau": "#606060",
  "Asphaltgrau": "#505050",

  // Warme Grautöne (leicht braun/beige)
  "Sandgrau": "#D2C4B6",
  "Lehmgrau": "#C4B5A8",
  "Taupegrau": "#B8A898",
  "Kaffeegrau": "#A89888",
  "Braungrau": "#988878",

  // Kalte Grautöne (leicht bläulich)
  "Eisgrau": "#D8E0E8",
  "BlaugrauHell": "#C8D0D8",
  "Stahlblau": "#B8C0CC",
  "Schieferblau": "#A0A8B0",
  "Graphitblau": "#889098",

  // Dunklere Grautöne
  "Anthrazitgrau": "#404040",
  "Rauchgrau": "#383838",
  "Kohlegrau": "#2E2E2E",
  "Tiefgrau": "#242424",
  "Schwarzgrau": "#1A1A1A"
};

const schwarzTöne = {
  // Sehr dunkle Grautöne (nahe Schwarz)
  "Mitternachtsgrau": "#121212",
  "Tiefschwarzgrau": "#0A0A0A",
  "Dunkelgrau": "#080808",

  // Schwarztöne mit Nuancen
  "Reinschwarz": "#000000",
  "Ebony": "#020202",
  "Onyx": "#0F0F0F",
  "Jettenschwarz": "#101010",
  "Lichtschluckend": "#050505",

  // Farbstichige Schwarztöne
  "Warmschwarz": "#1A120B", // leicht braun
  "KaltesSchwarz": "#0B121A", // leicht bläulich
  "Grünschwarz": "#0B150F", // leicht grünlich
  "Rotschwarz": "#150B0B"   // leicht rötlich
};

export function WeissGrauSchwarzArray() {
  let farbArray = [];
  // Weiß-Töne hinzufügen
  for (const element of Object.values(weissTöne)) {
    farbArray.push(element);
  }
  // Grau-Töne hinzufügen
  for (const element of Object.values(grauTöne)) {
    farbArray.push(element);
  }
  // Schwarz-Töne hinzufügen
  for (const element of Object.values(schwarzTöne)) {
    farbArray.push(element);
  }
  return farbArray;
}
