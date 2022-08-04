import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className={styles.logo}>EkoBooking</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className={styles.navItems}>
            <button className={styles.navButton}>Register</button>
            <button className={styles.navButton}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
