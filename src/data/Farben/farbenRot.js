// Farben.js - Rottöne analog zur Blau-Datei

export function Farbarray() {
  let farbarray = []
  for (const element of Object.values(kaltesRot))
    farbarray.push(element)
  return farbarray
}

// Warme Rottöne (gelbstichig / orangerot)
const warmesRot = {
  "Koralle": "#FF7F50",
  "Lachsrot": "#FF6B4A",
  "Tomatenrot": "#FF6347",
  "OrangeRot": "#FF4500",
  "Zinnoberrot": "#E63E00",
  "Backsteinrot": "#CC3300",
  "Herbstrot": "#B22B00"
};

// Kühle Rottöne (blaustichig / purpurrot)
const kaltesRot = {
  // Sehr helle Töne
  "Eisrot": "#FFF5F5",
  "Winterrose": "#FFEBEB",
  "Nebelrot": "#FFE0E0",
  "Glazialrot": "#FFCCCC",
  "PolarlichtRot": "#FFB8B8",

  // Mittlere helle Töne
  "Wolkenrot": "#FFA6A6",
  "Pastellrot": "#FF8585",
  "Pfirsichblüte": "#FF6666",
  "RosaRot": "#FF4D4D",
  "Erdbeerrot": "#FF3333",

  // Mittlere intensive Töne
  "Kirschrot": "#E60000",
  "Feuerrot": "#CC0000",
  "Signalrot": "#B30000",
  "Karminrot": "#990000",
  "Rubinrot": "#800000",

  // Dunklere Töne
  "Weinrot": "#660000",
  "Burgunderrot": "#550000",
  "Blutrot": "#440000",
  "Granatrot": "#330000",
  "Mahagoni": "#220000",

  // Sehr dunkle Töne
  "Nachtrot": "#1A0000",
  "Obsidianrot": "#110000",
  "Schwarzrot": "#0A0000"
};

// Monochromatische Rottöne
const rotMonochrom = {
  "Rot100": "#FFEBEE",
  "Rot200": "#FFCDD2",
  "Rot300": "#EF9A9A",
  "Rot400": "#E57373",
  "Rot500": "#EF5350",
  "Rot600": "#E53935",
  "Rot700": "#D32F2F",
  "Rot800": "#C62828",
  "Rot900": "#B71C1C"
};

// Desaturierte Rottöne (graustichig / gedämpft)
const rotDesaturiert = {
  "Roségrau": "#F2E6E6",
  "Altrosa": "#D9C2C2",
  "Staubrot": "#BF9E9E",
  "Mauve": "#A67D7D",
  "Ziegelgrau": "#8C6060",
  "Bordeauxgrau": "#734D4D"
};

// Violettstichige Rottöne (Purpur/Magenta)
const violettRot = {
  "Lavendelrosa": "#FFE6F5",
  "MagentaHell": "#FFCCEE",
  "Flamingo": "#FF99DD",
  "Orchidee": "#E666C4",
  "Brombeerrot": "#B33399"
};

// Pastellrote Töne
const rotPastell = {
  "Wolkenrosa": "#FFF0F0",
  "Babyrosa": "#FFE4E4",
  "Puderrosa": "#FFD4D4",
  "Sanftrot": "#FFC4C4",
  "Zartrot": "#FFB4B4"
};

// Erdtöne Rottöne (natürliche Pigmente)
const erdRot = {
  "TerrakottaHell": "#E8B4A0",
  "Ockerrot": "#CC8C73",
  "Tonrot": "#B36B53",
  "Rostrot": "#994F38",
  "Eisenoxid": "#803D2B"
};

// Maritime Rottöne (an Sonnenuntergänge / Küstenvegetation angelehnt)
const maritimRot = {
  "Muschelrosa": "#FFEFEF",
  "Korallenriff": "#FFCCCC",
  "Sonnenuntergang": "#E69999",
  "Flutrot": "#CC7373",
  "Hafenrot": "#A64D4D"
};