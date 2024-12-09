import { useContext } from "react";
import { ThemeContext } from "./theme-context";

const ToggleComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return(
        <>
            <div style={{
                padding: 20, 
                borderRadius: 10, 
                backgroundColor: theme === "light" ? "#eee" : "#333",
                color: theme === "dark" ? "#eee" : "#333"
            }}>
                <h1>Tema atual: {theme}</h1>
            </div>
            <button onClick={() => toggleTheme()}>Trocar tema</button>
        </>
    )
}

export { ToggleComponent }