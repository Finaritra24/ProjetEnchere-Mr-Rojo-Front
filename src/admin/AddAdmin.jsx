import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function AddAdmin() {
    let navigate=useNavigate();
    const[admin,setAdmin]=useState({
        identifiant:"",
        motdepasse:""
    });
    const{identifiant,motdepasse}=admin;
    const onInputChange=(e)=>{
        setAdmin({...admin,[e.target.name]:e.target.value});
    };
    const onSubmit= async (e)=>{
        try{
            e.preventDefault();
            await axios.post("http://localhost:8080/admin",admin);
            navigate("/")
        } catch (error) {
            alert(error.message);
        }
    };
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounder-p4 mt-2 shadow">
                <h2 className="text-center m-3">Inserer Admin</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="identifiant" className="form-label">identifiant</label>
                    <input type={"identifiant"} className="form-control" placeholder="identifiant" name="identifiant" value={admin.identifiant} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="motdepasse" className="form-label">motdepasse</label>
                    <input type={"motdepasse"} className="form-control" placeholder="Entrez votre motdepasse" name="motdepasse" value={admin.motdepasse} onChange={(e)=>onInputChange(e)}/>
                </div>
                
                <p> </p>
                <p><button  className='btn btn-primary mx-2'>Inserer</button></p>
                </form>
            </div>
        </div>
    </div>
  )
}
