import React from "react";
import fail from './404.scss'
import { Link } from "react-router-dom";

export default function NotFound () {
    return (
        <div className="Error">

            <p className="code">404</p>
            <p className="text-error">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="Redirect">Retourner sur la page d’accueil</Link>

        </div>

    )
}