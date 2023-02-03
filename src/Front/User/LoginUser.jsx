import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import NavBarUser from '../../layout/NavbarUser';
export default function LoginUser() {
    const[user,setUser]=useState([]);
    // useEffect(()=>{
    //     loadUsers();
    // },[]);
    let navigate=useNavigate();
    const[login,setLogin]=useState({identifiant:'',motdepasse:''});
    const{identifiant,motdepasse}=login;
    const onInputChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});
    };
    const onSubmit= async (e)=>{
        try{
            // e.preventDefault();
            // const result=await axios.post("http://localhost:8080/loginUser", {identifiant, motdepasse} );
            // setUser(result.data); 
            // const result=await axios.post("http://localhost:8080/loginUser?email="+email+"&password="+password);
            // if(result.data){
                navigate("/listEnchereRecharge");  
            // }
            // else{
            //     alert("Email ou mot de passe incorrecte");
            // }
        } catch (error) {
            alert(error.message);
        }
    };
  return (
    <div className="login">
        <NavBarUser/>
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounder-p4 mt-2 shadow">
                <h2 className="text-center m-3">Login Utilisateur</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="identification" className="form-label">Identification</label>
                    <input type={"text"} className="form-control" placeholder="Identifiant" name="identifiant" value={login.identifiant} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="motdepasse" className="form-label">Mot de passe</label>
                    <input type={"motdepasse"} className="form-control" placeholder="Entrez votre mot de passe" name="motdepasse" value={login.motdepasse} onChange={(e)=>onInputChange(e)}/>
                </div>
                <p> </p>
                <p><button  className='btn btn-primary mx-2'>Se connecter</button>
                <button type="submit" className="btn btn-outline-danger mx-2">Retour</button></p>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
