import { useState, useRef, useEffect } from "react";
import { HomeButton } from "../../components/homeButton";
import './style.css'

const UseRefExample = () => {

	const [name, setName] = useState('')
	const renders = useRef(0)
	const inputRef = useRef<HTMLInputElement>(null);


	const focusInput = () => {
		inputRef.current!.focus()
	}

	useEffect(() => {
		renders.current = renders.current + 1 // "Current é uma propriedade JS"
	})

	return (
		<div style={{ padding: '20px', fontFamily: 'Arial' }}>
			<h1>Exemplo do Hook: useRef</h1>
			<p>
				O hook <code>useRef</code> guarda uma variavel igual o useState, porém quando é atualizado, ele não é renderizado novamente.
			</p>
			<div>
				<input ref={inputRef} value={name} onChange={(enteredName) => setName(enteredName.target.value)} />
				<p className="hooks">Meu nome é: {name}</p>
				<p className="hooks">Vezes renderizado: {renders.current}</p>
				<div>
					<button className="ref-button" onClick={focusInput}>Focar input</button>
					<HomeButton marginTop={20}/>
				</div>
			</div>
		</div>
	);
};

export default UseRefExample;
