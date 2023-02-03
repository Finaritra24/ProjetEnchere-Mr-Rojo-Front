import React,{useEffect,useState} from 'react'
import axios from 'axios'
import NavCategorie from '../layout/NavCategorie';
import NavAccueil from '../layout/NavAccueil';
export default function ListCategorie() {
    const[categories,setCategorie]=useState([]);

    useEffect(()=>{
        loadCategories();
    },[]);

    const loadCategories=async()=>{
        const result=await axios.get("http://localhost:8080/categories");
        setCategorie(result.data);
    };
  return (
    
    <div className='container'>
        <NavAccueil/>
        <NavCategorie/>
        <div className='py-4'>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">Nom</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories.map((categories,index)=>(
                        <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{categories.nom}</td>
                        <td>
                        
                        <div className="container-fluid">
                            <a className='btn btn-primary mx-2'  href="updateCategorie?idCategorie={categorie.idcategorie}" role="button" aria-expanded="false">Statistique</a>
                        </div>
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

