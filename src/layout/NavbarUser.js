import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="btn btn-outline-dark" to="/adduser">Inscription</Link>
                <Link className="btn btn-outline-dark" to="/utilisateur">Se connecter</Link>
                <Link className="btn btn-outline-dark" to="/">Choisir mode</Link>
            </div>
        </nav>
    </div>
  )
}
