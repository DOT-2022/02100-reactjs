import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'

// Functions in a Functional components are all pure functions
// We don't have a Lifecycle methods in functional components
// But the way the react works is same phases constructor - render - update - unmount

// A functions when its invoked, it will get read from top to bottom and returns something and done.
// Since its a pure function 
const App = () => {
  //Array Destructuring
  // UseState gives us 2 values [value, setValue]
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // CREATING SIDE EFFECT
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonster  = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonster);
  }, [
    monsters,
    searchField
  ]);

  const onSearchChanged = (event) => {
    const searchFieldString  = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox onChangeHandler = {onSearchChanged} placeholder = 'Search Monsters' className = 'search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
