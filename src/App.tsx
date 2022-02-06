import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Inner } from './components/Inner';
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
      <Heading>Placeholder text</Heading>
      <Inner>
        <Heading>Inner element inner text</Heading>
      </Inner>
      <Button handleClick={() => { console.log('Button Clicked') }} />
    </div>
  );
}

export default App;
