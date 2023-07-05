import { useState } from 'react';
import './quiz.css';

const Quiz = () => {
  const questions = [
    {
      questionText: '1. Na sta se odnosi termin kreiranje nivoa',
      answerOptions: [
        {
          answerText: 'Pisanje dramskog dela koje se sastoji od vise cinova',
          isCorrect: false,
        },
        { answerText: 'Definisanje stambenog prostora', isCorrect: false },
        { answerText: 'Projektovanje visespratnog objekta', isCorrect: false },
        {
          answerText: 'Definisanje interaktivnog prostora video-igre',
          isCorrect: true,
        },
      ],
    },
    {
      questionText: '2. Italijanski izraz - dolce vita - znaci',
      answerOptions: [
        { answerText: 'Sladoled', isCorrect: false },
        { answerText: 'Dobro vino', isCorrect: false },
        { answerText: 'Sladak zivot', isCorrect: true },
        { answerText: 'Radost zivota', isCorrect: false },
      ],
    },
    {
      questionText:
        '3. Poslovna funkcija koja uz najmanje troškove, obezbeđuje prostorno i vremensko pozicioniranje resursa u podršci poslovnih ciljeva preduzeća, naziva se',
      answerOptions: [
        { answerText: 'Logistika', isCorrect: true },
        { answerText: 'Upravljanje kvalitetom', isCorrect: false },
        { answerText: 'Odrzivi razvoj', isCorrect: false },
        { answerText: 'Nabavka', isCorrect: false },
      ],
    },
    {
      questionText: '4. Koja ptica prema Mitu donosi bebe',
      answerOptions: [
        { answerText: 'Golub', isCorrect: false },
        { answerText: 'Roda', isCorrect: true },
        { answerText: 'Vrabac', isCorrect: false },
        { answerText: 'Vrana', isCorrect: false },
      ],
    },
    {
      questionText: '5. Na koliko polja se igra čuvena igra "IKS-OKS"',
      answerOptions: [
        { answerText: '3', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '9', isCorrect: true },
        { answerText: '12', isCorrect: false },
      ],
    },
    {
      questionText: '6. Koji grad se ranije zvao Konstantinopolj',
      answerOptions: [
        { answerText: 'Istanbul', isCorrect: true },
        { answerText: 'Ankara', isCorrect: false },
        { answerText: 'Ederne', isCorrect: false },
        { answerText: 'Smirna', isCorrect: false },
      ],
    },
    {
      questionText: '7. Glavni grad Svedske je',
      answerOptions: [
        { answerText: 'Oslo', isCorrect: false },
        { answerText: 'Stokholm', isCorrect: true },
        { answerText: 'Amsterdam', isCorrect: false },
        { answerText: 'Edinburg', isCorrect: false },
      ],
    },
    {
      questionText: '8. Kojoj zemlji pripadaju Andamanska ostrva',
      answerOptions: [
        { answerText: 'Pakistanu', isCorrect: false },
        { answerText: 'Indiji', isCorrect: true },
        { answerText: 'Spaniji', isCorrect: false },
        { answerText: 'Meksiku', isCorrect: false },
      ],
    },
    {
      questionText: '9. Jedno od svetskih čuda “ESKORIJAL” nalazi se u',
      answerOptions: [
        { answerText: 'Italiji', isCorrect: false },
        { answerText: 'Meksiku', isCorrect: false },
        { answerText: 'Francuskoj', isCorrect: false },
        { answerText: 'Spaniji', isCorrect: true },
      ],
    },
    {
      questionText: '10. Koje je pravo ime Diznijevog junaka Paje Patka',
      answerOptions: [
        { answerText: 'Dejvid', isCorrect: false },
        { answerText: 'David', isCorrect: false },
        { answerText: 'Donald', isCorrect: true },
        { answerText: 'Dezmond', isCorrect: false },
      ],
    },
    {
      questionText: '11. Koji hemijski element ima oznaku "H"',
      answerOptions: [
        { answerText: 'Vodonik', isCorrect: true },
        { answerText: 'Kiseonik', isCorrect: false },
        { answerText: 'Helijum', isCorrect: false },
        { answerText: 'Berilijum', isCorrect: false },
      ],
    },
    {
      questionText: '12. Najveći kopneni sisar je',
      answerOptions: [
        { answerText: 'Covek', isCorrect: false },
        { answerText: 'Tigar', isCorrect: false },
        { answerText: 'Lav', isCorrect: false },
        { answerText: 'Slon', isCorrect: true },
      ],
    },
    {
      questionText: '13. Koje su tri osnovne rase ljudi',
      answerOptions: [
        { answerText: 'Bela, crna, zuta', isCorrect: true },
        { answerText: 'Bela, narandzasta, braon', isCorrect: false },
        { answerText: 'Crna, zelena, zuta', isCorrect: false },
        { answerText: 'Bela, braon, plava', isCorrect: false },
      ],
    },
    {
      questionText: '14. Koja je najmanja planeta suncevog sistema',
      answerOptions: [
        { answerText: 'Zemlja', isCorrect: false },
        { answerText: 'Mars', isCorrect: false },
        { answerText: 'Merkur', isCorrect: true },
        { answerText: 'Venera', isCorrect: false },
      ],
    },
    {
      questionText: '15. A koja je najveca planeta suncevog sistema',
      answerOptions: [
        { answerText: 'Saturn', isCorrect: false },
        { answerText: 'Jupiter', isCorrect: true },
        { answerText: 'Neptun', isCorrect: false },
        { answerText: 'Uran', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);
  const [showEnd, setShowEnd] = useState(false);

  const handleAnswerClick = isCorrect => {
    if (isCorrect) {
      setRightAnswer(rightAnswer + 1);
    } else {
      setRightAnswer(rightAnswer + 0);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowEnd(true);
    }
  };

  const percent = (rightAnswer / (currentQuestion + 1)) * 100;

  return (
    <div className="Quiz-Container">
      {showEnd ? (
        <div className="Quiz-End">
          <p>Kviz uspesno zavrsen!</p>
          <p>
            {rightAnswer} tacnih odgovora od ukupno {currentQuestion + 1}{' '}
            odgovora!
          </p>
          <p>Prosek tacnih odgovora: {percent.toFixed(2)}%</p>
        </div>
      ) : currentQuestion < questions.length ? (
        <div className="Quiz-Question">
          <span>{questions[currentQuestion].questionText}?</span>
          <div className="Buttons">
            {questions[currentQuestion].answerOptions.map((ans, index) => (
              <button
                className={ans.isCorrect ? 'green' : 'red'}
                key={index}
                onClick={() => handleAnswerClick(ans.isCorrect)}
              >
                {ans.answerText}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Quiz;
