import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import LoginAdmin from './admin/LoginAdmin';
import Accueil from './pages/Accueil';
import AddCategorie from './Categorie/AddCategorie';
import ValiderEnchere from './enchere/ValiderEnchere';
import ListEnchereWithRecharge from './Front/Enchere/ListEnchereWithRecharge';
import Historique from './Front/pages/Historique';
import ListeEnchere from './Front/Enchere/ListeEnchere';
import ListCategorie from './Categorie/ListCategorie';
import LoginUser from './Front/User/LoginUser';
import Mode from './pages/Mode';
import AddUser from './Front/User/AddUser';
import Statistique from './pages/Statistique';
function App() {

  return (
    <div className="App">
      <Router>
          <Routes>
              <Route exact path="/" element={<Mode/>} />
            {/* Administrateur */}
              <Route exact path="/admin" element={<LoginAdmin/>} />       
              <Route exact path="/addAdmin" element={<addAdmin/>} />
              <Route exact path="/accueil" element={<Accueil/>} />
              <Route exact path="/validerEnchere" element={<ValiderEnchere/>} />
              <Route exact path="/listeCategorie" element={<ListCategorie/>} />
              <Route exact path="/addCategorie" element={<AddCategorie/>} />
              <Route exact path="/statistique" element={<Statistique/>} />
            
            {/* Utilisateur */}
              <Route exact path="/listeEnchere" element={<ListeEnchere/>} />
              <Route exact path="/utilisateur" element={<LoginUser/>} /> 
              <Route exact path="/adduser" element={<AddUser/>} />   
              <Route exact path="/historique" element={<Historique/>} />
              <Route exact path="/listEnchereRecharge" element={<ListEnchereWithRecharge/>} />  
          </Routes>
      </Router>
    </div>
  );
}

export default App;
