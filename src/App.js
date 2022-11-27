import { Component } from 'react';
import CardList from './components/card-list/CardList';
import SearchBar from './components/search-bar/SearchBar';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		};
		console.log('constructor');
	}

	componentDidMount() {
		console.log('componentDidMount');
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) =>
				this.setState(
					() => {
						return { monsters: users };
					},
					() => {
						console.log(this.state);
					}
				)
			);
	}

	onSearchChange = (event) => {
		const searchField = event.target.value.toLocaleLowerCase();
		this.setState(() => {
			return { searchField };
		});
	};

	render() {
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		return (
			<div className="App">
				<h1 className="app-title">Monsters Rolodex</h1>
				<SearchBar
					className="monsters-search-bar"
					onChangeHandler={onSearchChange}
					placeholder="search monsters"
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
