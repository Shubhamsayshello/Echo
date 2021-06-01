import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
    return <header className={classes.header}>
        {/* <div className={classes.logo}>Great Quotes</div> */}
        <NavLink  className={classes.logo} style={{ textDecoration: 'none' }}
        to='/quotes'>Echo.</NavLink>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to='/quotes' activeClassName={classes.active}>All Quotes</NavLink>
                </li>
                <li>
                    <NavLink to='/new-quotes' activeClassName={classes.active}>Add New Quote</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}


export default MainNavigation;