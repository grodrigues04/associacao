import floripaIcon from "../assets/img/floripaContact.jpeg";
import style from "../assets/styles/contato.module.css"; // Importando o módulo CSS
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

function Contato() {
    useEffect(()=>{
        document.body.style.backgroundColor = "white"

    }, [])

  return (
    <>
        <Header/>
        <article>
        <h2 className={style.main_title}>Entre em contato com a nossa equipe!</h2>
        <div className={style.main_contact_container}> {/* Alterado para usar style.className */}
            <div className={style.contact_reason}> {/* Alterado para usar style.className */}
            <img src={floripaIcon} alt="Logo" width="700" height="700" />
            </div>
            <form className={style.forms}> {/* Alterado para usar style.className */}
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email para contato</label>
                <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Por qual serviço você procura ?</label>
                <select className="form-control" id="exampleFormControlSelect1">
                <option>Turismo</option>
                <option>CityTour</option>
                <option>Transfer</option>
                <option>Translado</option>
                <option>Outro</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Para quantas pessoas seria ?</label>
                <select className="form-control" id="exampleFormControlSelect2"> {/* Corrigido o id duplicado */}
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7 ou mais pessoas</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Descreva o serviço que procura</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <input type="submit" value="enviar" className="btn btn-primary" /> {/* Adicionando classe do Bootstrap para o botão */}
            </form>
        </div>
        </article>
        <Footer/>
    </>
  );
}

export default Contato;
