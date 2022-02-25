import React,{useState} from 'react';

import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph,setShowParagraph] = useState(false);

  const toggleParagraphHandler = () =>{
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>New paragraph.</p>}
      <Button onClick={toggleParagraphHandler} disabled={false}>Toogle Paragraph!</Button>
    </div>
  );
}

export default App;
