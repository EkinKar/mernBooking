import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className={styles.logo}>EkoBooking</span>
        </Link>
        <div className={styles.navItems}>
          <button className={styles.navButton}>Register</button>
          <button className={styles.navButton}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
