import useFetch from '../../hooks/useFetch';
import styles from './featuredProperties.module.css';

const FeaturedProperties = () => {
  const { data, loading } = useFetch('/hotels/?featured=true&limit=4');
  return (
    <div className={styles.fp}>
      {loading ? (
        'Loading..'
      ) : (
        <>
          {data.map((item) => (
            <div className={styles.fpItem} key={item._id}>
              <img
                src={
                  item.photos[0] ||
                  'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
                }
                alt=""
                className={styles.fpImg}
              />
              <span className={styles.fpName}>{item.name}</span>
              <span className={styles.fpCity}>{item.city}</span>
              <span className={styles.fpPrice}>
                Starting from {item.cheapesPrice}
              </span>
              {item.rating && (
                <div className={styles.fpRating}>
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
