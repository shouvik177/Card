import './App.css';
import Card from './Card';
import { useState } from 'react';

function App() {
  const [cards, setCards] = useState([{ id: 1, title: "Card 1", content: "content 1" }]);

  const cardGenerator = () => {
    const newObject = {
      id: cards.length + 1,
      title: `Card ${cards.length + 1}`,
      content: `Content ${cards.length + 1}`
    };
    setCards([...cards, newObject]);
  };

  return (
    <>
      <div className='app'>
        <button onClick={cardGenerator}>Card Generator</button>
        <div className='card-container'>
          {cards.map((card) => (
            <Card key={card.id} title={card.title} content={card.content} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
