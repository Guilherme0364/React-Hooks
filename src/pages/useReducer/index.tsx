import { useReducer, useState } from "react";
import { HomeButton } from "../../components/homeButton";
import './style.css'; 

interface State {
	counter: number;
	tasks: {
		name: string;
		isCompleted: boolean
	}[]; // Lista de tarefas (Object)
}


// Definindo a interface da ação para o reducer
interface Action {
	type: "increment" | "decrement" | "add-task" | "toggle-task"; 
	payload?: string | number; // Dados extras que algumas ações podem precisar
}


// Função reducer: responsável por atualizar o estado com base na ação
const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "increment": // Incrementa o contador
			return { ...state, counter: state.counter + 1 };

		case "decrement": // Decrementa o contador
			return { ...state, counter: state.counter - 1 };

		case "add-task": // Adiciona uma nova tarefa à lista
			if (typeof action.payload === "string" && action.payload.trim()) { // Tira o espaço branco
				return {
					...state,
					tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
				};
			}
			return state; // Retorna o estado atual caso o payload seja inválido

		case "toggle-task": // Alterna entre concluído e não concluído para uma tarefa
			if (typeof action.payload === "number") {
				return {
					...state,
					tasks: state.tasks.map((task, index) =>
						index === action.payload
							? { ...task, isCompleted: !task.isCompleted }
							: task
					),
				};
			}
			return state; // Retorna o estado atual caso o payload seja inválido

		default:
			return state; // Retorna o estado atual para ações desconhecidas
	}
};

const UseReducerExample = () => {
	// Hook useReducer: gerencia o estado complexo da aplicação
	const [state, dispatch] = useReducer(reducer, { counter: 0, tasks: [] });

	const [inputValue, setInputValue] = useState<string>("");

	return (
		<div className="container">
			<h1>Exemplo do Hook: useReducer</h1>
			<p>
				O hook <code>useReducer</code> permite gerenciar estados complexos com lógica centralizada em um reducer.
			</p>
			<div className="controls">

				<p className="counter">Contador: {state.counter}</p>

				<button
					className="button increment"
					onClick={() => dispatch({ type: "increment" })}
				>
					Incrementar
				</button>

				<button
					className="button decrement"
					onClick={() => dispatch({ type: "decrement" })}
				>
					Decrementar
				</button>
			</div>

			<div className="task-manager">
				<h2>Gerenciador de Tarefas</h2>

				<input
					className="task-input"
					type="text"
					placeholder="Digite o nome da tarefa..."
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)} // Atualiza o valor do input
				/>

				{/* Botão para adicionar a nova tarefa */}
				<button
					className="button add-task"
					onClick={() => {
						dispatch({ type: "add-task", payload: inputValue }); // Envia o valor digitado para adicionar tarefa
						setInputValue(""); // Limpa o input após adicionar
					}}
				>
					Adicionar Tarefa
				</button>

				{/* Lista de tarefas */}
				<ul className="task-list">
					{state.tasks.map((task, index) => (
						<li
							key={index}
							className={`task-item ${task.isCompleted ? "completed" : ""
								}`} // Aplica classe 'completed' se a tarefa estiver concluída
							onClick={() => dispatch({ type: "toggle-task", payload: index })} // Alterna o estado da tarefa ao clicar
						>
							{task.name}
						</li>
					))}
				</ul>
			</div>
			<HomeButton/>
		</div>
	);
};

export default UseReducerExample;
