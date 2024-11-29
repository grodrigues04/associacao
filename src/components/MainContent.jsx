import 'bootstrap/dist/css/bootstrap.min.css';
import style from "../assets/styles/maincontent.module.css";
import plane_icon from "../assets/img/plane_icon.svg";

function MainContent() {
    return (
        <>
            <section className={style.hero}>
                <div className={style.overlay}></div>
                <div className={style.content}>
                    <h1>Associação de turismo de Florianópolis</h1>
                    <p>Oferecemos serviços de turismos para todas as pessoas! Venha nos conhecer! </p>
                    <a href="#article_main_content" className={style.main_button_services}>Nossos Serviços</a>
                </div>
            </section>

            <article>
                <div className={style.article_main_content}>
                    <h2 className={style.title_article}>Conheça nossos serviços</h2>
                    <div className={style.service_cards_section}>
                        <div className={style.service_card} style={{ width: "18rem" }}>
                            <div className={style.card_body}>
                                {/* <img src={plane_icon} alt="aviao_icon" style="width:auto"; height="60rem"/> */}
                                <h5 className="card-title text-center">Transfer</h5>
                                <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia harum, nam dicta.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>

                        <div className={style.service_card} style={{ width: "18rem" }}>
                            <div className={style.card_body}>
                                {/* <img src="{% static "home/images/car_icon.svg" %}" alt="car_icon" style="width:auto"; height="50rem"> */}
                                <h5 className="card-title text-center">Transfer</h5>
                                <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia harum, nam dicta.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div className={style.service_card} style={{ width: "18rem" }}>
                            <div className={style.card_body}>
                                {/* <img src="{% static "home/images/sign_icon.svg" %}" alt="sign_icon" style="width:auto"; height="50rem"> */}
                                <h5 className="card-title text-center">Transfer</h5>
                                <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia harum, nam dicta.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div className={style.service_card} style={{ width: "18rem" }}>
                            <div className={style.card_body}>
                                {/* <img src="{% static "home/images/whats_icon.svg" %}" alt="whats_icon" style="width:auto"; height="50rem"> */}
                                <h5 className="card-title text-center">Transfer</h5>
                                <p className="card-text text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia harum, nam dicta.</p>
                                <a href="#" className="btn btn-success">WhatsApp</a>
                            </div>
                        </div>
                    </div>

                    <h2 className={style.title_article}>Translados</h2>
                    <div className={style.service_cards_section}>
                        <div className="card bg-secondary" style={{ width: "18rem" }}>
                            {/* <img src="{% static "home/images/tr1.webp" %}" className="card-img-top" alt="tr1"> */}
                            <div className="card-body">
                                <h5 className="card-title">Translado 1</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div className="card bg-secondary" style={{ width: "18rem" }}>
                            {/* <img src="{% static "home/images/tr2.jpg" %}" className="card-img-top" alt="tr2"> */}
                            <div className="card-body">
                                <h5 className="card-title">Translado 2</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div className="card bg-secondary" style={{ width: "18rem" }}>
                            {/* <img src="{% static "home/images/tr3.jpg" %}" className="card-img-top" alt="tr3"> */}
                            <div className="card-body">
                                <h5 className="card-title">Translado 3</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <h2 className={style.title_article}>Venha conhecer Floripa com a gente</h2>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                {/* <img src="{% static "home/images/praia1.jpg" %}" className="d-block w-100" alt="..."> */}
                                <div className="carousel-caption d-none d-md-block">
                                    <div className={style.beach_description}>
                                        <h5>Praia da daniela</h5>
                                        {/* <img src="{% static "home/images/location_icon.svg" %}" style={{ height: "30px", width: "30px" }} /> */}
                                    </div>
                                    <p>Um refúgio para quem busca um lugar tranquilo para relaxar e aproveitar a beleza natural da região</p>
                                </div>
                            </div>

                            <div className="carousel-item">
                                {/* <img src="{% static "home/images/praia2.jpg" %}" className="d-block w-100" alt="..."> */}
                                <div className="carousel-caption d-none d-md-block">
                                    <div className={style.beach_description}>
                                        <h5>Praia brava</h5>
                                        {/* <img src="{% static "home/images/location_icon.svg" %}" style={{ height: "30px", width: "30px" }} /> */}
                                    </div>
                                    <p>Água limpa e cristalina, além de belezas naturais e ótimas ondas para o surf e bodyboarding.</p>
                                </div>
                            </div>

                            <div className="carousel-item">
                                {/* <img src="{% static "home/images/praia3.webp" %}" className="d-block w-100" alt="..."> */}
                                <div className="carousel-caption d-none d-md-block">
                                    <div className={style.beach_description}>
                                        <h5>Praia do Campeche</h5>
                                        {/* <img src="{% static "home/images/location_icon.svg" %}" style={{ height: "30px", width: "30px" }} /> */}
                                    </div>
                                    <p>A praia é procurada por surfistas do mundo inteiro, que encontram as conhecidas "direitas"</p>
                                </div>
                            </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <h2>Faça um orçamento agora!</h2>
                    <a href="#" className="btn btn-success btn-lg active" role="button" aria-pressed="true">Entre em contato!</a>
                </div>
            </article>
        </>
    );
}

export default MainContent;
