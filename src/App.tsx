import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name='Shah Jalal' messageCount={10} isLoggedIn={true} />
    </div>
  );
}

export default App;
