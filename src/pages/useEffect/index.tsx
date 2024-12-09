import { useState, useEffect } from "react";
import { HomeButton } from '../../components/homeButton';
import './style.css'

type Item = {
	title?: string;
	key: string | number
}

const UseEffectExample = () => {
	const [resourceType, setResource] = useState('posts')
	const [items, setItems] = useState<Item[]>([]) // o estado é do tipo Item[] criado logo acima

	const changeResource = (resourceType: string) => {
		setResource(resourceType)
	}

	// É chamado toda vez que algo na "tela" é renderizado
	useEffect(() => {
		const fetchResourceTypes = async () => {
			const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
			const responseJSON = await response.json()
			setItems(responseJSON)
		}
		fetchResourceTypes()
	}, [resourceType]) // Só vai ser executado quando o valor no array de dependencia for alterado

	return (
		<div style={{ padding: '20px', fontFamily: 'Arial' }}>
			<h1>Exemplo do Hook: useEffect</h1>
			<p>
				O hook <code>useEffect</code> permite basicamente "executar alguma coisa quando alguma coisa acontecer".
			</p>			
			<div style={{ marginTop: '20px' }}>
				<p className="resource">{resourceType}</p>

				{/* Quando passamos a função  diretamente, sem ser por meio da função anônima, ela é chamada imediatamente
				o que ocasionaria em um comportamente indesejado, por isso fazemos por meio da função anônima */}
				<button className="effect-button" onClick={() => changeResource('posts')}>Posts</button>
				<button className="effect-button" onClick={() => changeResource('comments')}>Comments</button>
				<button className="effect-button" onClick={() => changeResource('todos')}>Todos</button>
			</div>
			<div style={{marginTop: '20px'}}>				
					{items.map(item => <p>{item.title ?? "Título indefinido"}</p>)}
			</div>
			<HomeButton/>
		</div>
	);
};

export default UseEffectExample;
