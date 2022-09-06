import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (

        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="logo DSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://www.instagram.com/brunonnascimento_/" target="_blank"> @brunonnascimento_ </a>
                    </p>
            </div>
        </header>
    )
}

export default Header
