import { Link } from 'react-router-dom';
import styles from './searchItem.module.css';

const SearchItem = ({ item }) => {
  return (
    <div className={styles.searchItem}>
      <img
        src={
          item.photos[0] ||
          'https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1'
        }
        alt=""
        className={styles.siImg}
      />
      <div className={styles.siDesc}>
        <h1 className={styles.siTitle}>{item.name}</h1>
        <span className={styles.siDistance}>{item.distance}m from center</span>
        <span className={styles.siTaxiOp}>Free airport taxi</span>
        <span className={styles.siSubtitle}>
          Studio Apartment with Air conditioning
        </span>
        <span className={styles.siFeatures}>{item.desc}</span>
        <span className={styles.siCancelOp}>Free cancellation </span>
        <span className={styles.siCancelOpSubtitle}>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className={styles.siDetails}>
        {item.rating && (
          <div className={styles.siRating}>
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className={styles.siDetailTexts}>
          <span className={styles.siPrice}>${item.cheapestPrice}</span>
          <span className={styles.siTaxOp}>Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className={styles.siCheckButton}>See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SearchItem;
