import React, { Component } from "react";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      listName: "",
      location: "",
      budget: ""
    };
  }

  handleInputChange = e => {
    e.preventDefault();
    
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.listName]: e.target.value,
            [e.target.budget]: e.target.value
        })
    };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    const data = this.state
    console.log(data);
  
    };

  render() {
    return (  
      <form className="userInputForm" onSubmit={this.handleSubmit}>
        <label htmlFor="userName">Name</label>
        <input type="text" id="name" placeholder="name" name="userName" onChange={this.handleInputChange}></input>

        <label htmlFor="listName">List Name</label>
        <input type="text" id="list" placeholder="list" name="listName" onChange={this.handleInputChange}></input>

        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder="location" name="location" onChange={this.handleInputChange}></input>

        <label htmlFor="budget">Budget</label>
        <select name="budget" id="budget" onChange={this.handleInputChange}>
            <option value="">select budget</option>
            <option value="100">$100</option>
            <option value="200">$200</option>
            <option value="300">$300</option>
            <option value="400">$400</option>
            <option value="500+">$500+</option>
        </select>

        <button type="submit" value="Submit">Go To Search</button>
      </form>
    );
  }
}
export default UserDetails;