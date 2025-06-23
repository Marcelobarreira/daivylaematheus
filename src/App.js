import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import CountdownSection from './components/CountdownSection';
import TickerBar from './components/TickerBar';
import TimelineSection from './components/TimelineSection';
import HistoriaSection from './components/HistoriaSection';
import InfoSections from './components/infoSections';
import Presentes from './components/Presentes';
import Informacoes from './components/Informacoes';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CountdownSection />
      <TickerBar />
      <TimelineSection />
      <HistoriaSection />
      <InfoSections />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentes" element={<Presentes />} />
        <Route path="/informacoes" element={<Informacoes />} />
      </Routes>
    </Router>
  );
}

export default App;
