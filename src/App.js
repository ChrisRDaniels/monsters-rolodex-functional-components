import { useEffect, useState } from 'react';
import CardList from './components/card-list/CardList';
import SearchBar from './components/search-bar/SearchBar';
import './App.css';

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	console.log('render');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

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
};

export default App;
