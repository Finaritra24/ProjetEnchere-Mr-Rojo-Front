import React from 'react'
import { Link } from 'react-router-dom'

export default function NavAccueil() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/validerEnchere">Gestion Enchere</a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="/listeCategorie">Gestion Categorie</a>
        <a class="nav-link" href="/statistique">Statistique</a>
        <a class="nav-link" href="/admin">Se deconnecter</a>
      </div>
    </div>
  </div>
</nav>
    
  )
}