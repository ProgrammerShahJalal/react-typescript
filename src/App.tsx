import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Inner } from './components/Inner';
import { Input } from './components/Input';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
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
      <Button handleClick={(event, id) => { console.log('Button Clicked', event, id) }} />
      <Input value='' handleChange={(event) => { console.log(event) }} />
      <Container styles={{ border: '1px solid black', padding: '1rem', margin: '3rem' }} />
      <LoggedIn />
      <User />
    </div>
  );
}

export default App;
