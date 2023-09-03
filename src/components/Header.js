import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../Store';
const Header = () => {

  const isUserAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispacthAction = useDispatch()
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isUserAuthenticated &&
            <>
              <li>
                <a href='/'>My Products</a>
              </li>
              <li>
                <a href='/'>My Sales</a>
              </li>
              <li>
                <button onClick={() => { dispacthAction(authActions.logOut()) }}>Logout</button>
              </li>
            </>}

        </ul>
      </nav>
    </header>
  );
};

export default Header;
