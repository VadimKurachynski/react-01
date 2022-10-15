import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div>
    <Header />
    <Footer />
    </div>
  );
}

const Header=()=> {
  return (
   <div>
    <div>Первая</div>
    <div>Вторая</div>
    <div>Третья</div> 
    </div>
  );
}

const Footer=()=> {
  return (
   <div>
    <div>Первая1</div>
    <div>Вторая2</div>
    <div>Третья3</div> 
    </div>
  );
}

export default App;
