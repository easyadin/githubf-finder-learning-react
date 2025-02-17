import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './users/Users'
import axios from 'axios';
import Search from './users/Search';
import Alert from './components/layout/Alert';


class App extends Component {
  state = {
    users: [],
    loading:false,
    alert:null
  }


//  async componentDidMount(){
//       //runs when component mounts
//       //request can be made here
//       this.setState({ 
//         loading:true,
//         alert:null
//       });
//      const res = await axios.get(`https://api.github.com/users?client_id=
//      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
//      ${process.env.REACT_APP_GITHUB_CLIENT_ID}`);// get data from api with api key
//      this.setState({users:res.data,loading: false}); // pass data to users array
//   }

  //search github users
  searchUsers = async (text) =>{
    this.setState({loading: true })

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}`);// get data from api with api key
    this.setState({users:res.data.items,loading: false}); // pass data to users array
  }

  // clear users from state
  clearUsers = () => {
    this.setState({
      users:[], loading:false
    });
  }

  // set Alert when search box is empty
  setAlert =(msg, type) => {
      this.setState({ alert: {msg, type}});

      setTimeout(() => this.setState({alert:null}), 5000)
  };

  render(){
    // destructuring
    const {users, loading} = this.state;
    return (
      <div>
          <nav className="navbar bg-primary">
            <Navbar />
          </nav>
          <div className="container">
            <Alert alert={this.state.alert} />
            <Search 
              searchUsers={this.searchUsers} 
              clearUsers={this.clearUsers} 
              showClear={this.state.users.length > 0 ? true : false}
              setAlert={this.setAlert}
            />
            <Users loading={loading} users={users}/>
          </div>
      </div>
     
      
    );
  }
}

export default App;
