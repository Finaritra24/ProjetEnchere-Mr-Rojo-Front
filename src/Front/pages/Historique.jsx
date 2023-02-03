import React,{useEffect,useState} from 'react'
import axios from 'axios'
import NavbarUser from '../../layout/NavbarUser'
import { Link } from 'react-router-dom';
import NavAccueilUser from '../../layout/NavAccueilUser';

export default function Historique() {
    const[historique,setHistorique]=useState([]);

    useEffect(()=>{
        loadHistorique();
    },[]);

    const loadHistorique=async()=>{
        const result=await axios.get("http://localhost:8080/historique");
        setHistorique(result.data);
    };
  return (
    <div className='container'>
        <NavAccueilUser/>
        <p>Historique</p>
        <div className='py-4'>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Date</th>
                <th scope="col">Historique</th>
                </tr>
            </thead>
            <tbody>
                {
                    historique.map((historique,index)=>(
                        <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{historique.propos}</td>
                        <td>
                        </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}

