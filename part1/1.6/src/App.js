import { useState } from 'react';
import Header from './Header';
import Button from './Button';
import Statistics from './Statistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (event) => {
    const id = event.target.id;

    if (id === 'good') {
      setGood((prev) => prev + 1);
    } else if (id === 'neutral') {
      setNeutral((prev) => prev + 1);
    } else {
      setBad((prev) => prev + 1);
    }
  };

  const btnText = ['good', 'neutral', 'bad'];
  const buttons = btnText.map((name, index) => (
    <Button
      key={index}
      id={name}
      text={name}
      handleClick={handleClick}
    ></Button>
  ));

  return (
    <div>
      <Header></Header>
      <>{buttons}</>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;
