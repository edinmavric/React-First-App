import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import CardJewelery from './components/Card/CardJewerly';
import CardMens from './components/Card/CardMens';
import CardWomens from './components/Card/CardWomens';
import CardElectronics from './components/Card/CardElectronics';

const App = () => {
  return (
    <>
      <Header />
      <div className="Main">
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/mensclothing" element={<CardMens />} />
          <Route path="/womensclothing" element={<CardWomens />} />
          <Route path="/electronics" element={<CardElectronics />} />
          <Route path="/jewelery" element={<CardJewelery />} />
        </Routes>
      </div>
      <Footer paragraph="Welcome, this is footer" />
    </>
  );
};

export default App;
