import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: ''
    };
  }

  componentDidMount() {
    // Like init method. Component did mount will run only when the moment the component gets loaded on the DOM this lifecycle method will get executed.
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters : users}
    }, () => {
      console.log(this.state);
    }));
  }

  onSearchChanged = (event) => {
              const searchText  = event.target.value.toLocaleLowerCase()
              this.setState(() => {
                return {searchText}
              });
            }

  render() {
    const {monsters, searchText} = this.state
    const {onSearchChanged} = this

    const newFilteredMonster = monsters.filter(
              (monster) => {
                return monster.name.toLocaleLowerCase().includes(searchText)
              });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler = {onSearchChanged} placeholder = 'Search Monsters' className = 'search-box' />
        <CardList monsters={newFilteredMonster} className= 'custom-list' />
      </div>
    )
  }
}

  
export default App;
