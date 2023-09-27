import { useState } from 'react';
import './App.scss'
import Home from './components/Home';
import StyleSelection from './components/StyleSelection';
import InputSection from './components/InputSection';


function App() {
  let [template, setTemplate] = useState(0)

  function getTemplate(data) {
    setTemplate(data)
  }

  return (
    <div className="App">
      <Home></Home>
      <StyleSelection getTemplate={getTemplate}></StyleSelection>
      {template !== 0 ? <InputSection/> : null}
    </div>
  );
}

export default App;
