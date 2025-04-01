import './App.css'
import ClickerManager from './components/ClickerManager.jsx'
import Pronto from './components/Pronto.jsx'

function App() {

	return (
		<div className="app">
			<header> Zustand demo </header>
			<main>

				<ClickerManager />

				<Pronto />
			</main>
		</div>
	)
}

export default App
