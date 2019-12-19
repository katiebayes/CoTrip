import React from "react";
import "./HomePage.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import example1 from "assets/images/card_small2.png";
import example2 from "assets/images/Hawaii-resort.jpg";
import happiness from "assets/images/media-card-2.png";
import van from "assets/images/media-card-3.png";
import nightSky from "assets/images/media-card-4.png";
import waterfall from "assets/images/media-card-5.png";
import flight from "assets/images/media-card-6.png";
import Banner__purpleBig from "components/Banner/Banner__purple--big.png";
import image from "../../assets/images/card_profile2.png";

import people from "assets/images/add-friend.png";
import airplane from "assets/images/airplane-shape.png";
import groups from "assets/images/protest.png";
import hashtags from "assets/images/trending-hashtags.png";

import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import GroupCard from "../../components/GroupCard/GroupCard";
import TrendingHashtagCard from "../../components/TrendingHashtagCard/TrendingHashtagCard";
import BookTripCard from "../../components/BookTripCard/BookTripCard";
import TripCard from "../../components/TripCard/TripCard";
import MediaCard from "../../components/MediaCard/MediaCard";
import SignUp from "components/SignUpAd/SignUpAd";
import Banner from "components/Banner/Banner";
import PersonCard from "components/PersonCard/PersonCard";

const personCard = (
  <PersonCard
    image={image}
    name="Lindsay L."
    location="Washington D.C."
    interests={[
      { url: "#", interests: "veganism" },
      { url: "#", interests: "budgeting" },
      { url: "#", interests: "travel" },
      { url: "#", interests: "outdoors" }
    ]}
  />
);

const handleClick = e => {
  e.preventDefault();
  console.log("clicked");
};

const HomePage = props => {
  return (
    <body className="HomePage__wrapper">
      <nav>
        <NavBar profileImage={people}></NavBar>
      </nav>
      <div className="HomePage__content">
        <Banner background={Banner__purpleBig}>
          <h1>Welcome, Justine!</h1>
        </Banner>
        <div className="HomePage_top-items-wrapper">
          <span className="HomePage__suggestions-container">
            <h1 className="HomePage__suggested-header">Suggested Groups</h1>
            <div className="HomePage__group-cards-container">
              <GroupCard
                name="DIY with your kids"
                members="98"
                location="Boston, MA"
                picture={example1}
              />
              <span className="HomePage__groupcard-2">
                <GroupCard
                  name="DIY with your kids"
                  members="98"
                  location="Boston, MA"
                  picture={example1}
                />
              </span>
              <span className="HomePage__groupcard-3">
                <GroupCard
                  name="DIY with your kids"
                  members="98"
                  location="Boston, MA"
                  picture={example1}
                />
              </span>
              <a href="/home" className="HomePage__arrow" />
            </div>
            <h1 className="HomePage__suggested-header">Suggested People</h1>
            <div className="HomePage__people-container">
              {personCard}
              {personCard}
              {personCard}
              <a href="/home" className="HomePage__arrow lower-people" />
            </div>
          </span>

          <span className="HomePage__top-cards-wrapper">
            <div className="HomePage__cards-container">
              <BookTripCard>
                <h1>Book a Trip</h1>
                <TripCard src={example2} location="Hawaii" date="May 2020" />
                <TripCard src={example1} location="Puerto Rico" date="April 2019" />
              </BookTripCard>
              <TrendingHashtagCard
                data={[
                  "#dope",
                  "#torch",
                  "#hawaii",
                  "#kids",
                  "#cats",
                  "#dogs",
                  "#italy",
                  "#starwars",
                  "#babyyoda"
                ]}
              >
                <h1>Trending Hashtags</h1>
              </TrendingHashtagCard>
            </div>
          </span>
        </div>

        <div className="HomePage__mobile-wrapper">
          <Link to="/">
            <Card color="yellow" size="mobile" picture={groups}>
              <h2>Suggested Groups</h2>
            </Card>
          </Link>
          <Link to="/">
            <Card color="pink" size="mobile" picture={airplane}>
              <div>
                <h2>Book a Trip</h2>
              </div>
            </Card>
          </Link>
          <Link to="/">
            <Card color="red" size="mobile" picture={people}>
              <div>
                <h2>Suggested People</h2>
              </div>
            </Card>
          </Link>
          <Link to="/">
            <Card color="purple" size="mobile" picture={hashtags}>
              <div>
                <h2>Trending Hashtags</h2>
              </div>
            </Card>
          </Link>
        </div>
      </div>
      <div className="HomePage__scrapbook-wrapper">
        <span className="HomePage__scrapbook-container">
          <h1 className="HomePage__suggested-header">CoTripper Scrapbook</h1>
          <div className="HomePage__scrapbook-cards-container">
            <MediaCard
              imageSrc={happiness}
              size="medium"
              to="/home"
              footerText="Posted By: --user--"
            />
            <MediaCard imageSrc={van} size="medium" to="/home" footerText="Posted By: --user--" />

            <MediaCard
              imageSrc={nightSky}
              size="medium"
              to="/home"
              footerText="Posted By: --user--"
            />

            <span className="HomePage__mediacard-hide">
              <MediaCard
                imageSrc={waterfall}
                size="medium"
                to="/home"
                footerText="Posted By: --user--"
              />
            </span>
            <span className="HomePage__mediacard-hide">
              <MediaCard
                imageSrc={flight}
                size="medium"
                to="/home"
                footerText="Posted By: --user--"
              />
            </span>
          </div>
        </span>
      </div>

      <footer className="HomePage__footer-wrapper">
        <SignUp onClick={handleClick}>
          <h2>Never Miss a Trip</h2>
          <h3>Sign up with your email address to recieve news and updates</h3>
        </SignUp>
        <Footer />
      </footer>
    </body>
  );
};

export default HomePage;
