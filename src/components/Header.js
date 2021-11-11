import {Link} from 'react-router-dom';

const Header = ()=>{

    return(
        <header className = "main-header">
            <div className="container">
            <div className="row">    
            <div className="main-header__left">
            <Link to="/"><img className="header-logo" src="img/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" to="/"  alt="logo" /></Link>
            <Link className="main-link" to="/catalog">Catalog</Link>
            <Link className="main-link" to="/">Movies</Link>
            <Link to="/search"><i class="fas fa-search main-link"></i></Link>
            </div>
            <div className="main-header__right">
            <select className="header_lang" id="language" name="language">
            <option select value="eng">EN</option>
            <option value="rus">RU</option>
            <option value="uz">UZ</option>  
            </select>
            <Link className="main-link" to="/">Login</Link>
            <Link className="main-link" to="/filter">Filters</Link>
            </div>
            </div>
            </div>
        </header>
    )
}
export default Header;