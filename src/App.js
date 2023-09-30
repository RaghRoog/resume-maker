import { useState } from 'react';
import './App.scss'
import Home from './components/Home';
import StyleSelection from './components/StyleSelection';
import InputSection from './components/InputSection';
import Template1 from './resume-templates/Template1'
import Template2 from './resume-templates/Template2'
import Template3 from './resume-templates/Template3'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

function App() {
  let [template, setTemplate] = useState(0)
  let [isGenerated, setIsGenerated] = useState(false)
  let [inputsData, setInputsData] = useState({})

  function getTemplate(data) {
    setTemplate(data)
  }
  function getIsGenerated(data){
    setIsGenerated(data)
  }
  function getInputsData(data){
    setInputsData(data)
  }

  let templates = [<Template1/>, <Template2/>, <Template3 inputsData={inputsData}/>]

  return (
    <div className="App">
      <Home></Home>
      <StyleSelection getTemplate={getTemplate}></StyleSelection>
      {template !== 0 ? <InputSection getIsGenerated={getIsGenerated} 
                          getInputsData={getInputsData}/> : null}
      {isGenerated === true ? 
        <div className="container" style={{display: 'flex', justifyContent: 'center'}}>
          <PDFDownloadLink className='download-link' document={templates[template-1]}>
            Download your Resume!
          </PDFDownloadLink>
        </div>
         : null}
    </div>
  );
}

export default App;
