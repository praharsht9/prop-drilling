import './App.css';
import ChildA from './ChildA';

function App() {
	const name = 'Praharsh';
	return (
		<div className='App'>
			<h1>App</h1>
			<ChildA name={name} />
		</div>
	);
}

export default App;
