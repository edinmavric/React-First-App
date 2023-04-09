import "./App.css";
import Header from "./components/Header/Header";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Counter />
      <form>
        <label>Log In</label>
        <Input />
      </form>
      <Footer />
    </>
  );
};

export default App;
