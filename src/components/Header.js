import {Link} from 'react-router-dom';
import Burger from "./Burger";
import { useState } from 'react';


const Header = ()=>{

    const [openModal, setOpenModal] = useState(false)

    return(
        <header className = "main-header">
            <div className="container">
            <div className="row">    
            <div className="main-header__left">
            <Link to="/"><img className="header-logo" src="img/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" to="/"  alt="logo" /></Link>
            <Link className="main-link" to="/catalog">Catalog</Link>
            <Link className="main-link" to="/">Movies</Link>
            <Link to="/search"><i className="fas fa-search main-link"></i></Link>
            </div>
            <div className="main-header__right">
            <Link className="main-link" to="/">Login</Link>
            <Link className="main-link" to="/filter">Filters</Link>
            <div className="modal">
              <button className="burger-btn" onClick={()=>{
                  setOpenModal(openModal ? false : true);
              }}>
                  { openModal ? <img src="/img/Без названия.png" width="30px" alt="iks"/> : <img className="burger-img" src="/img/Hamburger_icon.svg.png" alt="burger"/> }
              </button>
           {openModal && <Burger  closeModel={setOpenModal} />} 
           </div>
            </div>
            </div>
            </div>
        </header>
    )
}
export default Header;