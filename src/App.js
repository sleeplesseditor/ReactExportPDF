import logo from './logo.svg';
import './App.css';

import JsPDF from 'jspdf';

function App() {
  const generatePDF = () => {

    const report = new JsPDF('portrait','pt','a4');
    report.html(document.querySelector('#report')).then(() => {
        report.save('report.pdf');
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="report">
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <button onClick={generatePDF} type="button">Export to PDF</button>
    </div>
  );
}

export default App;
