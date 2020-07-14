import React, { Component } from "react";
import "./DirectoryGroups.css";
import Banner from "../../components/Banner/Banner";
import Banner__Directory from "assets/images/Banner__pink.png";
import InputTextField from "../../components/InputTextField/InputTextField";
import Button from "../../components/Button/Button";
import GroupCard from "../../components/GroupCard/GroupCard";
import picture1 from "../../assets/images/card_small1.png";
import Card from "../../components/Card/Card";
import { BASE_URL } from "../../services/constants";
import { render } from "react-dom";
import axios from "axios";

// Page or
class DirectoryGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    };
  }

  componentDidMount() {
    axios
      .get(`${BASE_URL}/view-group`)
      .then(response => {
        this.setState({
          groups: response.data
        });
      })
      .catch(error => {
        render("Error while fetching and parsing API request", error);
      });
  }

  render() {
    const groups = this.state.groups;
    return (
      <div className="DirectoryPage">
        <Banner background={Banner__Directory}>
          <h3 style={{ margin: 0 }}>Directory: My Groups</h3>
          <InputTextField
            type="text"
            variation="wide"
            name="search directory"
            placeholder="Search Groups"
          />
        </Banner>
        <div className="secondNav">
          <a className="secondNav" href="./people">
            <Button text="My Friends" color="outline" size="long" />
          </a>{" "}
          <a className="secondNav" href="./groups">
            <Button text="My Groups" color="purple" size="long" />
          </a>
        </div>
        <div className="CommunityPage_body">
          <div>
            <header className="CommunityPage__header">Your Groups</header>
          </div>
          <div className="CommunityPage__groups-in-city-container">
            {/* Map loops through groups array, assigns the number of members to variable and generates card */}
            {groups.map((group, index) => {
              return (
                <div key={index} className="CommunityPage__groupCard-single">
                  <GroupCard
                    name={group.title}
                    members={group.members.length}
                    location={group.location}
                    picture={picture1}
                    id={group.id}
                  />
                </div>
              );
            })}
            <div className="CommunityPage__groupCard-single">
              {" "}
              <Card outline size="medium-wide-directory">
                <a href="/">Discover New Groups</a>
              </Card>
            </div>
          </div>
          <a className="seeAll-Button">See All</a>
        </div>
      </div>
    );
  }
}

export default DirectoryGroups;
