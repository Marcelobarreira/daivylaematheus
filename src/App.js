import './App.css';
import CountdownSection from './components/CountdownSection';
import Header from './components/Header';
import Hero from './components/Hero';
import TickerBar from './components/TickerBar';
import TimelineSection from './components/TimelineSection';
import HistoriaSection from './components/HistoriaSection';
import InfoSections from './components/infoSections';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <CountdownSection />
      <TickerBar />
      <TimelineSection />
      <HistoriaSection />
      <InfoSections />
    </div>
  );
}

export default App;
