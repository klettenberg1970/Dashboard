import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/navigation';
import './components/Footer/footer.js';
import './app.css';

import Start from "./pages/Start/start";
import Links from "./pages/Links/links";
import RSS from "./pages/RSS/rss";
import Obsidian from "./pages/Projekte/projekte";
import Kurse from "./pages/Finanzen/kurse";
import Umfragen from "./pages/Umfragen/umfragen";
import Portfolio from "./pages/Portfolio/portfolio";
import Wikipedia from "./pages/Wikipedia/wikipedia";
import KontakteShow from "./pages/Kontakte/KontakteShow/kontakteShow";
import KontakteInput from "./pages/Kontakte/KontakteInput/kontakteInput";
import KontakteEdit from "./pages/Kontakte/KontakteEdit/kontakteEdit";
import Fotos from "./pages/Fotos/foto";
import Fussball from "./pages/Fussball/fussball";

function App() {


  return (
    <div >

      <Router>
        <Navigation />
        <Routes  >

          <Route path="/" element={<Start />} />
          <Route path="/links" element={<Links />} />
          <Route path="/rss" element={<RSS />} />

          <Route path="/projekte" element={<Obsidian />} />
          <Route path="/projekte/:dateiname" element={<Obsidian />} />


         <Route path="/kurse" element={<Kurse />} />
          <Route path="/umfragen" element={<Umfragen />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/wikipedia" element={<Wikipedia />} />
          <Route path="/fotos" element={<Fotos />} />

          <Route path="/kontakteShow" element={<KontakteShow />} />
          <Route path="/kontakteInput" element={<KontakteInput />} />
          <Route path="/kontakteEdit" element={<KontakteEdit />} />
          <Route path ="/fussball"  element ={<Fussball />}/>


        </Routes>
        <webcomponent-footer></webcomponent-footer>
      </Router>
    </div>
  )
}

export default App
