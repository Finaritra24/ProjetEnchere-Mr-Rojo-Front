import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavAccueil from '../layout/NavAccueil';
import NavCategorie from '../layout/NavCategorie';
export default function AddCategorie() {
    let navigate=useNavigate();
    const[categorie,setCategorie]=useState({
        nom:"",
        description:""
    });
    const{nom,description}=categorie;
    const onInputChange=(e)=>{
        setCategorie({...categorie,[e.target.name]:e.target.value});
    };
    const onSubmit= async (e)=>{
        try{
            e.preventDefault();
            await axios.post("http://localhost:8080/categorie",categorie);
            navigate("/categorie")
        } catch (error) {
            alert(error.message);
        }
    };
  return (
    <div className="container">
        <NavAccueil/>
        <NavCategorie/>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounder-p4 mt-2 shadow">
                <h2 className="text-center m-3">Inserer nouveau categorie</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input type={"text"} className="form-control" placeholder="Entrez nom categorie" name="nom" value={categorie.nom} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type={"text"} className="form-control" placeholder="Description categorie" name="description" value={categorie.description} onChange={(e)=>onInputChange(e)}/>
                </div>
                <p> </p>
                <p><button  className='btn btn-primary mx-2'>Inserer</button>
                <button type="submit" className="btn btn-outline-danger mx-2">Retour</button></p>
                </form>
            </div>
        </div>
    </div>
  )
}
