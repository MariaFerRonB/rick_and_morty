import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav'
import About from "../src/components/About/About"
import Detail from './components/Detail';
import Form from "./components/Form"
import {useState, useEffect} from 'react';
import axios from 'axios'
import {Route,Routes, useLocation, useNavigate} from 'react-router-dom'
import Favorites from './components/Favorites';






const API_KEY= "67a5f816aa01.067115ab500504b87f7c";
const URL_BASE = "https://be-a-rym.up.railway.app/api/character"

const email = "fernanda@gmail.com"
const password  = "123asd"
function App() {

   
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access,setAccess] =useState(false);

   const login = (userData) =>{

      if(userData.email === email && userData.password === password) {
         setAccess(true);
         navigate("/home");
      }

   }
   useEffect (() => {
      !access && navigate('/');
   }, [access])

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character =>
         character.id !==id)
         setCharacters(charactersFiltered)
   }

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
          alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   return (

      <div className='App'>
         {
         location.pathname !== "/" 
         ? <Nav onSearch={onSearch} setAccess={setAccess}/>
         : null
         }
         <Routes>
            <Route path ="/home" element= { <Cards characters={characters} onClose={onClose}/>}/>
            <Route path ="/About" element ={<About/>} />
            <Route path ="/detail/:id" element ={<Detail/>} />
            <Route path ="/" element ={<Form login ={login}/>}/>
            <Route path ="/favorites" element = {<Favorites/>} />
         </Routes>
      </div>
   );
}

export default App;
