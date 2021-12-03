import { NavLink } from "react-router-dom";
import './Header.scss'

const Header = () => {
    return(
        <section className='header'>
            <img className='header__logo' src='http://localhost:5000/Dealight-logo.png' alt='Main logo'></img>
            <ul className='header__nav-list'>
                <li className='header__nav-list-item'><NavLink to='/' exact className={(isActive) => "header__link" + (isActive ? "--active" : "")}>Home</NavLink></li>
                <li className='header__nav-list-item'><NavLink to='/places' className={(isActive) => "header__link" + (isActive ? "--active" : "")}>Places</NavLink></li>
                <li className='header__nav-list-item'><NavLink to='/deals' exact className={(isActive) => "header__link" + (isActive ? "--active" : "")}>Deals</NavLink></li>    
            </ul>
        </section>
    );
}

export default Header