import ThemeContextProvider from "./theme-context";
import { ToggleComponent } from "./component";
import { HomeButton } from "../../components/homeButton";

const UseContextExample = () => {

	return (
		<ThemeContextProvider>
			<div style={{ padding: '20px', fontFamily: 'Arial' }}>
				<h1>Exemplo do Hook: useContext</h1>
				<p>
					O hook <code>Hook</code> permite que passamos um contexto para uma árvore inteira de componentes, basicamente
					elevando o estado das props.
				</p>
			</div>
			<ToggleComponent/>		
			<HomeButton/>
		</ThemeContextProvider>		
	);
};

export default UseContextExample;
