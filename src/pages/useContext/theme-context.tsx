import { useState, createContext, ReactNode } from "react";

interface ThemeContextProviderProps {
    children: ReactNode; // Especifica o tipo de `children` (era para ser obvio para o compilador)
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => { },
});

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            return setTheme("dark");
        }
        return setTheme("light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
