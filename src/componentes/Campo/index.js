import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    //destructuracion
    const {type = Text} = props

    const manejaeCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejaeCambio}
            type={type}
        />
    </div>
}

export default Campo;