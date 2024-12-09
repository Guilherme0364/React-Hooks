import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import UseEffectExample from './pages/useEffect/index';
import UseReducerExample from './pages/useReducer/index';
import UseRefExample from './pages/useRef/index';
import UseMemoExample from './pages/useMemo/index';
import UseCallbackExample from './pages/useCallback/index';
import UseContextExample from './pages/useContext/index';
import UseLayoutEffectExample from './pages/useLayoutEffect/index';
import UseStateExample from './pages/useState/index';


const root = ReactDOM.createRoot(document.getElementById('root')!); // A interrogação indica que o elemento nunca será nulo
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path='/useState' element={<UseStateExample />} />
			<Route path='/useEffect' element={<UseEffectExample />} />
			<Route path='/useReducer' element={<UseReducerExample />} />
			<Route path='/useRef' element={<UseRefExample />} />
			<Route path='/useMemo' element={<UseMemoExample />} />
			<Route path='/useCallback' element={<UseCallbackExample />} />
			<Route path='/useContext' element={<UseContextExample />} />
			<Route path='/useLayoutEffect' element={<UseLayoutEffectExample />} />
		</Routes>
	</BrowserRouter>
);
