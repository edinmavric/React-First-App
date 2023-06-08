import './App.css';
import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Header/Header';
import Exercise from './components/Exercise/Exercise';
import LabelBottomNavigation from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <div className="Main">
        <Routes>
          <Route path="/" element={<Exercise />} />
        </Routes>
      </div>
      <LabelBottomNavigation />
    </>
  );
};

export default App;
