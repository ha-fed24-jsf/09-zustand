import './App.css'
import ClickerManager from './components/clicker/ClickerManager.jsx'
import Pronto from './components/pronto/Pronto.jsx'
import Player from './components/radio/Player.jsx'

function App() {

	return (
		<div className="app">
			<header> Zustand demo </header>
			<main>

				<Player />

				<ClickerManager />

				<Pronto />
			</main>
		</div>
	)
}

export default App
