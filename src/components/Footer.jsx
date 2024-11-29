function Footer(){
    return(
        <footer class="bg-dark text-white py-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h5>Sobre Nós</h5>
                        <p>Somos uma empresa dedicada a fornecer serviços de alta qualidade.</p>
                    </div>
                    <div class="col-md-4">
                        <h5>Links Úteis</h5>
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-white">Quem Somos</a></li>
                            <li><a href="#" class="text-white">Contato</a></li>
                            <li><a href="#" class="text-white">Serviços</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h5>Contato</h5>
                        <p>Email: contato@empresa.com</p>
                        <p>Telefone: (11) 99999-9999</p>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <p>&copy; 2024 Empresa. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;