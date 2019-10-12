import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clicked: [],
    score: 0,
    bestScore:0
  };
   shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
  removeFriend = id => {
    let score = this.state.score;
    let bestScore = this.state.bestScore;
    if(this.state.clicked.includes(id)){
      alert("You lost")
      this.setState({
        clicked : [],
        score: 0
      })
    } else {
      score++;
      this.setState({
        score: score
      })
      this.state.clicked.push(id);
      if(score > bestScore){
        this.setState({
          bestScore: score
        })
      }

    }
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.shuffleArray(this.state.friends);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title title={"Clicky game!"}
          score={this.state.score}
          bestScore={this.state.bestScore}
        />
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
