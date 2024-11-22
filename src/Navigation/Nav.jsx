import './Nav.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
        <NavLink to="/expense">Add Expense</NavLink>
        <NavLink to="/view">View Expense</NavLink>
      </nav>
     );
}
 
export default Navbar;