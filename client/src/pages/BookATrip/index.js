import React from "react";
import "./BookATrip.css";
import BookATripImage from "../../components/BookATripImage/BookATripImage";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__pink from "assets/images/Banner__pink.png";
import image1 from "assets/images/hawaii.png";
import image2 from "assets/images/greece.png";
import image3 from "assets/images/southernCaribbean.png";
import image4 from "assets/images/easternCaribbean.png";
import Button from "../../components/Button/Button";

const BookATrip = () => {
  const pageActive = false;
  if (pageActive) {
    return (
      <BookATripContents />
    );
  } else {
    return (
      <div>coming soon</div>
    )
  }
};

function BookATripContents(props) {
  const handleClick = (e) => console.log('Button Clicked')
  return (
    <div className="BookATrip">
      <div className="NewBanner">
        <Banner background={Banner__pink}>
          <div className="community-page-header">
            <h3 style={{ margin: 0 }}>Book a Trip</h3>
          </div>
          <InputTextField
            type="text"
            variation="wide"
            name="search directory"
            placeholder="Search Trip"
          />
        </Banner>
      </div>
      <header className="BookATrip__header">Upcoming Trips</header>
      <BookATripImage
        className="BookATrip__images"
        cards={[
          { image: image1, url: "/TripDetail", description: "Hawaii May 2020" },
          { image: image2, url: "/TripDetail", description: "Greece & Croatia Cruise June 2020" },
          { image: image3, url: "/TripDetail", description: "Southern Caribbean Cruise July 2020" },
          { image: image1, url: "/TripDetail", description: "Hawaii May 2020" },
          {
            image: image4,
            url: "/TripDetail",
            description: "Eastern Caribbean Cruise New Year's 2021"
          }
        ]}
      />
      <div className="BookATrip__button-container">
        <Button text="View Previous Trips" color="pink" size="large" handleClick={handleClick} />
      </div>
    </div>
  )
}

export default BookATrip;
