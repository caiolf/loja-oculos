import logo from './logo.svg';
import './App.css';

import Topo from './components/Topo';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Topo></Topo>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}