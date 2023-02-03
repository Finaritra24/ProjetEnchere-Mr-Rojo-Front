import React from 'react'
import NavbarUser from '../layout/NavbarUser';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavAccueil from '../layout/NavAccueil';
import Gestion from './Gestion';
export default function Accueil() {
  return (
    <div className="App">
      <NavAccueil/>
    </div>
  )
}
