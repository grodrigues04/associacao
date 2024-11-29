import 'bootstrap/dist/css/bootstrap.min.css';
import style from "../assets/styles/maincontent.module.css"
import plane_icon from "../assets/img/plane_icon"
function MainContent() {
    return (
        <>
        <section className={style.hero}>
            <div class={style.overlay}></div>
            <div class={style.content}>
                <h1>Associação de turismo de Florianópolis</h1>
                <p>Oferecemos serviços de turismos para todas as pessoas! Venha nos conhecer! </p>
                <a href="#article_main_content" class={style.main_button_services}>Nossos Serviços</a>
            </div>
    </section>
    <article>
        <div className={style.article_main_content}>
            <h2 className={style.title_article}>Conheça nossos serviços</h2>
            <div className={style.service_cards_section}>
                <div className={style.service-card} style="width: 18rem;">
                    <div className={style.card-body}>
                        <img src={plane_icon} alt="aviao_icon" style="width:auto"; height="60rem"/> 
                        <h5 class="card-title text-center">Transfer</h5>
                        <p class="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia harum, nam dicta.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="service-card" style="width: 18rem;">
                    <div class="card-body">
                        <img src="{% static "home/images/car_icon.svg" %}" alt="car_icon" style="width:auto"; height="50rem"> 
                        <h5 class="card-title text-center">Transfer</h5>
                        <p class="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia harum, nam dicta.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="service-card" style="width: 18rem;">
                    <div class="card-body">
                        <img src="{% static "home/images/sign_icon.svg" %}" alt="sign_icon" style="width:auto"; height="50rem"> 
                        <h5 class="card-title text-center">Transfer</h5>
                        <p class="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia harum, nam dicta.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="service-card" style="width: 18rem;">
                    <div class="card-body">
                        <img src="{% static "home/images/whats_icon.svg" %}" alt="whats_icon" style="width:auto"; height="50rem"> 
                        <h5 class="card-title text-center">Transfer</h5>
                        <p class="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia harum, nam dicta.</p>
                        <a href="#" class="btn btn-success">WhatsApp</a>
                    </div>
                </div>
            </div>
            <h2 class="title_article">Translados</h2>
            <div class="service_cards_section">
                <div class="card bg-secondary" style="width: 18rem;">
                    <img src="{% static "home/images/tr1.webp" %}" class="card-img-top" alt="tr1">
                    <div class="card-body">
                      <h5 class="card-title ">Translado 1</h5>
                      <p class="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card bg-secondary" style="width: 18rem;">
                    <img src="{% static "home/images/tr2.jpg" %}" class="card-img-top" alt="tr2">
                    <div class="card-body">
                      <h5 class="card-title ">Translado 2</h5>
                      <p class="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card bg-secondary" style="width: 18rem">
                    <img src="{% static "home/images/tr3.jpg" %}" class="card-img-top" alt="tr3">
                    <div class="card-body">
                      <h5 class="card-title ">Translado 3</h5>
                      <p class="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <h2 class="title_article">Venha conhecer Floripa com a gente</h2>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="{% static "home/images/praia1.jpg" %}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <div class="beach_description">
                            <h5>Praia da daniela</h5>
                            <img src="{% static "home/images/location_icon.svg" %}" style="height: 30px;width: 30px;">
                        </div>
                      <p>Um refúgio para quem busca um lugar tranquilo para relaxar e aproveitar a beleza natural da região</p>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <img src="{% static "home/images/praia2.jpg" %}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <div class="beach_description">
                            <h5>Praia brava</h5>
                            <img src="{% static "home/images/location_icon.svg" %}" style="height: 30px;width: 30px;">
                        </div>
                      <p>Água limpa e cristalina, além de belezas naturais e ótimas ondas para o surf e bodyboarding.</p>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <img src="{% static "home/images/praia3.webp" %}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <div class="beach_description">
                            <h5>Praia do Campeche</h5>
                            <img src="{% static "home/images/location_icon.svg" %}" style="height: 30px;width: 30px;">
                        </div>
                      <p>A praia é procurada por surfistas do mundo inteiro, que encontram as conhecidas "direitas"</p>
                    </div>
                  </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

              <h2>Faça um orçamento agora!</h2>
              <a href="#" class="btn btn-success btn-lg active" role="button" aria-pressed="true">Entre em contato!</a>

        </div>
        
    </article>
        </>
    );
}

export default MainContent;