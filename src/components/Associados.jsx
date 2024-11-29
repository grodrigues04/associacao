import logo from "../assets/img/logo.png"
import styles from "../assets/styles/associados.module.css"
import Footer from "./Footer";
import Header from "./Header";

function Associados(){
    return(
        <>
            <Header/>
            <article>
                <h1 className={styles.main_title}>Associados</h1>
                <div class={styles.associados_container}>
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={logo} class="img-fluid rounded-start" alt="logo"/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Associação de Floripa</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={logo} class="img-fluid rounded-start" alt="logo"/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={logo} class="img-fluid rounded-start" alt="logo"/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={logo} class="img-fluid rounded-start" alt="logo"/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={logo} class="img-fluid rounded-start" alt="logo"/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={logo} class="img-fluid rounded-start" alt="logo"/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="space_footer"></div>
            </article>
            <Footer/>
        </>
    )
}

export default Associados;