import { FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";

import './styles.css';

import Logo from '../../assets/Logo.png';

export function Header () {
    return (
      <header>
        <img src={Logo} alt="logo" className='logo'/>

        <div className="actions">
          <div className="location">
            <FaMapMarkerAlt />
            <span>Quixeramobim, CE</span>
          </div>
          <button className="shop">
            <FaShoppingCart/>  
          </button>
        </div>
      </header>
    )
}
