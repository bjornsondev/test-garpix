import { useEffect } from 'react';

import './App.scss';

import Header from './components/Header/Header'
import Routes from './Routes';
import Footer from './components/Footer/Footer';


function App(props) {

  useEffect( () => { // Не заморачивался, чтоб не оставался фокус у кнопок при нажатии
    document.querySelectorAll('button').forEach( e => {
      e.addEventListener("mouseup", e => e.currentTarget.blur())
    });
    return document.querySelectorAll('button').forEach( e => {
      e.removeEventListener("mouseup", e => e.currentTarget.blur())
    });
  }, []);


  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
