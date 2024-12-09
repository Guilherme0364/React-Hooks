import { Link } from 'react-router-dom'
import './App.css'

function App() {

	return (
		<>
			<h1>Hooks</h1>

			<Link to={'/useState'}>
				<button className='example-page-button'>useState</button>
			</Link>

			<Link to={'/useEffect'}>
				<button className='example-page-button'>useEffect</button>
			</Link>

			<Link to={'/useReducer'}>
				<button className='example-page-button'>useReducer</button>
			</Link>

			<Link to={'/useRef'}>
				<button className='example-page-button'>useRef</button>
			</Link>

			<Link to={'/useMemo'}>
				<button className='example-page-button'>useMemo</button>
			</Link>

			<Link to={'/useCallback'}>
				<button className='example-page-button'>useCallback</button>
			</Link>

			<Link to={'/useContext'}>
				<button className='example-page-button'>useContext</button>
			</Link>
		</>
	)
}

export default App
