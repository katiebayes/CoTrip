import React, { Component } from "react";
import "./DirectoryPeople.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__Directory from "assets/images/Banner__pink.png";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Pill from "../../components/Pill/Pill";
import PersonCard from "../../components/PersonCard/PersonCard";
import image1 from "../../assets/images/profile-picture-1.png";
import image2 from "../../assets/images/profile-picture-2.png";
import image3 from "../../assets/images/profile-picture-3.png";
import image4 from "../../assets/images/profile-picture-4.png";
import image5 from "../../assets/images/profile-picture-5.png";
import Card from "../../components/Card/Card";

let friends = []
let others = []
let friendRequests = []

export default class DirectoryPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      others: [],
      friendRequests: []
    };
  }


  componentDidMount() {
    this.getFriends()
    friends = this.state.friends
  }


  
  
  handleClick = e => {
    ('/home')
  };
  
  getFriends = () => {
    fetch(`http://127.0.0.1:8000/profile`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(json => {
        this.makeFriends(json)
      });
  }
  
  makeFriends = (data) => {
    for (let i = 0; i < data.length; i++) {
      if (this.trueFriends(data[i].user)) {
        let user = data[i]
        //instead of name just whole user
        friends.push(user)
      } else if (data[i].user === this.props.userid) {
        //do nothing
      } else if (this.props.requests.length != 0) {
        for (let j = 0; j < this.props.requests.length; j++) {
          if (data[i].user === this.props.requests[j]) {
            let user = data[i]
            friendRequests.push(user)
          } else {
            let user = data[i]
            others.push(user)
          }
        }
      } else {
        let user = data[i]
        others.push(user)
      }
    }
    this.setState({
      friends: friends,
      others: others,
      friendRequests: friendRequests
    })
  }
  
  showFriends = () => {
    let cards = []
    this.friendCards(cards)
    return cards
  }

  friendCards = (arr) => {
    let length  = friends.length
    for (let i = 0; i < length; i++) {
      //change to get the ith in the list and that objects name and image
      arr.push(
        <div className="CommunityPage__momCard-single">
        <PersonCard image={this.state.friends[i].image} name={this.state.friends[i].first_name} location="Washington D.C." />
        <button className="FriendButton" onClick={this.removeFriend}>Remove Friend</button>
        </div>
      )
    }
  }

  showOthers = () => {
    let cards = []
    this.otherCards(cards)
    return cards
  }

  otherCards = (arr) => {
    let length  = others.length
    for (let i = 0; i < length; i++) {
      //same as the friends function
      arr.push(
        <div className="CommunityPage__momCard-single">
        <PersonCard image={this.state.others[i].image} name={this.state.others[i].first_name} location="Washington D.C." />
        <button className="FriendButton" onClick={this.sendRequest}>Add Friend</button>
        </div>
      )
    }
  }

  showRequests = () => {
    let cards = []
    this.requestCards(cards)
    return cards
  }

  requestCards = (arr) => {
    let length  = friendRequests.length
    for (let i = 0; i < length; i++) {
      //same as the friends function
      arr.push(
        <div className="CommunityPage__momCard-single">
        <PersonCard image={this.state.friendRequests[i].image} name={this.state.friendRequests[i].first_name} location="Washington D.C." />
        <button className="FriendButton" onClick={this.acceptRequest}>Accept</button>
        </div>
      )
    }
  }

  trueFriends = (friendId) => {
    for (let i = 0; i < this.props.connections.length; i++) {
      if (this.props.connections[i] === friendId) {
        return true
      }
    }
  }

  removeFriend = (e) => {
    let nonFriend = e.target.parentElement.children[0].children[1].textContent
    let connectionsList = this.props.connections
    for (let i = 0; i < this.state.friends.length; i++) {
      if (this.state.friends[i].first_name === nonFriend) {
        connectionsList.splice(i, 1)
      }
    }
    let data = { connections: connectionsList }
    fetch(`http://127.0.0.1:8000/profile/${this.props.userid}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    window.location.reload(true)
  }

  sendRequest = (e) => {
    let newFriend = e.target.parentElement.children[0].children[1].textContent
    e.target.parentElement.children[1].textContent = "Request Sent"
    let newFriendId
    let requestList
    for (let i = 0; i < this.state.others.length; i++) {
      if (this.state.others[i].first_name === newFriend) {
        newFriendId = this.state.others[i].user
        requestList = this.state.others[i].requests
      }
    }
    requestList.push(this.props.userid)
    let data = { requests: requestList }
    fetch(`http://127.0.0.1:8000/profile/${newFriendId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  acceptRequest = (e) => {
    let newFriend = e.target.parentElement.children[0].children[1].textContent
    let newFriendId
    let connectionsList = this.props.connections
    for (let i = 0; i < this.state.friendRequests.length; i++) {
      if (this.state.friendRequests[i].first_name === newFriend) {
        connectionsList.push(this.state.friendRequests[i].user)
        newFriendId = this.state.friendRequests[i].user
      }
    }
    let data = { connections: connectionsList }
    fetch(`http://127.0.0.1:8000/profile/${this.props.userid}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    window.location.reload(true)
    this.manageRequests(newFriendId)
  }
  
  manageRequests = (id) => {
    let requestList = this.props.requests
    for (let i = 0; i < requestList.length; i++) {
      if (id === requestList[i]) {
        console.log("it's here")
        requestList.splice(i, 1)
        requestList.push(0)
      }
    }
    let data = { requests: requestList }
    fetch(`http://127.0.0.1:8000/profile/${this.props.userid}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }


  testRequests = () => {
    let data = { requests: [3] }
    fetch(`http://127.0.0.1:8000/profile/${this.props.userid}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }


  render() {
    return (
      <div className="CommunityPage">
        <NavBar page={0} profileImage={people} />
        <Banner background={Banner__Directory}>
          <h3 style={{ margin: 0 }}>Directory: My Friends</h3>
          <InputTextField
            type="text"
            variation="wide"
            name="search directory"
            placeholder="Search Groups"
          />
        </Banner>
        <div className="secondNav">
          <a className="secondNav">
            <Button text="My Friends" color="purple" size="long" handleClick={this.handleClick} />
          </a>
          <a className="secondNav" href="./groups">
            <Button text="My Groups" color="outline" size="long" />
          </a>
        </div>
        <header className="CommunityPage__header">Friends:</header>
        <div className="CommunityPage__moms-in-city-container">
          {this.showFriends()}
        </div>
        <header className="CommunityPage__header">Requests:</header>
        <div className="CommunityPage__moms-in-city-container">
          {this.showRequests()}
        </div>
        <header className="CommunityPage__header">Add Other Moms As Friends:</header>
        <div className="CommunityPage_SortByButton">
          <div className="CommunityPage_SortByText">Sort By: Location </div>
        </div>
        <div className="CommunityPage_body">
          <div className="CommunityPage__moms-in-city-container">
            {this.showOthers()}
            <div className="CommunityPage__momCard-single">
              <Card outline size="medium-tall">
                <a href="/">Discover New Connections</a>
              </Card>
            </div>
          </div>
          <a className="seeMore-Button">See More</a>
        </div>
        <Footer history={this.props.history} handle_logout={this.props.handle_logout} />
      </div>
    );
  }
}



