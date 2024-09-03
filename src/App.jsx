import { useState } from 'react';
import UserName from './components/UserName';

const App = () => {
  const [name, setName] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Введите имя"
        />
        <button type="submit">Отправить</button>
      </form>
      <UserName name={name} />
    </div>
  );
};

export default App;
