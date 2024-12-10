import { useState, useCallback } from "react";
import { HomeButton } from "../../components/homeButton";
import { List } from "./list";
import './style.css'

const App = () => {
	const [text, setText] = useState("");
	const [resourceType, setResourceType] = useState("posts");

	// O hook vai observar a variavel no array de dependencia, e só vai ter o get de informação se mudar o resourceType
	// Diferente do useMemo que guarda o retorno de uma função, o useCallback guarda a função em si
	const getItems = useCallback(async () => {
		console.log("getItems is being called!");
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/${resourceType}`
		);
		const responseJSON = await response.json();
		return responseJSON;
	}, [resourceType])

	return (
		<div>
			<div style={{ padding: '20px', fontFamily: 'Arial' }}>
				<h1>Exemplo do Hook: useCallback - Quando usar?</h1>
				<ul>
					<li>1°: Você ta passando uma função como prop para um componente?</li>
					<li>2°: Essa função tem algum custo computacional mais elevado?</li>
					<li>3°: Essa função ta sendo executada desnecessariamente?</li>
					<p>Ai sim, deve usar o useCallback</p>
				</ul>
			</div>
			<input value={text} onChange={(e) => setText(e.target.value)} />
			<button className="fetch-button" onClick={() => setResourceType("posts")}>Posts</button>
			<button className="fetch-button" onClick={() => setResourceType("comments")}>Comments</button>
			<button className="fetch-button" onClick={() => setResourceType("todos")}>Todos</button>
			<List getItems={getItems} />
			<HomeButton/>
		</div>
	);
};

export default App;
