import { Link } from "react-router-dom";
import './style.css';

interface Props {
    marginTop?: number;
}

const HomeButton = ({marginTop}: Props) => {
    return (
        <Link to="/">
            <button
                className="go-home-button"
                style={{marginTop: marginTop}}
            >
                Voltar para o início
            </button>
        </Link>
    )
}

export { HomeButton };