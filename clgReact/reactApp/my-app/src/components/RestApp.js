import React, { Component } from "react";
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/users';

export default class RestApp extends Component {
    state = {
        userData: []
    };

    componentDidMount() {
        // Load data from local storage if available
        const json = localStorage.getItem('userData');
        const userData = JSON.parse(json);
        
        if (userData && userData.length > 0) {
            this.setState({ userData });
        } else {
            // Fetch data from API if not found in local storage
            axios.get(URL)
                .then((res) => res.data)
                .then((data) => {
                    this.setState({ userData: data }, () => {
                        // Save the fetched data to local storage
                        const json = JSON.stringify(this.state.userData);
                        localStorage.setItem('userData', json);
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }

    handleDeleteUser = (userId) => {
        // Filter out the user to be deleted
        const updatedUsers = this.state.userData.filter(user => user.id !== userId);
        // Update state with the filtered users
        this.setState({ userData: updatedUsers }, () => {
            // Update local storage with the updated user data
            const json = JSON.stringify(this.state.userData);
            localStorage.setItem('userData', json);
        });
    };

    render() {
        return (
            <div>
                {
                    this.state.userData.map((user) => (
                        <div key={user.id}>
                            <p>{user.name} --- {user.email}</p>
                            <button onClick={() => this.handleDeleteUser(user.id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        );
    }
}



/* old code
import { Component } from "react";
import axios from 'axios'
const URL = 'https://jsonplaceholder.typicode.com/users'
export default class RestApp extends Component {

    state={
        userData:[]
    }

    componentDidMount() {
        axios.get(URL)
            .then((res) => res.data)
            .then((data) => {
               this.setState(()=>{
                return{
                    userData:data
                }
               })
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.userData.map((alldata)=>(
                        <div>
                            {alldata.name} --- {alldata.email}
                        </div>
                    ))
                }
            </div>
        )
    }
}
*/
