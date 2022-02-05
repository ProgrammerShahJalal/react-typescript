import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'Shah',
    last: 'Jalal'
  }

  const nameList = [
    {
      first: 'Mamun',
      last: 'Ahmed'
    },
    {
      first: 'Farabi',
      last: 'Alif'
    },
    {
      first: 'Salman',
      last: 'Farshi'
    }
  ]
  return (
    <div className="App">
      <Greet name='Shah Jalal' messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='success' />
    </div>
  );
}

export default App;
