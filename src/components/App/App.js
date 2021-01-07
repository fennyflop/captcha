import './App.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import List from '../List/List';
import Footer from '../Footer/Footer';
import Information from '../Information/Information';
import ListN1 from '../../Lists/ListN1/ListN1';
import AutomatedList from '../../Lists/AutomatedList/AutomatedList';
// import AutomatedList from '../../Lists/AutomatedList/AutomatedList';

function App() {

  const [title, setTitle] = useState('');
  const [span, setSpan] = useState('');
  const [error, setError] = useState('');
  const [questions, setQuestions] = useState([]);

  useState(() => {
    setTimeout(() => {
      setTitle(AutomatedList.title);
      setSpan(AutomatedList.span);
      setError(AutomatedList.error);
      setQuestions(AutomatedList.arrayQuestions);
    }, 1000)
  }, [])


  const [errorOpened, setErrorOpeneed] = useState(false);
  const [informationOpened, setInformationOpened] = useState(false);

  function toggleInformation() {
    setInformationOpened(!informationOpened);
  }

  return (
    <main classNmae="main">
      <div className="container">
        <Header title={title} span={span} />
        <List questions={questions} />
        <p className={`error ${errorOpened ? 'error__opened' : ''}`}>
          {error}
        </p>
        <Footer toggleInformation={toggleInformation} />
        <Information opened={informationOpened} />
      </div>
    </main>
  );
}

export default App;
