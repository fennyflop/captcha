import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import List from '../List/List';
import Footer from '../Footer/Footer';
import Information from '../Information/Information';

function App() {

  const [errorOpened, setErrorOpeneed] = useState(false);
  const [informationOpened, setInformationOpened] = useState(false);

  function toggleInformation() {
    setInformationOpened(!informationOpened);
  }

  return (
    <main classNmae="main">
      <div className="container">
        <Header />
        <List />
        <p className={`error ${errorOpened ? 'error__opened' : ''}`}>
          Здесь ошибка!
        </p>
        <Footer toggleInformation={toggleInformation} />
        <Information opened={informationOpened} />
      </div>
    </main>
  );
}

export default App;
