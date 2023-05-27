import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/RegistrationForm/RegistrationForm';
import Card from './components/Card/Card';

const App = () => {
  return (
    <>
      <Header title="Edin" li1="Home" li2="About" />
      <div className='Main'>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/other" element={<Form />} />
        </Routes>
      </div>
      <Footer paragraph="Welcome, this is footer" />
    </>
  );
};

export default App;
