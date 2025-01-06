import React, { useState } from 'react';
import CatStage from './CatStage';
import './styles.css';

const App = () => {
  const [step, setStep] = useState(0);

  const apologies = [
    { id: 1, text: 'Вибач, що не був уважним і змушував тебе почуватися самотньою.' },
    { id: 2, text: 'Вибач, що здавався байдужим і не проявляв турботу так, як ти заслуговуєш.' },
    { id: 3, text: 'Вибач, що часто замовкав і не питав, як ти почуваєшся насправді.' },
    { id: 4, text: 'Вибач, що я був егоїстом і не помічав твоїх справжніх почуттів.' },
    { id: 5, text: 'Вибач, що ти була чоловіком у наших стосунках, а я не став для тебе підтримкою.' },
    { id: 6, text: 'Вибач, що ти відчувала себе приниженою через мою поведінку.' },
    { id: 7, text: 'Вибач за всі слова і дії, які змусили тебе сумніватися в мені.' },
    { id: 8, text: 'Вибач, що я не добивався тебе і не показував, наскільки ти важлива.' },
    { id: 9, text: 'Вибач за все, що змусило тебе відчувати розчарування.' },
    { id: 10, text: 'Будь ласка, дай мені шанс довести своїми діями, наскільки ти для мене важлива.' },
  ];

  const handleNext = () => {
    if (step < apologies.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="app">
      <h1>Котик просить вибачення</h1>
      <CatStage apology={apologies[step]} />
      <button className="next-button" onClick={handleNext} disabled={step === apologies.length - 1}>
        {step === apologies.length - 1 ? 'Кінець' : 'Наступне вибачення'}
      </button>
    </div>
  );
};

export default App;