import './Footer.css';

function Footer({ toggleInformation }) {
    return (
        <footer className="footer">
            <div className="footer__buttons">
                <button className="footer__button footer__repeat"></button>
                <button className="footer__button footer__listen"></button>
                <button className="footer__button footer__information" onClick={toggleInformation}></button>
            </div>
            <button class="footer__submit">ПОДТВЕРДИТЬ</button>
        </footer>
    );
}

export default Footer;