// Farben.js - Grüntöne analog zur Blau-Datei

export function Farbarray() {
  let farbarray = []
  for (const element of Object.values(kaltesGruen))
    farbarray.push(element)
  return farbarray
}

// Warme Grüntöne (gelbstichig)
const warmesGruen = {
  "Frühlingsgrün": "#D4FF66",
  "Limettengrün": "#B8E64B",
  "OlivgrünHell": "#A6CC33",
  "Gelbgrün": "#8CB31F",
  "Moosgrün": "#6B8C14",
  "Laubgrün": "#4D6609",
  "Herbstgrün": "#3A4D03"
};

// Kühle Grüntöne (blaustichig)
const kaltesGruen = {
  // Sehr helle Töne
  "Eisgrün": "#F2FFFC",
  "Wintergrün": "#E6FFF5",
  "Nebelgrün": "#DBFFEF",
  "Glazialgrün": "#CCFFE6",
  "Polarflora": "#B8FFDC",

  // Mittlere helle Töne
  "Mintcreme": "#A6FFD0",
  "Frischgrün": "#85E6B3",
  "Minzgrün": "#66CC99",
  "Seegras": "#4DB380",
  "Pfefferminz": "#339966",

  // Mittlere intensive Töne
  "SmaragdHell": "#1A8C5A",
  "Waldgrün": "#007A4D",
  "Fichtengrün": "#00663D",
  "Kieferngrün": "#005C36",
  "Tannengrün": "#004D2B",

  // Dunklere Töne
  "Dschungelgrün": "#00401F",
  "Tiefwald": "#003518",
  "Moorgrün": "#002B12",
  "Nachtgrün": "#00200C",
  "Schwarzgrün": "#001407"
};

// Monochromatische Grüntöne
const gruenMonochrom = {
  "Grün100": "#E8F5E9",
  "Grün200": "#C8E6C9",
  "Grün300": "#A5D6A7",
  "Grün400": "#81C784",
  "Grün500": "#4CAF50",
  "Grün600": "#43A047",
  "Grün700": "#388E3C",
  "Grün800": "#2E7D32",
  "Grün900": "#1B5E20"
};

// Desaturierte Grüntöne (graustichig)
const gruenDesaturiert = {
  "SalbeigrünHell": "#E3EAE5",
  "Salbeigrün": "#C2CFC5",
  "Mäusegrün": "#9DB2A3",
  "Steingrün": "#7C9182",
  "Olivgrau": "#5F7568",
  "Tarnfarbe": "#40544A"
};

// Blaustichige Grüntöne (Teal/Türkis)
const blauGruen = {
  "TürkisgrünHell": "#CCFFEE",
  "Seefoam": "#99FFDD",
  "Patina": "#66E6BF",
  "Kupfergrün": "#33CCA1",
  "Tiefseegrün": "#00997A"
};

// Pastellgrüntöne
const gruenPastell = {
  "Wiesengrün": "#EBFAE8",
  "Blassgrün": "#DCF5DA",
  "Pudergrün": "#C2E0C0",
  "Sanftgrün": "#A8CCA8",
  "Zartgrün": "#8FB88F"
};

// Erdtöne Grüntöne (gedämpft, natürliche Pigmente)
const erdGruen = {
  "Moosgrau": "#A8B8A0",
  "Schilfgrün": "#8C9A83",
  "Olivbraun": "#6E7A66",
  "Grünerde": "#55604D",
  "Dunkle Patina": "#3F4738"
};

// Maritime Grüntöne (an Küstenvegetation angelehnt)
const maritimGruen = {
  "Algenhell": "#E2FFE6",
  "Küstenwald": "#B3E6B8",
  "Salzwiesen": "#7AC87A",
  "Meergras": "#4DA64D",
  "Tiefseepflanze": "#266626"
};