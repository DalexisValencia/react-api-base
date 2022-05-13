import { Link } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/detail">Details</Link>
                </li>
            </ul>
        </header>
    );
}

export default HeaderComponent;