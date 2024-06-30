import { Component } from 'react'
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Users from './Users.js';
import AddUser from './AddUser.js';


export default class MainApp extends Component {

    componentDidMount(){
 const json= localStorage.getItem('gfg')
 const userData= JSON.parse(json)
 if(userData){
    this.setState(()=>{
        return{
            userData
        }
    })
 }
    }
    componentDidUpdate(){
        const json= JSON.stringify(this.state.userData)
        localStorage.setItem('gfg',json)
        localStorage.setItem('hey',"hello")
        //localStorage.setItem('gffg',json)
     }


    state = {
        headerData: 'Welcome to header',
        footerData: 'Welcome to Footer',
        userData:[]
    }
    deleteAll=()=>{
        this.setState(()=>{
            return{
            userData:[]
            }
        })
    }

    addUser = (data) => {
        this.setState((prevState) => ({
            userData: [...prevState.userData, data]
        }));
        console.log(this.state.userData);
    }
    
    render() {

        return (
            <>
                <Header hdata={this.state.headerData} />
                <Users userdata={this.state.userData} 
                da={this.deleteAll}
                hasData={this.state.userData.length>0}

                />
                <p>MainApp </p>
                <AddUser au={this.addUser} />
                <Footer fdata={this.state.footerData} />
            </>
        )
    }

}