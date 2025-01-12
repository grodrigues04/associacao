import Logo from "../assets/img/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
function Header(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src={Logo} alt="Logo" width="50" height="50"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Quem Somos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contato">Contato</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Serviços</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="associacao">Associados</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Header;