import "./App.css";
import Header from "./components/Header/Header";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import Footer from "./components/Footer/Footer";
import Card from "./components/card/card";

const App = () => {
  return (
    <div>
      <Header />
      <Counter />
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
      <form>
        <label>Log In</label>
        <Input />
      </form>
      <Footer />
    </div>
  );
};

export default App;
