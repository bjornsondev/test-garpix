import './App.scss';

import Header from './components/Header/Header'
import Routes from './Routes';
import Footer from './components/Footer/Footer';


function App(props) {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
