import { useState } from 'react';
import { HomeButton } from '../../components/homeButton';
import './style.css'

const UseStateExample = () => {
	const [count, setCount] = useState(0);

	// Se você passar uma função como argumento para setCount, o React automaticamente chamará essa função, fornecendo o estado atual como argumento para ela. Esse estado atual é o prevState. A função é aberta anonimamente no setCount.

	const incrementCount = () =>{
		setCount((prevState) => prevState + 1);
	}

	const decreaseCount = () => {
		setCount((prevState) => prevState - 1)
	}

	return (
		<div style={{ padding: '20px', fontFamily: 'Arial' }}>
			<h1>Exemplo do Hook: useState</h1>
			<p>
				O hook <code>useState</code> permite adicionar estado a componentes
				funcionais. Veja o exemplo de um contador abaixo:
			</p>
			<div style={{ marginTop: '20px' }}>
				<p className='count'>Contador: {count}</p>
				<button className='state-button increment-button' onClick={incrementCount}>Incrementar</button>
				<button className='state-button decrease-button' onClick={decreaseCount}>Decrementar</button>
				<button className='state-button' onClick={() => setCount(0)}>Resetar</button>
			</div>			
			<HomeButton marginTop={50}/>
		</div>		
	);
};

export default UseStateExample;
