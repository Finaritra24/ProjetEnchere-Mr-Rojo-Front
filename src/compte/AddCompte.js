import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function AddCompte() {
    let navigate=useNavigate();
    const[compte,setCompte]=useState({
        numero:"",
        nom: ""
    });
    const{numero,nom}=compte;
    const onInputChange=(e)=>{
        setCompte({...compte,[e.target.name]:e.target.value});
    };
    const onSubmit= async (e)=>{
        try{
            // e.preventDefault();
            await axios.post("http://localhost:8080/compte",compte);
            navigate("/")
        } catch (error) {
            alert(error.message);
        }
    };
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounder-p4 mt-2 shadow">
                <h2 className="text-center m-3">Inscription</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="numero" className="form-label">Numero</label>
                    <input type={"text"} className="form-control" placeholder="Entrez votre numero" name="numero" value={numero} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">nom</label>
                    <input type={"text"} className="form-control" placeholder="Entrez votre nom" name="nom" value={nom} onChange={(e)=>onInputChange(e)}/>
                </div>
                <button  className='btn btn-primary mx-2'>Inserer</button>
                <button type="submit" className="btn btn-outline-danger mx-2">Retour</button>
                </form>
            </div>
        </div>
    </div>
  )
}
