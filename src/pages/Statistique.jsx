import React,{useEffect,useState} from 'react'
import axios from 'axios'
import NavCategorie from '../layout/NavCategorie';
import NavAccueil from '../layout/NavAccueil';
export default function Statistique() {
    
  return (
    
    <div className='container'>
        <NavAccueil/>
        <div className='py-4'>
            <p>Statistique de vente par categorie</p>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Categorie</th>
                <th scope="col">Duree moyenne de vente</th>
                <th scope="col">Total vendu</th>
                <th scope="col">Comission Percu</th>
                <th scope="col">Total vendu</th>
                <th scope="col">Total prix</th>
                </tr>
            </thead>
            <tbody>
                        <tr>
                        <th >ameublement</th>
                        <td>2h</td>
                        <td>125/100</td>
                        <td>2h</td>
                        <td>1200000</td>
                        <td>2600000</td>
                        <td>
                        </td>
                        </tr>
            </tbody>
        </table>



        <p>Produit le plus vendu</p>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Categorie</th>
                <th scope="col">Duree moyenne de vente</th>
                <th scope="col">Total vendu</th>
                <th scope="col">Comission Percu</th>
                <th scope="col">Total vendu</th>
                <th scope="col">Total prix</th>
                </tr>
            </thead>
            <tbody>
                        <tr>
                        <th >ameublement</th>
                        <td>2h</td>
                        <td>125/100</td>
                        <td>2h</td>
                        <td>1200000</td>
                        <td>2600000</td>
                        <td>
                        </td>
                        </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

