import React from 'react';
import { Link } from 'react-router-dom';


const Burger = ({closeModel}) => {

    
  return (
<div className="big-modal"> 
    {/* <button className="modal-close" onClick={()=>closeModel(false)} width="30px"> <img src="/img/Без названия.png" width="30px"/> </button> */}
        <div className="burger-menu" onClick={()=>closeModel(false)}>
            <Link className="burger-link" to="/">Movie</Link>
            <Link className="burger-link"  to="/catalog">Catalog</Link>
            <Link className="burger-link"  to="/search">Search</Link>
            <Link className="burger-link"  to="/filter">Filter</Link>
            <Link className="burger-link"  to="/">Login</Link>
        </div>
</div>
  )
}

export default Burger;