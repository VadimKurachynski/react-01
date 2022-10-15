import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div><Header /></div>
     <div className='tu'>это новое React приложение</div>
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

export default App;
