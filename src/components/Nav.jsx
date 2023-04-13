import SearchBar from "./SearchBar"
import {NavLink, useNavigate} from "react-router-dom"

const Nav = ({onSearch ,setAccess}) => {
    const navigate=useNavigate()
    const handleLogOut = () => {
        setAccess(false);
        navigate("/");
    }
    return (
        <nav>
    
        <div>
       <NavLink to = "/about">ABOUT</NavLink>
        <NavLink to = "/home">HOME</NavLink>
        <NavLink to = "/favorites">FAVORITES</NavLink>
        </div>
       
        <button onClick={handleLogOut}>Log Out</button>
        <SearchBar onSearch={onSearch}/>
        </nav>
        
    )
}

export default Nav;