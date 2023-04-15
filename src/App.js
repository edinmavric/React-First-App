import './App.css';
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';
import Input from './components/Input/Input';
import Footer from './components/Footer/Footer';
import Card from './components/card/card';

const App = () => {
  return (
    <>
      <Header title="Edin" li1="About" li2="Counter" />
      <Counter sub="-" add="+" />
      <div className="card-container">
        <Card
          rating="4.8(227 review's)"
          distance="19km from center"
          title="Hotel Hotel"
          price="702"
        />
        <Card
          rating="3.9(311 review's)"
          distance="12km from center"
          title="Hotel Motel"
          price="455"
        />
        <Card
          rating="4.2(198 review's)"
          distance="6km from center"
          title="Motel Hotel"
          price="520"
        />
      </div>
      <form>
        <label>Log In</label>
        <Input placeholder="Some text" />
      </form>
      <Footer paragraph="Thanks for using our Counter!" />
    </>
  );
};

export default App;
