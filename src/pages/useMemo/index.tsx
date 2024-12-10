import { useState, useMemo } from 'react';
import { HomeButton } from '../../components/homeButton';
import './style.css'

const UseMemoExample = () => {
	const [number, setNumber] = useState(0) // É o mesmo número do estado exibido na tela e na função com o for
	const [text, setText] = useState("")

	const slowFunction = (num: number) => {
		console.log("Função lenta sendo chamada...")
		for (let i = 0; i < 0; i++) {
			return num * 2
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const doubleNumber = useMemo(() => { 
		return slowFunction(number)
	}, [number])

	return (
		<div style={{ padding: '20px', fontFamily: 'Arial' }}>
			<h1>Exemplo do Hook: useMemo</h1>
			<p>
				O hook <code>useMemo</code> permite que você guarde um valor em memória, para que, por exemplo, uma função
				que custe muito processamento seja feita somente uma vez.
			</p>
			<p className='data'>{number}</p>
			<div>
				<input onChange={(e) => setText(e.target.value)} type="text" value={text} />
				<button className='increase-button' onClick={() => setNumber(number + 1)}>Incrementar número</button>
			</div>
			<p className='data'>Texto digitado: {text}</p>
			<HomeButton/>
		</div>
	);
};

export default UseMemoExample;
