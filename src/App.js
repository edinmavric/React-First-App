import "./App.css";
import Header from "./components/Header/Header";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import Footer from "./components/Footer/Footer";
import Card from "./components/card/card";

const App = () => {
  return (
    <>
      <Header />
      <Counter />
      <Card />
      <form>
        <label>Log In</label>
        <Input />
      </form>
      <Footer />
    </>
  );
};

export default App;
