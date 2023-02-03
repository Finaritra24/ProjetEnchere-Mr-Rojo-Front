import React from 'react'
import { Link } from 'react-router-dom'

export default function NavAccueilUser() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/listEnchereRecharge">Liste Enchere</a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="/historique">Historique</a>
        <a class="nav-link" href="/listeEnchere">Se deconnecter</a>
      </div>
    </div>
  </div>
</nav>
    
  )
}