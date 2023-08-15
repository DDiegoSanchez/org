import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado -  hooks
    //useState
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)

    // const [mostrar, actualizaMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostar/Ocultar elemento", !mostrar);
    //     actualizaMostrar(!mostrar);
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;