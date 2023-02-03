import React,{useEffect,useState} from 'react'
import axios from 'axios'
import NavCategorie from '../layout/NavCategorie';
import { Navigate } from 'react-router-dom';
import NavAccueil from '../layout/NavAccueil';
export default function ValiderEnchere() {
    const[encheres,setEnchere]=useState([]);

    useEffect(()=>{
        loadEncheres();
    },[]);

    const loadEncheres=async()=>{
        const result=await axios.post("http://localhost:8080/demandeEnchere");
        setEnchere(result.data);
    };
    const onInputChange=(e)=>{
        setEnchere({...encheres,[e.target.name]:e.target.value});
    };
    const onSubmit= async (e)=>{
        try{
            e.preventDefault();
            await axios.post("http://localhost:8080/validerEnchere",encheres);
            Navigate("/validerEnchere")
        } catch (error) {
            alert(error.message);
        }
    };
  return (
    
    <div className='container'>
        <NavAccueil/>
        <div className='py-4'>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">Nom</th>
                <th scope="col">Produit</th>
                <th scope="col">Date enchere</th>
                <th scope="col">Description</th>
                <th scope="col">Prix Enchere</th>
                <th scope="col">Prix minimal</th>
                <th scope="col">Commission</th>
                <th scope="col">Duree</th>
                </tr>
            </thead>
            <tbody>
                {
                    encheres.map((encheres,index)=>(
                        <form>
                        <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{encheres.categorie.nom}</td>
                        <td>{encheres.produit}</td>
                        <td>{encheres.dateEnchere}</td>
                        <td>{encheres.description}</td>
                        <td>{encheres.prixEnchere}</td>
                        <td>{encheres.prixMinimal}</td>
                        <td><input type={"text"} className="form-control" placeholder="Entrez Commission" name="commission" value={encheres.commission} onChange={(e)=>onInputChange(e)}/></td>
                        <td><input type={"number"} className="form-control" placeholder="Entrez duree" name="duree" value={encheres.duree} onChange={(e)=>onInputChange(e)}/></td>
                        <td>
                            <button className='btn btn-outline-primary mx-2'>Valider</button>
                        </td>
                        </tr>
                        </form>
                    ))
                }
                    <tr>
                        <th>Test</th>
                        <td>huhu</td>
                        <td>huhu</td>
                        <td>huhu</td>
                        <td>huhu</td>
                        <td>huhu</td>
                        <td>huhu</td>
                        <td><input type={"number"} className="form-control" placeholder="" name="commission"  value={encheres.commission} onChange={(e)=>onInputChange(e)}/></td>
                        <td><input type={"time"} className="form-control" placeholder="Entrez duree" name="duree" value={encheres.duree} onChange={(e)=>onInputChange(e)}/></td>
                        <td>
                            <button className='btn btn-outline-primary mx-2'>Valider</button>
                        </td>
                        </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

