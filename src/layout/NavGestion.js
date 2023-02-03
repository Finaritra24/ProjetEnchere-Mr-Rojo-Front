import React from 'react'
import { Link } from 'react-router-dom'

export default function NavAccueil() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="btn btn-outline-dark" to="/categorie">Categorie</Link>
                <Link className="btn btn-outline-dark" to="/user">User</Link>
            </div>
        </nav>
    </div>
  )
}