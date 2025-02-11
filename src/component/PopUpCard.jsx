import React, { useEffect, useState } from "react";
import img1 from "../Assests/4.jpg";
import "./PopUpCard.css";

const PopUpCard = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true); // Default to `true` to show popup on load

  useEffect(() => {
    // Show the popup after a 1-second delay (1000ms)
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 4000);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  // Handle closing the pop-up
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      {/* Pop-Up Card */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-card">
            <button className="close-popup-btn" onClick={handleClosePopup}>
              &times;
            </button>
            <img src={img1} alt="Popup Content" className="popup-image" />
            <div className="popup-content">
              <h3>Welcome to Our Store!</h3>
              <p>
                Enjoy exclusive deals and fresh seasonal fruits. Start shopping now and experience the best quality!
              </p>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUpCard;
