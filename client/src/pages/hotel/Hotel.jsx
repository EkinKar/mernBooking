import styles from './hotel.module.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import useFetch from '../../hooks/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        'Loading...'
      ) : (
        <div className={styles.hotelContainer}>
          {open && (
            <div className={styles.slider}>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className={styles.close}
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className={styles.arrow}
                onClick={() => handleMove('l')}
              />
              <div className={styles.sliderWrapper}>
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className={styles.sliderImg}
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className={styles.arrow}
                onClick={() => handleMove('r')}
              />
            </div>
          )}
          <div className={styles.hotelWrapper}>
            <button className={styles.bookNow}>Reserve or Book Now!</button>
            <h1 className={styles.hotelTitle}>{data.name}</h1>
            <div className={styles.hotelAddress}>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.adress}</span>
            </div>
            <span className={styles.hotelDistance}>
              Excellent location - {data.distance}m from center
            </span>
            <span className={styles.hotelPriceHighlight}>
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className={styles.hotelImages}>
              {data.photos?.map((photo, i) => (
                <div className={styles.hotelImgWrapper} key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className={styles.hotelImg}
                  />
                </div>
              ))}
            </div>
            <div className={styles.hotelDetails}>
              <div className={styles.hotelDetailsTexts}>
                <h1 className={styles.hotelTitle}>{data.title}</h1>
                <p className={styles.hotelDesc}>{data.desc}</p>
              </div>
              <div className={styles.hotelDetailsPrice}>
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
