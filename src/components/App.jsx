import React, { Component } from 'react'
import Header from './Header'
import { getListUsers } from '../requests/getUsers';
import User from './User';
import { TablePagination } from '@material-ui/core';


class App extends Component {
  state = {
    users: [],
    value: '',
    details: false,
    total: 0,
    current: 1,
    display: 5,
  }
  componentDidMount(){
    this.getUsers(this.state.value)
  }
  async getUsers(query){
    const users = await getListUsers(query)
    if(!users){
      return; 
    }
    this.setState({
      users,
      details: true,
    })
  }

  getDetails(e){
    console.log('Event', e.target.value, this);
    let val = e.target.value.trimRight();
    if(val.length > 2){
      this.setState({
        value: val
      })
      this.getUsers(this.state.value)
    }
  }
    render(){
      const {users, current, display, total} = this.state;
      console.log(users)
      console.log('state:', this.state)
      return(
        <div>
            <Header
            getDetails={this.getDetails.bind(this)}
            />
            {users.map(user => (
              <User
                key={user.id}
                user={user}
                details={this.state.details}
              />
            ))}
            <TablePagination
              component="nav"
              page={0}
              rowsPerPage={users.length}
              count={users.length}
              onChangePage={() => console.log('Pagination in place')}
            />

        </div>
        )
    }
}

export default App