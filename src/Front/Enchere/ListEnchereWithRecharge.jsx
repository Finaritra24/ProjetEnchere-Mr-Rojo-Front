import React,{useEffect,useState} from 'react'
import axios from 'axios'
import NavbarUser from '../../layout/NavbarUser'
import './Enchere.css'
import { Link } from 'react-router-dom';
import NavAccueilUser from '../../layout/NavAccueilUser';

export default function ListEnchere() {
    const[enchere,setEnchere]=useState([]);

    useEffect(()=>{
        loadEnchere();
    },[]);

    const loadEnchere=async()=>{
        const result=await axios.get("http://localhost:8080/listEnchere");
        setEnchere(result.data);
    };
  return (
    
    <div className='container'>
        
        <NavAccueilUser/>
        
        <section >
  <div class="container py-5">
    <div class="row">
    
      <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
        <div class="card text-black">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp"
            class="card-img-top" alt="iPhone" />
          <div class="card-body">
            <div class="text-center mt-1">
              <h4 class="card-title">Nom produit: iPhone 11 Pro</h4>
              <h6 class="text-primary mb-1 pb-3">Prix : Starting at $599</h6>
            </div>
              <div class="d-flex flex-column mb-4">
                <span>Categorie: Phone</span>
              </div>
            </div>
            <div class="d-flex flex-row">
              <Link  class="btn btn-primary flex-fill me-1" data-mdb-ripple-color="dark" to='/viewEnchere'>
                Voir plus
              </Link>
              <Link  class="btn btn-primary flex-fill me-1" data-mdb-ripple-color="dark" to='/recharger'>
                Recharger
              </Link>
          </div>
        </div>
      </div>
  </div>
  </div>
</section>
      
        </div>
  )
}

