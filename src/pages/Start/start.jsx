import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/spinner"; 
import UnderConstruction from "../../components/underconstruction";

// VITE Version der env-Variable
const API = import.meta.env.VITE_API_URL;
const baustelle = false;

export default function Start() {

   if (baustelle) {
        return <UnderConstruction />;
    }
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  // Die Funktion zum Datenholen
  const getdata = async () => {
    try {
      setLoading(true);

    // // 🔧 NUR ZUM TESTEN: Künstlicher Delay von 3 Sekunden
    //   await new Promise(resolve => setTimeout(resolve, 3000));

      const response = await fetch(`${API}/api/start`);
      const result = await response.json();
      setData(result.start);
    } catch (error) {
      console.error("Fehler beim Laden:", error);
      setData("Fehler beim Laden der Daten.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  // 1. Lade-Zustand (Spinner)
  if (loading) {
    return (
      <div className="app-container">
        <Spinner />
      </div>
    );
  }

  // 2. Normaler Zustand (Wenn Daten da sind)
  return (
    <div className="app-container">
      <h1
        style={{
          textAlign: "center",
          marginTop: "30vh",
          color: "white",
        }}
      >
        {data}
      </h1>
    </div>
  );
}