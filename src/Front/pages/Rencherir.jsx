import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../layout/Navbar';
export default function Rencherir() {
    // useEffect(()=>{
    //     loadUsers();
    // },[]);
    let navigate=useNavigate();
    const[rencherir,setRencherir]=useState();
    const[montant,setMontant]=useState({montant:''});
    const onInputChange=(e)=>{
        setMontant({...montant,[e.target.name]:e.target.value});
    };
    const onSubmit= async (e)=>{
        try{
            e.preventDefault();
            const result=await axios.post("http://localhost:8080/rencherir", {montant} );
            setRencherir(result.data); 
            // const result=await axios.post("http://localhost:8080/loginUser?email="+email+"&password="+password);
            if(result.data.length>=1){
                navigate("/rencherir");
            }
            else{
                alert("Misy tsymety");
            }
        } catch (error) {
            alert(error.message);
        }
    };
  return (
    <div className="rencherir">
        <Navbar/>
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounder-p4 mt-2 shadow">
                <h2 className="text-center m-3">Rencherir</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <p>encheres.map((rencherir,index)=(
                        {rencherir.prix}
                    ))</p>
                <div className="mb-3">
                    <label htmlFor="identification" className="form-label">Rencherir</label>
                    <input type={"text"} className="form-control" placeholder="prix" name="prix" value={montant.montant} onChange={(e)=>onInputChange(e)}/>
                </div>
                <p><button  className='btn btn-primary mx-2'>Rencherir</button></p>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
