import './index.css';
import { useState } from 'react';

const NameMaker = () => {
  const [color, setColor] = useState('blue');
  const [count, setCount] = useState(0);
  const [highScore, setHighScore] = useState(25);
  const [newName, setNewName] = useState('');

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <div>
        <button onClick={() => setColor('blue')}>Blue</button>
        <button onClick={() => setColor('red')}>Red</button>
        <button onClick={() => setColor('green')}>Green</button>
      </div>
      <p className={color}>The current Color is {color}</p>

      <p>The count state is {count}</p>
      <button onClick={() => setCount(count + 1)}>Add + 1</button>
      <p>The highscore is {highScore}</p>
      {count > highScore ? (
        <p>You beat the highscore, mothafucka!</p>
      ) : (
        <></>
      )}

      <input
        type="text"
        value={newName}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default NameMaker;
