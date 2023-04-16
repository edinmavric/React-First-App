import './App.css';
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';
// import Input from './components/Input/Input';
import Footer from './components/Footer/Footer';
import Card from './components/card/card';
import Form from './components/registrationForm/registrationForm';

const cardData = [
  {
    id: 1,
    rating: "4.8(227 review's)",
    distance: '19km from center',
    title: 'Hotel Hotel',
    price: '702',
    color: '#dedec8',
  },
  {
    id: 2,
    rating: "3.9(311 review's)",
    distance: '12km from center',
    title: 'Hotel Motel',
    price: '455',
    color: '#debdbd',
  },
  {
    id: 3,
    rating: "4.2(198 review's)",
    distance: '6km from center',
    title: 'Motel Hotel',
    price: '520',
    color: '#dedec8',
  },
];

const App = () => {
  return (
    <>
      <Header title="Edin" li1="About" li2="Counter" />
      <Counter sub="-" add="+" />
      <div className="card-container">
        {cardData.map(card => (
          <Card
            key={card.id}
            rating={card.rating}
            distance={card.distance}
            title={card.title}
            price={card.price}
            color={card.color}
          />
        ))}
        {/* <Card
          rating="4.8(227 review's)"
          distance="19km from center"
          title="Hotel Hotel"
          price="702"
          color="#dedec8"
        />
        <Card
          rating="3.9(311 review's)"
          distance="12km from center"
          title="Hotel Motel"
          price="455"
          color="#debdbd"
        />
        <Card
          rating="4.2(198 review's)"
          distance="6km from center"
          title="Motel Hotel"
          price="520"
          color="#dedec8"
        /> */}
      </div>
      <Form />
      <Footer paragraph="Thanks for using our Counter!" />
    </>
  );
};

export default App;
