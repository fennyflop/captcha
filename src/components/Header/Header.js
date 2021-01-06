import './Header.css';

function Header({ title, span }) {
    return (
        <header className="header">
            <h2 className="header__title">{title}</h2>
            <span className="header__span">{span}</span>
        </header>
    );
}

export default Header;