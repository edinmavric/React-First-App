import './App.css';
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import Form from './components/RegistrationForm/RegistrationForm';
import { useState } from 'react';

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
  {
    id: 4,
    rating: "4.7(398 review's)",
    distance: '3km from center',
    title: 'Motel Motel',
    price: '1270',
    color: '#debdbd',
  },
  {
    id: 5,
    rating: "4.3(118 review's)",
    distance: '14km from center',
    title: 'Hostel Hotel',
    price: '470',
    color: '#dedec8',
  },
  {
    id: 6,
    rating: "3.7(98 review's)",
    distance: '16km from center',
    title: 'Motel Hostel',
    price: '430',
    color: '#debdbd',
  },
];

const App = () => {
  const [show, setShow] = useState(false);
  const toggleShowButtonHandler = () => {
    setShow(prevState => !prevState);
  };
  return (
    <>
      <Header title="Edin" li1="About" li2="Counter" />
      <Counter sub="-" add="+" reset="Reset" />
      <div className="card-container">
        {cardData.map(card => {
          if (card.id >= 4) {
            return;
          }
          return (
            <Card
              key={card.id}
              rating={card.rating}
              distance={card.distance}
              title={card.title}
              price={card.price}
              color={card.color}
            />
          );
        })}
      </div>
      <div className="cards-show-hide">
        {show &&
          cardData.map(card => {
            if (card.id > 3) {
              return (
                <Card
                  key={card.id}
                  rating={card.rating}
                  distance={card.distance}
                  title={card.title}
                  price={card.price}
                  color={card.color}
                />
              );
            }
          })}
      </div>
      <div className="button-container">
        <button className="show-hide-btn" onClick={toggleShowButtonHandler}>
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
      <Form />
      <Footer paragraph="Thanks for using our Counter!" />
    </>
  );
};

export default App;
